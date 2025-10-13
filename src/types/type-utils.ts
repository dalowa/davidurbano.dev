export interface RateLimitAttempt {
  count: number;
  resetTime: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
}

export interface SanitizedContactData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}