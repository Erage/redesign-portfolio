import { NextResponse } from 'next/server';
//test
export function middleware() {
  const response = NextResponse.next();
  
  // Prevents Clickjacking
  response.headers.set('X-Frame-Options', 'DENY');
  // Prevents XSS in older browsers
  response.headers.set('X-XSS-Protection', '1; mode=block');
  // Prevents MIME-sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  return response;
}