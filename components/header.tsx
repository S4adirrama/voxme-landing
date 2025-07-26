"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./language-switcher"
import { Menu } from "lucide-react"
import { useState } from "react"

interface HeaderDictionary {
  logoText: string
  demo: string
  examples: string
  pricing: string
  faq: string
  tryFree: string
}

export default function Header({ dictionary, lang }: { dictionary: HeaderDictionary; lang: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/75 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with Image */}
          <Link href={lang === "en" ? "/" : `/${lang}`} className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12">
              <Image
                src="https://res.cloudinary.com/dxf0fmf9a/image/upload/v1751279493/logo_1_g9auqz.png"
                alt="Voxme Logo"
                width={48}
                height={48}
                className="rounded-full shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300 object-cover"
              />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-lg sm:text-xl font-black text-white tracking-tight truncate max-w-[120px] sm:max-w-[150px]">
              {dictionary.logoText}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "#demo", labelKey: dictionary.demo },
              { href: "#examples", labelKey: dictionary.examples },
              { href: "#pricing", labelKey: dictionary.pricing },
              { href: "#faq", labelKey: dictionary.faq },
            ].map(({ href, labelKey }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-semibold relative group"
              >
                {labelKey}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Right side - Language Switcher and CTA */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageSwitcher currentLang={lang} />

            {/* Desktop CTA */}
            <Link href="https://app.voxme.live" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300">
                {dictionary.tryFree}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5">
            <nav className="px-4 py-4 space-y-4">
              {[
                { href: "#demo", labelKey: dictionary.demo },
                { href: "#examples", labelKey: dictionary.examples },
                { href: "#pricing", labelKey: dictionary.pricing },
                { href: "#faq", labelKey: dictionary.faq },
              ].map(({ href, labelKey }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-base font-semibold py-2"
                >
                  {labelKey}
                </a>
              ))}
              <Link href="https://app.voxme.live" className="block pt-2">
                <Button className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-sm px-4 py-3 rounded-xl shadow-lg">
                  {dictionary.tryFree}
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
