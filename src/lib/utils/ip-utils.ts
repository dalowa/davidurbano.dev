import { NextRequest } from 'next/server';

/**
 * Extracts the real client IP address from a Next.js request
 * Handles various proxy setups (Cloudflare, Vercel, nginx, etc.)
 * 
 * @param request - Next.js request object containing headers
 * @returns Client IP address or 'unknown' if cannot be determined
 * 
 * @example
 * ```typescript
 * export async function POST(request: NextRequest) {
 *   const clientIP = getClientIP(request);
 *   console.log('Request from:', clientIP);
 * }
 * ```
 */
export function getClientIP(request: NextRequest): string {
  // Try x-forwarded-for first (most common, set by proxies)
  const forwarded = request.headers.get('x-forwarded-for');
  
  // Try x-real-ip (set by nginx and other reverse proxies)
  const realIP = request.headers.get('x-real-ip');
  
  // Try cf-connecting-ip (Cloudflare specific header)
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, get the first (original client)
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  // Unable to determine IP (local development, server-to-server, etc.)
  return 'unknown';
}

/**
 * Logs an IP address with associated action and timestamp
 * Useful for debugging, monitoring, and security analysis
 * 
 * @param ip - IP address to log
 * @param action - Action being performed (e.g., 'contact-form-submission', 'login-attempt')
 * 
 * @example
 * ```typescript
 * const ip = getClientIP(request);
 * logIPRequest(ip, 'contact-form-submission');
 * // Output: IP: 192.168.1.100 - Action: contact-form-submission - Timestamp: 2025-10-12T14:30:00.000Z
 * ```
 */
export function logIPRequest(ip: string, action: string): void {
  console.log(`IP: ${ip} - Action: ${action} - Timestamp: ${new Date().toISOString()}`);
}

/**
 * Validates if a given string is a valid IP address (IPv4 or IPv6)
 * 
 * @param ip - IP address string to validate
 * @returns true if IP is valid, false otherwise
 * 
 * @example
 * ```typescript
 * isValidIP('192.168.1.1');     // true
 * isValidIP('invalid-ip');      // false
 * isValidIP('unknown');         // false
 * isValidIP('::1');             // true (IPv6)
 * ```
 */
export function isValidIP(ip: string): boolean {
  if (ip === 'unknown') return false;
  
  // IPv4 validation pattern (e.g., 192.168.1.1)
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  
  // Basic IPv6 validation pattern (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

/**
 * Creates an IP information object with metadata
 * Combines IP address with timestamp and validation status
 * 
 * @param ip - IP address to analyze
 * @returns Object containing IP, timestamp, and validation status
 * 
 * @example
 * ```typescript
 * const ipInfo = getIPInfo('192.168.1.1');
 * console.log(ipInfo);
 * // {
 * //   ip: '192.168.1.1',
 * //   timestamp: '2025-10-12T14:30:00.000Z',
 * //   isValid: true
 * // }
 * ```
 */
export function getIPInfo(ip: string): { ip: string; timestamp: string; isValid: boolean } {
  return {
    ip,
    timestamp: new Date().toISOString(),
    isValid: isValidIP(ip)
  };
}