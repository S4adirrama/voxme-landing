"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

// Update the dictionary prop type to reflect the heroSection structure without badge
interface HeroSectionDictionary {
  create: string
  ai: string
  inMinutes: string
  words: string[]
  subtitle: string
  cta: string
}

export default function HeroSection({ dictionary }: { dictionary: HeroSectionDictionary }) {
  const [currentWord, setCurrentWord] = useState(0)
  const words = dictionary.words // Use words from dictionary

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words]) // Depend on words to re-run if language changes

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black px-4 sm:px-6 pt-24 sm:pt-32">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Left */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
            <div className="mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {dictionary.create}
            </div>
            <div className="mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              {dictionary.ai} {words[currentWord]}
            </div>
            <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              {dictionary.inMinutes}
            </div>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 sm:mt-8 mb-8 sm:mb-12 max-w-xl font-light leading-relaxed">
            {dictionary.subtitle.includes("in two simple prompts")
              ? dictionary.subtitle.split("in two simple prompts.").map((part: string, index: number) => (
                  <React.Fragment key={index}>
                    {part}
                    {index === 0 && <span className="text-cyan-400 font-semibold">in two simple prompts.</span>}
                  </React.Fragment>
                ))
              : dictionary.subtitle.includes("за два простых запроса")
                ? dictionary.subtitle.split("за два простых запроса.").map((part: string, index: number) => (
                    <React.Fragment key={index}>
                      {part}
                      {index === 0 && <span className="text-cyan-400 font-semibold">за два простых запроса.</span>}
                    </React.Fragment>
                  ))
                : dictionary.subtitle}
          </p>

          <Link href="https://app.voxme.live" passHref>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
              {dictionary.cta}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3" />
            </Button>
          </Link>
        </div>

        {/* Video Right */}
        <div className="relative group w-full aspect-[4/3] sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl mt-8 lg:mt-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=400&width=600"
          >
            <source
              src="https://res.cloudinary.com/dxf0fmf9a/video/upload/v1752136418/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_%D0%BE%D1%82_2025-07-10_13-26-47_wehuld.webm"
              type="video/webm"
            />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  )
}
