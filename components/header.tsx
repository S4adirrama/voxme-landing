"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/75 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center space-x-3 group max-w-full">
            <div className="relative w-12 h-12">
              <Image
                src="https://res.cloudinary.com/dxf0fmf9a/image/upload/v1751279493/logo_1_g9auqz.png"
                alt="Voxme Logo"
                width={48}
                height={48}
                className="rounded-full shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300 object-cover"
              />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-black text-white tracking-tight truncate max-w-[150px]">
              Voxme.live
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { href: "#demo", label: "Demo" },
              { href: "#examples", label: "Examples" },
              { href: "#pricing", label: "Pricing" },
              { href: "#faq", label: "FAQ" }
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-base font-semibold relative group"
              >
                {label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-sm px-7 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300">
            Try Free
          </Button>
        </div>
      </div>
    </header>
  )
}
