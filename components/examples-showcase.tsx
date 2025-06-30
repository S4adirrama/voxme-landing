"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

const musicStyles = [
  "POP", "ROCK", "HIP-HOP", "JAZZ", "ELECTRONIC",
  "CLASSICAL", "COUNTRY", "R&B", "REGGAE", "BLUES", "FOLK", "METAL",
]

const featuredExamples = [
  {
    title: "Summer Anthem",
    style: "POP",
    prompt: "Upbeat pop song about summer vacation",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Study Vibes",
    style: "LO-FI",
    prompt: "Relaxing lo-fi hip hop for studying",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Electric Storm",
    style: "ROCK",
    prompt: "Powerful rock anthem with guitar solos",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Jazz Night",
    style: "JAZZ",
    prompt: "Smooth jazz with saxophone and piano",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Street Beats",
    style: "HIP-HOP",
    prompt: "Hard-hitting hip-hop beat with heavy bass",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Epic Symphony",
    style: "CLASSICAL",
    prompt: "Cinematic orchestral piece with crescendo",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-emerald-500 to-teal-500",
  },
]

export default function ExamplesShowcase() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)

  const togglePlay = (index: number) => {
    setPlayingTrack(playingTrack === index ? null : index)
  }

  const filteredExamples = selectedStyle
    ? featuredExamples.filter((example) => example.style === selectedStyle)
    : featuredExamples

  return (
    <section id="examples" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-slate-950/70"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Music Gallery
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedStyle(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              !selectedStyle
                ? "bg-cyan-500/20 text-white border border-cyan-400"
                : "bg-gray-800 text-gray-400 hover:text-white border border-gray-600"
            }`}
          >
            All Genres
          </button>
          {musicStyles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedStyle === style
                  ? "bg-cyan-500/20 text-white border border-cyan-400"
                  : "bg-gray-800 text-gray-400 hover:text-white border border-gray-600"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredExamples.map((example, index) => (
            <div key={index} className="relative cursor-pointer" onClick={() => togglePlay(index)}>
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${example.color} opacity-40`}></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-14 h-14 bg-gradient-to-r ${example.color} rounded-full flex items-center justify-center`}>
                      {playingTrack === index ? (
                        <Pause className="h-6 w-6 text-white" />
                      ) : (
                        <Play className="h-6 w-6 text-white" />
                      )}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 border border-white/10">
                    <span className="text-white text-xs font-semibold">{example.style}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">{example.title}</h4>
                  <p className="text-cyan-300 text-sm font-medium">"{example.prompt}"</p>
                </div>

                {playingTrack === index && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 border-t border-white/10">
                    <div className="flex items-center justify-center gap-1 h-6">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-0.5 bg-gradient-to-t ${example.color} rounded-sm animate-pulse`}
                          style={{
                            height: `${Math.random() * 50 + 20}%`,
                            animationDelay: `${i * 0.04}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
