"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Music, Wand2, Zap, Sparkles } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Songs", "Beats", "Covers", "Videos"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Enhanced Background System */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>

        {/* Improved Dynamic Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
        </div>

        {/* Refined Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 floating-animation">
          <div className="bg-white/8 backdrop-blur-xl p-4 rounded-2xl border border-white/15 shadow-2xl">
            <Music className="h-6 w-6 text-cyan-400" />
          </div>
        </div>
        <div className="absolute top-44 right-20 floating-animation" style={{ animationDelay: "1s" }}>
          <div className="bg-white/8 backdrop-blur-xl p-4 rounded-2xl border border-white/15 shadow-2xl">
            <Wand2 className="h-6 w-6 text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 floating-animation" style={{ animationDelay: "2s" }}>
          <div className="bg-white/8 backdrop-blur-xl p-4 rounded-2xl border border-white/15 shadow-2xl">
            <Zap className="h-6 w-6 text-emerald-400" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 floating-animation" style={{ animationDelay: "3s" }}>
          <div className="bg-white/8 backdrop-blur-xl p-4 rounded-2xl border border-white/15 shadow-2xl">
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Badge - More Visible */}
          <div
            className={`mb-20 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-10 tracking-tighter px-4 sm:px-6">
            <div className="mb-6">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
      Create
    </span>
  </div>
  <div className="mb-6">
    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent beat-light">
      AI {words[currentWord]}
    </span>
  </div>
  <div>
    <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
      in Minutes
    </span>
  </div>
</h1>


            <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Get complete songs with cover art and music videos{" "}
              <span className="text-cyan-400 font-semibold">in two simple prompts.</span>
            </p>
          </div>

          {/* Simplified CTA System */}
          <div
            className={`transition-all duration-1200 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-xl px-12 py-6 h-auto rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300"
              >
                <Play className="h-6 w-6 mr-4" />
                Create Magic Now
                <ArrowRight className="h-6 w-6 ml-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute top-32 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-full blur-xl animate-bounce delay-300"></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-xl animate-bounce delay-700"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-emerald-400/15 to-cyan-500/15 rounded-full blur-xl animate-bounce delay-1000"></div>
    </section>
  )
}
