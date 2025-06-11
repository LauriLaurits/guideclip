import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the site is in maintenance mode
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  // Allow access to the maintenance page and static assets
  if (
    request.nextUrl.pathname === "/maintenance" ||
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/images/")
  ) {
    return NextResponse.next();
  }

  // Redirect to maintenance page if in maintenance mode
  if (isMaintenanceMode) {
    return NextResponse.rewrite(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};