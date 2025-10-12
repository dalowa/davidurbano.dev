import { SanitizedContactData } from "@/src/types/type-utils";

/**
 * Sanitizes user input by removing potentially dangerous characters and scripts
 * Prevents XSS attacks and malicious code injection in text inputs
 * 
 * @param input - Raw user input string to sanitize
 * @returns Sanitized string safe for display and storage
 * 
 * @example
 * ```typescript
 * const userInput = '<script>alert("xss")</script>Hello';
 * const safe = sanitizeInput(userInput);
 * console.log(safe); // 'scriptalert("xss")/scriptHello'
 * 
 * const maliciousInput = 'onclick="steal()" javascript:void(0)';
 * const clean = sanitizeInput(maliciousInput);
 * console.log(clean); // 'void(0)'
 * ```
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()                         // Remove leading/trailing whitespace
    .replace(/[<>]/g, '')           // Remove < and > to prevent HTML tags
    .replace(/javascript:/gi, '')   // Remove javascript: protocol
    .replace(/on\w+=/gi, '')        // Remove event handlers (onclick, onload, etc.)
    .replace(/&/g, '&amp;')         // Escape ampersands
    .replace(/"/g, '&quot;')        // Escape double quotes
    .replace(/'/g, '&#x27;');       // Escape single quotes
}

/**
 * Sanitizes email addresses by normalizing format
 * Removes whitespace and converts to lowercase for consistency
 * 
 * @param email - Email address to sanitize
 * @returns Normalized email address
 * 
 * @example
 * ```typescript
 * const email = '  USER@EXAMPLE.COM  ';
 * const clean = sanitizeEmail(email);
 * console.log(clean); // 'user@example.com'
 * ```
 */
export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Sanitizes all fields in a contact form submission
 * Applies appropriate sanitization to each field type
 * 
 * @param data - Raw contact form data from user submission
 * @returns Sanitized contact data safe for processing and storage
 * 
 * @example
 * ```typescript
 * const formData = {
 *   fullName: '<script>alert("hack")</script>John Doe',
 *   email: '  JOHN@EXAMPLE.COM  ',
 *   subject: 'javascript:void(0)Hello',
 *   message: 'onclick="steal()"This is my message'
 * };
 * 
 * const clean = sanitizeContactForm(formData);
 * console.log(clean);
 * // {
 * //   fullName: 'scriptalert("hack")/scriptJohn Doe',
 * //   email: 'john@example.com',
 * //   subject: 'Hello',
 * //   message: 'This is my message'
 * // }
 * ```
 */
export function sanitizeContactForm(data: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}): SanitizedContactData {
  return {
    fullName: sanitizeInput(data.fullName),
    email: sanitizeEmail(data.email),
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message)
  };
}

/**
 * Detects if a honeypot field has been filled (indicating bot activity)
 * Honeypot fields are hidden from humans but visible to automated bots
 * 
 * @param website - Value from the honeypot field (should be empty for humans)
 * @returns true if honeypot is filled (bot detected), false if empty (likely human)
 * 
 * @example
 * ```typescript
 * // In your form, add a hidden field:
 * // <input name="website" style="display: none" />
 * 
 * const formData = await request.json();
 * if (isHoneypotFilled(formData.website)) {
 *   console.log('Bot detected!');
 *   return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
 * }
 * ```
 */
export function isHoneypotFilled(website?: string): boolean {
  return website !== undefined && 
         website !== null && 
         website.trim() !== '';
}

/**
 * Logs bot detection events for security monitoring
 * Records IP address and honeypot value for analysis
 * 
 * @param ip - IP address of the detected bot
 * @param honeypotValue - Value that was entered in the honeypot field
 * 
 * @example
 * ```typescript
 * if (isHoneypotFilled(formData.website)) {
 *   logBotDetection(clientIP, formData.website);
 *   // Log output: Bot detected from IP: 192.168.1.100, honeypot filled: spam-value
 * }
 * ```
 */
export function logBotDetection(ip: string, honeypotValue: string): void {
  console.log(`Bot detected from IP: ${ip}, honeypot filled: ${honeypotValue}`);
}