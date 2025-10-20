import { sendContactEmail } from '@/src/lib/nodemailer/email-service';
import { createCORSErrorResponse, createCORSOptionsResponse, createCORSResponse, validateCORS } from '@/src/lib/utils/cors-handler';
import { getClientIP, logIPRequest } from '@/src/lib/utils/ip-utils';
import { createRateLimitResponse, getRateLimitForIP } from '@/src/lib/utils/rate-limiter';
import { isHoneypotFilled, logBotDetection, sanitizeContactForm } from '@/src/lib/utils/sanitizer';
import { validateContactForm } from '@/src/lib/utils/validators';
import { NextRequest } from 'next/server';

// Imports de los módulos creados


export async function POST(request: NextRequest) {
  let ip = 'unknown';
  
  try {
    // 1. Obtener IP del cliente
    ip = getClientIP(request);
    logIPRequest(ip, 'contact-form-submission');
    
    // 2. Rate Limiting
    const rateLimit = getRateLimitForIP(ip);
    if (!rateLimit.allowed) {
      return createRateLimitResponse();
    }
    
    // 3. Validación CORS
    const corsCheck = validateCORS(request);
    if (!corsCheck.isValid) {
      return createCORSErrorResponse();
    }
    
    // 4. Obtener datos del formulario
   
    const formData = await request.json();
    // 5. Verificar Honeypot
    if (isHoneypotFilled(formData.website)) {
      logBotDetection(ip, formData.website);
      return createCORSResponse(
        { error: 'Solicitud inválida' }, 
        400, 
        corsCheck.origin
      );
    }
    
    // 6. Validar formulario
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return createCORSResponse(
        { error: validation.errors[0] }, 
        400, 
        corsCheck.origin
      );
    }
    
    // 7. Sanitizar datos
    const sanitizedData = sanitizeContactForm(formData);
    
    // 8. Enviar email
    const emailResult = await sendContactEmail({
      ...sanitizedData,
      ip
    });
    
    if (!emailResult.success) {
      return createCORSResponse(
        { error: 'Error al enviar email' }, 
        500, 
        corsCheck.origin
      );
    }
    
    // 9. Respuesta exitosa
    return createCORSResponse(
      { message: 'Email sent successfully' }, 
      200, 
      corsCheck.origin
    );
    
  } catch (error) {
    logIPRequest(ip, 'error');
    console.error('Error sending email:', error);
    console.error('Request IP:', ip);
    console.error('Timestamp:', new Date().toISOString());
    
    return createCORSResponse(
      { error: 'Error interno del servidor' }, 
      500
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return createCORSOptionsResponse(request);
}