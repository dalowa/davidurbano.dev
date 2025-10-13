import { ContactFormData } from '@/src/types/type-nodemailer';
import { transporter, EMAIL_CONFIG, type EmailOptions } from './email';
import { createContactEmailTemplate } from './email-templates';

/**
 * Sends a contact form email using Nodemailer
 * Processes contact form data and sends formatted email to configured recipient
 * 
 * @param data - Contact form data containing user information and message
 * @returns Promise resolving to success/error status with optional error message
 * 
 * @example
 * ```typescript
 * const formData = {
 *   fullName: 'John Doe',
 *   email: 'john@example.com',
 *   subject: 'Website Inquiry',
 *   message: 'I would like to know more about your services.',
 *   ip: '192.168.1.100'
 * };
 * 
 * const result = await sendContactEmail(formData);
 * if (result.success) {
 *   console.log('Email sent successfully');
 * } else {
 *   console.error('Failed to send email:', result.error);
 * }
 * ```
 */
export const sendContactEmail = async (data: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  // Log the email sending attempt for monitoring and debugging
  console.log('Sending contact email with data:', data);
  
  try {
    // Configure email options using the provided form data
    const mailOptions: EmailOptions = {
      from: EMAIL_CONFIG.from,           // Sender address (configured in environment)
      to: EMAIL_CONFIG.to,               // Recipient address (your email)
      subject: `New message from ${data.fullName}`,  // Dynamic subject with sender name
      html: createContactEmailTemplate(data)         // HTML template with form data
    };
    
    // Send the email using the configured transporter
    await transporter.sendMail(mailOptions);
    
    // Return success status
    return { success: true };
    
  } catch (error) {
    // Log the error for debugging and monitoring
    console.error('Error sending email:', error);
    
    // Return error status with descriptive message
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};