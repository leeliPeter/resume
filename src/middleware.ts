import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin')
  const isAllowedOrigin = origin === 'http://localhost:3000'
  
  // Handle preflight (OPTIONS) requests
  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': isAllowedOrigin ? origin! : '',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
        'Vary': 'Origin'
      },
    })
    return response
  }

  // Handle regular requests
  const response = NextResponse.next()
  
  // Always set CORS headers
  response.headers.set('Access-Control-Allow-Origin', isAllowedOrigin ? origin! : '')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Vary', 'Origin')

  // For non-allowed origins, this will effectively block the request
  // because the browser will enforce the CORS policy
  
  return response
}

export const config = {
  matcher: '/api/:path*'
}