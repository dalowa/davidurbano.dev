import { ContactEmailData } from "@/src/types/type-nodemailer";

/**
 * Creates a professionally designed HTML email template for contact form submissions
 * Features a dark theme with red accent colors matching the website design
 * 
 * @param data - Contact form data to populate the template
 * @returns HTML string ready for email transmission
 * 
 * @example
 * ```typescript
 * const contactData = {
 *   fullName: 'John Doe',
 *   email: 'john@example.com',
 *   subject: 'Website Inquiry',
 *   message: 'Hello, I would like to discuss a project.',
 *   ip: '192.168.1.100'
 * };
 * 
 * const emailHTML = createContactEmailTemplate(contactData);
 * // Returns styled HTML email ready for Nodemailer
 * ```
 */
export function createContactEmailTemplate(data: ContactEmailData): string {
  return `
    <!-- Email Container: Dark theme with professional styling -->
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; background-color: #0A0E17; min-height: 100vh;">
      
      <!-- Main Content Card: Elevated design with subtle shadows -->
      <div style="background-color: #1a1f2e; padding: 48px; border-radius: 12px; border: 1px solid #2a3142; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);">
        
        <!-- Header Section: Bold branding with accent color -->
        <h1 style="color: #ff190a; margin: 0 0 40px 0; font-size: 22px; font-weight: 700; letter-spacing: 0.8px; text-align: center; border-bottom: 2px solid #ff190a; padding-bottom: 16px;">
          NEW CONTACT MESSAGE
        </h1>
        
        <!-- Contact Information Grid: Clean layout with accent borders -->
        <div style="display: grid; gap: 28px; margin-bottom: 40px;">
          
          <!-- Sender Name Field -->
          <div style="border-left: 3px solid #ff190a; padding-left: 16px;">
            <div style="color: #ff190a; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Name</div>
            <div style="color: #ffffff; font-size: 18px; font-weight: 500;">${data.fullName}</div>
          </div>
          
          <!-- Sender Email Field: Clickable mailto link -->
          <div style="border-left: 3px solid #ff190a; padding-left: 16px;">
            <div style="color: #ff190a; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Email</div>
            <a href="mailto:${data.email}" style="color: #ffffff; font-size: 18px; font-weight: 500; text-decoration: none; transition: color 0.2s;">
              ${data.email}
            </a>
          </div>
          
          <!-- Message Subject Field -->
          <div style="border-left: 3px solid #ff190a; padding-left: 16px;">
            <div style="color: #ff190a; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Subject</div>
            <div style="color: #ffffff; font-size: 18px; font-weight: 500;">${data.subject}</div>
          </div>
        </div>
        
        <!-- Message Content Section: Highlighted with background -->
        <div style="margin-bottom: 48px;">
          <div style="color: #ff190a; font-size: 12px; font-weight: 600; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; border-left: 3px solid #ff190a; padding-left: 16px;">Message</div>
          <div style="background-color: #0A0E17; padding: 24px; border-radius: 8px; border-left: 4px solid #ff190a; color: #ffffff; line-height: 1.7; font-size: 16px; font-weight: 400;">
            ${data.message.replace(/\n/g, '<br>')} <!-- Convert line breaks to HTML -->
          </div>
        </div>
        
        <!-- Visual Divider: Gradient line for section separation -->
        <div style="height: 2px; background: linear-gradient(90deg, #ff190a 0%, transparent 100%); margin: 40px 0;"></div>
        
        <!-- Metadata Section: Technical information grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; background-color: #0A0E17; padding: 24px; border-radius: 8px; border: 2px solid #2a3142;">
          
          <!-- Sender IP Address: Security tracking -->
          <div style="text-align: center; padding: 16px; background-color: #1a1f2e; border-radius: 6px; border: 1px solid #ff190a;">
            <div style="color: #ff190a; font-weight: 700; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; font-size: 11px;">Sender IP</div>
            <code style="background-color: #0A0E17; color: #ff190a; padding: 8px 16px; border-radius: 4px; font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace; font-size: 14px; font-weight: 700; display: inline-block;">
              ${data.ip}
            </code>
          </div>
          
          <!-- Timestamp: When the message was sent -->
          <div style="text-align: center; padding: 16px; background-color: #1a1f2e; border-radius: 6px; border: 1px solid #ff190a;">
            <div style="color: #ff190a; font-weight: 700; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; font-size: 11px;">Date</div>
            <div style="color: #ffffff; font-size: 16px; font-weight: 600; background-color: #0A0E17; color: #ff190a; padding: 8px 16px; border-radius: 4px; display: inline-block;">${formatDate()}</div>
          </div>
        </div>
      </div>
      
      <!-- Footer Section: Branding and source attribution -->
      <div style="text-align: center; margin-top: 48px; padding-top: 32px; border-top: 1px solid #2a3142;">
        <div style="color: #888; font-size: 13px; font-weight: 500;">
          This message was sent from 
          <a href="https://davidurbanodev.vercel.app" style="color: #ff190a; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
            DAVIDURBANO.DEV
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Formats the current date and time for email metadata
 * Uses Lima timezone and English locale for consistent formatting
 * 
 * @returns Formatted date string (e.g., "October 12, 2025 at 02:30 PM")
 * 
 * @example
 * ```typescript
 * const timestamp = formatDate();
 * console.log(timestamp); // "October 12, 2025 at 02:30 PM"
 * ```
 */
function formatDate(): string {
  return new Date().toLocaleString('en-US', { 
    timeZone: 'America/Lima',        // Peru timezone (UTC-5)
    year: 'numeric',                 // Full year (2025)
    month: 'long',                   // Full month name (October)
    day: 'numeric',                  // Day of month (12)
    hour: '2-digit',                 // Hour with leading zero (02)
    minute: '2-digit'                // Minute with leading zero (30)
  });
}