import { RateLimitAttempt, RateLimitResult } from "@/src/types/type-utils";

/**
 * In-memory storage for tracking rate limit attempts by IP address
 * Note: This will reset when the server restarts. For production with multiple
 * instances, consider using Redis or similar persistent storage.
 */
const ipAttempts = new Map<string, RateLimitAttempt>();

/**
 * Rate limiting configuration
 * Controls how many attempts are allowed within a time window
 */
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes in milliseconds
  maxAttempts: 5,           // Maximum attempts allowed per window
};

/**
 * Checks and increments rate limit for a given IP address
 * This function modifies the attempt count, so use it when processing actual requests
 * 
 * @param ip - IP address to check and increment rate limit for
 * @returns Rate limit result with allowed status, remaining attempts, and reset time
 * 
 * @example
 * ```typescript
 * const rateLimit = getRateLimitForIP('192.168.1.1');
 * if (!rateLimit.allowed) {
 *   return createRateLimitResponse();
 * }
 * console.log(`${rateLimit.remaining} attempts remaining`);
 * ```
 */
export function getRateLimitForIP(ip: string): RateLimitResult {
  const now = Date.now();
  const { windowMs, maxAttempts } = RATE_LIMIT_CONFIG;
  
  const current = ipAttempts.get(ip) || { 
    count: 0, 
    resetTime: now + windowMs 
  };
  
  // Reset counter if time window has expired
  if (now > current.resetTime) {
    current.count = 0;
    current.resetTime = now + windowMs;
  }
  
  // Increment attempt counter
  current.count++;
  ipAttempts.set(ip, current);
  
  return {
    allowed: current.count <= maxAttempts,
    remaining: Math.max(0, maxAttempts - current.count),
    resetTime: current.resetTime
  };
}

/**
 * Checks rate limit status without incrementing the counter
 * Useful for pre-flight checks or displaying rate limit info to users
 * 
 * @param ip - IP address to check rate limit status for
 * @returns Rate limit result without modifying attempt count
 * 
 * @example
 * ```typescript
 * const rateLimit = checkRateLimit('192.168.1.1');
 * if (!rateLimit.allowed) {
 *   console.log('This IP is currently rate limited');
 * }
 * ```
 */
export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const { windowMs, maxAttempts } = RATE_LIMIT_CONFIG;
  
  const current = ipAttempts.get(ip);
  
  // If no record exists or time window expired, allow request
  if (!current || now > current.resetTime) {
    return {
      allowed: true,
      remaining: maxAttempts - 1,
      resetTime: now + windowMs
    };
  }
  
  return {
    allowed: current.count < maxAttempts,
    remaining: Math.max(0, maxAttempts - current.count),
    resetTime: current.resetTime
  };
}

/**
 * Resets rate limit for a specific IP address
 * Useful for admin operations or when you need to manually clear rate limits
 * 
 * @param ip - IP address to reset rate limit for
 * 
 * @example
 * ```typescript
 * // Reset rate limit for a specific user
 * resetRateLimitForIP('192.168.1.1');
 * console.log('Rate limit cleared for IP');
 * ```
 */
export function resetRateLimitForIP(ip: string): void {
  ipAttempts.delete(ip);
}

/**
 * Removes expired rate limit entries from memory
 * Should be called periodically to prevent memory leaks in long-running applications
 * 
 * @example
 * ```typescript
 * // Clean up expired entries every hour
 * setInterval(cleanupExpiredAttempts, 60 * 60 * 1000);
 * ```
 */
export function cleanupExpiredAttempts(): void {
  const now = Date.now();
  
  for (const [ip, attempt] of ipAttempts.entries()) {
    if (now > attempt.resetTime) {
      ipAttempts.delete(ip);
    }
  }
}

/**
 * Gets statistics about current rate limiting state
 * Useful for monitoring and analytics dashboards
 * 
 * @returns Object containing active IPs, blocked IPs, and total attempts
 * 
 * @example
 * ```typescript
 * const stats = getRateLimitStats();
 * console.log(`Active IPs: ${stats.activeIPs}`);
 * console.log(`Blocked IPs: ${stats.blockedIPs.join(', ')}`);
 * console.log(`Total attempts: ${stats.totalAttempts}`);
 * ```
 */
export function getRateLimitStats(): {
  activeIPs: number;
  blockedIPs: string[];
  totalAttempts: number;
} {
  const now = Date.now();
  const blockedIPs: string[] = [];
  let totalAttempts = 0;
  
  for (const [ip, attempt] of ipAttempts.entries()) {
    // Only count active (non-expired) entries
    if (now <= attempt.resetTime) {
      totalAttempts += attempt.count;
      if (attempt.count >= RATE_LIMIT_CONFIG.maxAttempts) {
        blockedIPs.push(ip);
      }
    }
  }
  
  return {
    activeIPs: ipAttempts.size,
    blockedIPs,
    totalAttempts
  };
}

/**
 * Updates rate limiting configuration at runtime
 * Allows dynamic adjustment of rate limits without restarting the application
 * 
 * @param newConfig - Partial configuration object with new values
 * 
 * @example
 * ```typescript
 * // Increase rate limit during high traffic periods
 * updateRateLimitConfig({ maxAttempts: 10 });
 * 
 * // Reduce window during attack
 * updateRateLimitConfig({ windowMs: 5 * 60 * 1000 }); // 5 minutes
 * ```
 */
export function updateRateLimitConfig(newConfig: Partial<typeof RATE_LIMIT_CONFIG>): void {
  Object.assign(RATE_LIMIT_CONFIG, newConfig);
}

/**
 * Creates a standardized HTTP 429 (Too Many Requests) response
 * Includes proper headers and retry information for clients
 * 
 * @returns HTTP Response with 429 status and retry information
 * 
 * @example
 * ```typescript
 * const rateLimit = getRateLimitForIP(ip);
 * if (!rateLimit.allowed) {
 *   return createRateLimitResponse();
 * }
 * ```
 */
export function createRateLimitResponse(): Response {
  return new Response(
    JSON.stringify({ 
      error: 'Too many requests. Please try again in 15 minutes.',
      retryAfter: Math.ceil(RATE_LIMIT_CONFIG.windowMs / 1000) // in seconds
    }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': String(Math.ceil(RATE_LIMIT_CONFIG.windowMs / 1000))
      }
    }
  );
}