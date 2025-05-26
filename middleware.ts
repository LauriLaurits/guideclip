import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Paths that should be accessible during maintenance
const ALLOWED_PATHS = [
  '/maintenance',
  '/_next',
  '/favicon.ico',
  '/api/health', // Health check endpoint
];

export function middleware(request: NextRequest) {
  // Debug: Log environment variables
  console.log('Environment variables in middleware:');
  console.log('NEXT_PUBLIC_MAINTENANCE_MODE:', process.env.NEXT_PUBLIC_MAINTENANCE_MODE);
  console.log('All env vars:', Object.keys(process.env).filter(key => key.includes('MAINTENANCE')));
  
  // Check environment variable for maintenance mode at runtime
  const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  
  console.log('MAINTENANCE_MODE resolved to:', MAINTENANCE_MODE);
  
  // Skip maintenance mode for allowed paths
  if (ALLOWED_PATHS.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // If maintenance mode is enabled and user is not on maintenance page
  if (MAINTENANCE_MODE && request.nextUrl.pathname !== '/maintenance') {
    console.log('Redirecting to maintenance page');
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  // If maintenance mode is disabled and user is on maintenance page, redirect to home
  if (!MAINTENANCE_MODE && request.nextUrl.pathname === '/maintenance') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 