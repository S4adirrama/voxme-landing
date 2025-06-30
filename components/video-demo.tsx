"use client"

import { Play, Sparkles } from "lucide-react"

export default function VideoDemo() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/50"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-full px-8 py-4 mb-8">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="text-lg font-semibold text-cyan-300">See It In Action</span>
            </div>
            <h2 className="text-6xl sm:text-7xl font-black text-white mb-6 tracking-tight">
              Watch How{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Easy</span>{" "}
              It Is
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See exactly how to create professional music in under 2 minutes
            </p>
          </div>

          {/* Premium Video Player */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-slate-900/80 relative">
                <div className="text-center z-10">
                  <div className="relative mb-8">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl shadow-cyan-500/25 mx-auto">
                      <Play className="h-12 w-12 text-white ml-2" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Demo Video Coming Soon</h3>
                  <p className="text-xl text-gray-300">Watch the complete process from prompt to finished song</p>
                </div>

                {/* Premium Overlays */}
                <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/10">
                  <div className="text-white text-lg font-semibold">Duration: 2:34</div>
                </div>
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl px-6 py-3 border border-cyan-500/30">
                  <div className="text-cyan-300 text-lg font-semibold">Full Tutorial</div>
                </div>
              </div>
            </div>

            {/* Premium Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
