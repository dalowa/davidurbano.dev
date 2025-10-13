export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
}

export interface ContactEmailData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}