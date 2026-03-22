import { NextResponse } from 'next/server';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';

// Centralized route protection keeps role checks out of page components.
const protectedRoutes = ['/dashboard/admin', '/dashboard/shop', '/api/orders'];

export function middleware(request) {
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

  if (!isProtected) return NextResponse.next();

  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
  }

  try {
    const payload = verifyToken(token);

    if (request.nextUrl.pathname.startsWith('/dashboard/admin') && payload.role !== 'admin') {
      return NextResponse.json({ message: 'Admin access only.' }, { status: 403 });
    }

    if (request.nextUrl.pathname.startsWith('/dashboard/shop') && !['shop_owner', 'admin'].includes(payload.role)) {
      return NextResponse.json({ message: 'Shop owner access only.' }, { status: 403 });
    }

    return NextResponse.next();
  } catch {
    return NextResponse.json({ message: 'Invalid or expired token.' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/orders/:path*']
};
