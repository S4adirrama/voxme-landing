import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "ru"]
const defaultLocale = "en"

// Get the preferred locale, similar to above or using a library
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
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}
