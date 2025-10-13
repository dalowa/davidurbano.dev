import nodemailer from 'nodemailer';

/**
 * Nodemailer transporter configuration for Gmail SMTP
 * Handles email sending through Gmail's SMTP service using app-specific passwords
 * 
 * Required environment variables:
 * - EMAIL_USER: Gmail address for sending emails
 * - EMAIL_PASS: Gmail app-specific password (not regular password)
 * 
 * @example
 * ```typescript
 * // Usage in email service
 * await transporter.sendMail({
 *   from: EMAIL_CONFIG.from,
 *   to: EMAIL_CONFIG.to,
 *   subject: 'Test Email',
 *   html: '<p>Hello World</p>'
 * });
 * ```
 */
export const transporter = nodemailer.createTransport({
  service: 'gmail',                    // Use Gmail SMTP service
  auth: {
    user: process.env.EMAIL_USER,      // Gmail address from environment
    pass: process.env.EMAIL_PASS       // App-specific password from environment
  }
});

/**
 * Default email configuration for contact form submissions
 * Centralizes sender and recipient settings for consistent email handling
 * 
 * @example
 * ```typescript
 * const mailOptions = {
 *   from: EMAIL_CONFIG.from,    // Sender: your Gmail address
 *   to: EMAIL_CONFIG.to,        // Recipient: where you receive messages
 *   subject: 'Contact Form',
 *   html: emailTemplate
 * };
 * ```
 */
export const EMAIL_CONFIG = {
  from: process.env.EMAIL_USER,           // Sender address (must match transporter auth)
  to: 'davidurbano.dev@gmail.com',        // Recipient address (where you receive contact messages)
};

/**
 * Verifies the email connection and authentication
 * Tests if the transporter can successfully connect to Gmail SMTP
 * Useful for startup checks and debugging connection issues
 * 
 * @returns Promise resolving to true if connection is successful, false otherwise
 * 
 * @example
 * ```typescript
 * // Check email connection on server startup
 * const isConnected = await verifyEmailConnection();
 * if (isConnected) {
 *   console.log('Email service ready');
 * } else {
 *   console.error('Email service unavailable');
 * }
 * 
 * // Use before sending critical emails
 * if (await verifyEmailConnection()) {
 *   await sendImportantEmail();
 * }
 * ```
 */
export const verifyEmailConnection = async (): Promise<boolean> => {
  try {
    // Attempt to verify SMTP connection and authentication
    await transporter.verify();
    console.log('Email connection verified successfully');
    return true;
  } catch (error) {
    // Log connection errors for debugging
    console.error('Email connection error:', error);
    return false;
  }
};

/**
 * TypeScript interface for email options used with Nodemailer
 * Defines the structure for email configuration objects
 * 
 * @example
 * ```typescript
 * const emailOptions: EmailOptions = {
 *   from: 'sender@example.com',
 *   to: 'recipient@example.com',
 *   subject: 'Hello World',
 *   html: '<p>Email content</p>'
 * };
 * ```
 */
export interface EmailOptions {
  from: string;           // Sender email address
  to: string;             // Recipient email address  
  subject: string;        // Email subject line
  html: string;           // HTML content of the email
  text?: string;          // Optional plain text version
  cc?: string;            // Optional carbon copy recipients
  bcc?: string;           // Optional blind carbon copy recipients
}
