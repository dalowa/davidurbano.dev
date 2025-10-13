/**
 * @fileoverview Utility functions barrel export
 * 
 * This barrel file centralizes all utility function exports for easy importing
 * across the application. It provides a clean API for accessing various utility
 * modules including validation, sanitization, security, and helper functions.
 * 
 * @example
 * ```typescript
 * // Instead of multiple imports:
 * import { validateCORS } from '@/src/lib/utils/cors-handler';
 * import { getClientIP } from '@/src/lib/utils/ip-utils';
 * import { sanitizeInput } from '@/src/lib/utils/sanitizer';
 * 
 * // Use single import:
 * import { validateCORS, getClientIP, sanitizeInput } from '@/src/lib/utils';
 * ```
 */

// CSS utility functions
export { cn } from './cn';

// CORS security functions
export { 
  validateCORS, 
  createCORSErrorResponse, 
  createCORSOptionsResponse, 
  createCORSResponse 
} from './cors-handler';

// IP address utility functions
export { 
  getClientIP, 
  logIPRequest, 
  isValidIP, 
  getIPInfo 
} from './ip-utils';

// Rate limiting functions
export { 
  getRateLimitForIP, 
  checkRateLimit, 
  resetRateLimitForIP, 
  cleanupExpiredAttempts 
} from './rate-limiter';

// Input sanitization and security functions
export { 
  sanitizeInput, 
  sanitizeEmail, 
  sanitizeContactForm, 
  isHoneypotFilled, 
  logBotDetection 
} from './sanitizer';

// Form validation functions
export { validateContactForm } from './validators';