import { ContactFormData, ValidationResult } from "@/src/types/type-utils";

/**
 * Validates that all required fields are present and not empty
 * Ensures form completeness before processing
 * 
 * @param data - Contact form data to validate
 * @returns Validation result with errors if any required fields are missing
 * 
 * @example
 * ```typescript
 * const formData = { fullName: '', email: 'test@example.com', subject: 'Hi', message: 'Hello' };
 * const result = validateRequiredFields(formData);
 * console.log(result.isValid); // false
 * console.log(result.errors); // ['All fields are required']
 * ```
 */
export function validateRequiredFields(data: ContactFormData): ValidationResult {
  const errors: string[] = [];
  
  if (!data.fullName || !data.email || !data.message || !data.subject) {
    errors.push('All fields are required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validates that all form fields have the correct data types
 * Prevents type-related errors and ensures data integrity
 * 
 * @param data - Contact form data to validate
 * @returns Validation result with errors if any fields have invalid types
 * 
 * @example
 * ```typescript
 * const formData = { fullName: 123, email: 'test@example.com', subject: 'Hi', message: 'Hello' };
 * const result = validateFieldTypes(formData);
 * console.log(result.isValid); // false
 * console.log(result.errors); // ['Invalid data types']
 * ```
 */
export function validateFieldTypes(data: ContactFormData): ValidationResult {
  const errors: string[] = [];
  
  if (typeof data.fullName !== 'string' || typeof data.email !== 'string' || 
      typeof data.message !== 'string' || typeof data.subject !== 'string') {
    errors.push('Invalid data types');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validates field lengths according to business rules
 * Ensures data fits within expected constraints for processing and storage
 * 
 * @param data - Contact form data to validate
 * @returns Validation result with specific errors for each field that exceeds limits
 * 
 * @example
 * ```typescript
 * const formData = {
 *   fullName: 'J', // Too short
 *   email: 'test@example.com',
 *   subject: 'Hi', // Valid
 *   message: 'Hi' // Too short
 * };
 * const result = validateFieldLengths(formData);
 * console.log(result.errors);
 * // ['Name must be between 2 and 50 characters', 'Message must be between 5 and 1000 characters']
 * ```
 */
export function validateFieldLengths(data: ContactFormData): ValidationResult {
  const errors: string[] = [];
  
  if (data.fullName.trim().length < 2 || data.fullName.trim().length > 50) {
    errors.push('Name must be between 2 and 50 characters');
  }
  
  if (data.subject.trim().length < 3 || data.subject.trim().length > 100) {
    errors.push('Subject must be between 3 and 100 characters');
  }
  
  if (data.message.trim().length < 5 || data.message.trim().length > 1000) {
    errors.push('Message must be between 5 and 1000 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validates email address format using regex pattern
 * Ensures email follows standard format before processing
 * 
 * @param email - Email address string to validate
 * @returns Validation result indicating if email format is valid
 * 
 * @example
 * ```typescript
 * const validEmail = validateEmail('user@example.com');
 * console.log(validEmail.isValid); // true
 * 
 * const invalidEmail = validateEmail('invalid-email');
 * console.log(invalidEmail.isValid); // false
 * console.log(invalidEmail.errors); // ['Invalid email format']
 * 
 * // Edge cases
 * validateEmail('user@domain').isValid; // false (no TLD)
 * validateEmail('user domain@example.com').isValid; // false (space)
 * validateEmail('user+tag@example.co.uk').isValid; // true (valid)
 * ```
 */
export function validateEmail(email: string): ValidationResult {
  // Basic email regex: requires @ symbol, domain, and TLD
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  
  return {
    isValid,
    errors: isValid ? [] : ['Invalid email format']
  };
}

/**
 * Performs comprehensive validation on contact form data
 * Combines all validation checks and returns consolidated results
 * 
 * @param data - Complete contact form data to validate
 * @returns Validation result with all errors found across all validation checks
 * 
 * @example
 * ```typescript
 * const formData = {
 *   fullName: 'John Doe',
 *   email: 'john@example.com',
 *   subject: 'Hello',
 *   message: 'This is a valid message'
 * };
 * 
 * const result = validateContactForm(formData);
 * if (result.isValid) {
 *   console.log('Form is valid, proceed with processing');
 * } else {
 *   console.log('Validation errors:', result.errors);
 *   // Handle validation errors in UI
 * }
 * 
 * // Example with errors
 * const invalidData = {
 *   fullName: '', // Missing
 *   email: 'invalid-email', // Invalid format
 *   subject: 'Hi', // Too short
 *   message: 'OK' // Too short
 * };
 * 
 * const invalidResult = validateContactForm(invalidData);
 * console.log(invalidResult.errors);
 * // [
 * //   'All fields are required',
 * //   'Subject must be between 3 and 100 characters',
 * //   'Message must be between 5 and 1000 characters',
 * //   'Invalid email format'
 * // ]
 * ```
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  // Run all validation checks
  const validations = [
    validateRequiredFields(data),
    validateFieldTypes(data),
    validateFieldLengths(data),
    validateEmail(data.email)
  ];
  
  // Flatten all errors into a single array
  const allErrors = validations.flatMap(v => v.errors);
  
  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
}