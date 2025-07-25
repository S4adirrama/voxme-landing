"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import LanguageSwitcher from "./language-switcher"

// Update the dictionary prop type to reflect the header section structure
interface HeaderDictionary {
  logoText: string
  demo: string
  examples: string
  pricing: string
  faq: string
  tryFree: string
}

export default function Header({ dictionary, lang }: { dictionary: HeaderDictionary; lang: string }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/75 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-black text-white tracking-tight">{dictionary.logoText}</span>
          </Link>

          {/* Enhanced Navigation with better spacing */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { href: "#demo", label: dictionary.demo },
              { href: "#examples", label: dictionary.examples },
              { href: "#pricing", label: dictionary.pricing },
              { href: "#faq", label: dictionary.faq },
            ].map((item) => (
              <Link
                key={item.href}
                href={`/${lang}${item.href}`}
                className="text-gray-300 hover:text-white transition-all duration-300 text-base font-semibold relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Language Switcher and CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} />
            <Link href={`https://app.voxme.live/${lang}`} passHref>
              {" "}
              {/* Updated link to include lang */}
              <Button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-sm px-7 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300">
                {dictionary.tryFree}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
