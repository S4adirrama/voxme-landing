import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "ru"]
const defaultLocale = "en"

// Get the preferred locale from Accept-Language header
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("Accept-Language")
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(",").map((lang) => lang.split(";")[0].trim())
    for (const lang of preferred) {
      if (locales.includes(lang)) {
        return lang
      }
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for:
  // - API routes
  // - Static files
  // - Vercel internal routes
  // - Next.js internal routes
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/_vercel/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // If pathname already has a locale, continue normally
  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // For root path ("/"), rewrite to default locale without redirect
  if (pathname === "/") {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}`
    return NextResponse.rewrite(url)
  }

  // For other paths without locale, redirect to include locale
  const locale = getLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - _vercel (Vercel internals)
     * - favicon.ico (favicon file)
     * - Any file with an extension (e.g., .png, .css, .js)
     */
    "/((?!api|_next/static|_next/image|_vercel|favicon.ico|.*\\..*).*)",
  ],
}
