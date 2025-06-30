"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Songs", "Beats", "Covers", "Videos"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black px-6">
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
      <div className="relative z-10 container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-40 sm:pt-24 lg:pt-0">
        {/* Text Left */}
        <div className="text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
            <div className="mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Create
            </div>
            <div className="mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              AI {words[currentWord]}
            </div>
            <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              in Minutes
            </div>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mt-8 mb-12 max-w-xl font-light">
            Get complete songs with cover art and music videos{" "}
            <span className="text-cyan-400 font-semibold">in two simple prompts.</span>
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-lg px-8 py-5 h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Play className="h-5 w-5 mr-3" />
            Create Magic Now
            <ArrowRight className="h-5 w-5 ml-3" />
          </Button>
        </div>

        {/* Video Right */}
        <div className="relative group w-full aspect-[4/3] min-h-[240px] sm:aspect-video rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=400&width=600"
          >
            <source src="/demo-video.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  )
}
