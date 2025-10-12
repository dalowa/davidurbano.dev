import { NextRequest, NextResponse } from 'next/server';

/**
 * List of allowed origins for CORS validation
 * These domains are permitted to make cross-origin requests to the API
 */
const ALLOWED_ORIGINS = [
  'https://davidurbano.dev',        // Production domain
  'https://www.davidurbano.dev',    // Production domain with www
  'http://localhost:3000',          // Local development
  'https://davidurbanodev.vercel.app' // Vercel deployment
];

/**
 * Validates if a request's origin is allowed for CORS
 * 
 * @param request - Next.js request object containing headers
 * @returns Object with validation result and origin
 * @returns isValid - Whether the origin is allowed
 * @returns origin - The request origin (undefined if null)
 * 
 * @example
 * ```typescript
 * const corsCheck = validateCORS(request);
 * if (!corsCheck.isValid) {
 *   return createCORSErrorResponse();
 * }
 * ```
 */
export function validateCORS(request: NextRequest): { isValid: boolean; origin?: string } {
  console.log('Validating CORS for request:', request);
  const originHeader = request.headers.get('origin');
  const origin = originHeader ?? undefined; // Convert null to undefined
  
  // Allow requests with no origin (Postman, server-to-server) or from allowed origins
  if (!originHeader || ALLOWED_ORIGINS.includes(originHeader)) {
    return { isValid: true, origin };
  }
  
  return { isValid: false, origin };
}

/**
 * Creates a JSON response with proper CORS headers
 * 
 * @template T - Type of the response data
 * @param data - Response data to send as JSON
 * @param status - HTTP status code
 * @param origin - Optional origin to include in CORS headers
 * @returns NextResponse with CORS headers and JSON data
 * 
 * @example
 * ```typescript
 * return createCORSResponse(
 *   { message: 'Success' }, 
 *   200, 
 *   corsCheck.origin
 * );
 * ```
 */
export function createCORSResponse<T = Record<string, unknown>>(
  data: T, 
  status: number, 
  origin?: string
): NextResponse {
  const response = NextResponse.json(data, { status });
  
  // Set CORS headers to allow cross-origin requests
  response.headers.set('Access-Control-Allow-Origin', origin || '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}

/**
 * Creates a response for OPTIONS preflight requests
 * Browsers send OPTIONS requests before actual POST requests to check CORS permissions
 * 
 * @param request - Next.js request object containing headers
 * @returns NextResponse with appropriate CORS headers for preflight
 * 
 * @example
 * ```typescript
 * export async function OPTIONS(request: NextRequest) {
 *   return createCORSOptionsResponse(request);
 * }
 * ```
 */
export function createCORSOptionsResponse(request: NextRequest): NextResponse {
  const origin = request.headers.get('origin');
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : '*';

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

/**
 * Creates an error response for CORS validation failures
 * Returns 403 Forbidden when origin is not in the allowed list
 * 
 * @returns NextResponse with error message and 403 status
 * 
 * @example
 * ```typescript
 * const corsCheck = validateCORS(request);
 * if (!corsCheck.isValid) {
 *   return createCORSErrorResponse();
 * }
 * ```
 */
export function createCORSErrorResponse(): NextResponse {
  return NextResponse.json(
    { error: 'CORS: Origin not allowed' },
    { status: 403 }
  );
}