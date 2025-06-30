"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

const musicStyles = [
  "POP",
  "ROCK",
  "HIP-HOP",
  "JAZZ",
  "ELECTRONIC",
  "CLASSICAL",
  "COUNTRY",
  "R&B",
  "REGGAE",
  "BLUES",
  "FOLK",
  "METAL",
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-slate-950/50"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Refined Header */}
        <div className="text-center mb-18">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Music Gallery
            </span>
          </h2>
        </div>

        {/* Enhanced Style Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <button
            onClick={() => setSelectedStyle(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              !selectedStyle
                ? "bg-gradient-to-r from-cyan-500/15 to-purple-500/15 text-white border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                : "bg-white/4 text-gray-400 hover:text-white border border-white/8 hover:border-white/15 backdrop-blur-xl"
            }`}
          >
            All Genres
          </button>
          {musicStyles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                selectedStyle === style
                  ? "bg-gradient-to-r from-cyan-500/15 to-purple-500/15 text-white border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                  : "bg-white/4 text-gray-400 hover:text-white border border-white/8 hover:border-white/15 backdrop-blur-xl"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Enhanced Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {filteredExamples.map((example, index) => (
            <div key={index} className="group relative cursor-pointer" onClick={() => togglePlay(index)}>
              <div className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/15 hover:border-white/25 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl">
                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Enhanced gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${example.color} opacity-45 group-hover:opacity-65 transition-opacity duration-500`}
                  ></div>

                  {/* Enhanced Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div
                        className={`w-18 h-18 bg-gradient-to-r ${example.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform duration-500`}
                      >
                        {playingTrack === index ? (
                          <Pause className="h-7 w-7 text-white" />
                        ) : (
                          <Play className="h-7 w-7 text-white ml-0.5" />
                        )}
                      </div>
                      <div
                        className={`absolute -inset-2 bg-gradient-to-r ${example.color} rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                      ></div>
                    </div>
                  </div>

                  {/* Enhanced style badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl rounded-xl px-3 py-2 border border-white/15">
                    <span className="text-white text-xs font-bold">{example.style}</span>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-7">
                  <h4 className="text-xl font-bold text-white mb-3">{example.title}</h4>
                  <div className="bg-white/4 backdrop-blur-xl rounded-2xl p-4 border border-white/8">
                    <p className="text-cyan-300 text-sm font-medium">"{example.prompt}"</p>
                  </div>
                </div>

                {/* Enhanced Audio Waveform */}
                {playingTrack === index && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-2xl p-5 border-t border-white/15">
                    <div className="flex items-center justify-center gap-1 h-8">
                      {[...Array(22)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 bg-gradient-to-t ${example.color} rounded-full animate-pulse`}
                          style={{
                            height: `${Math.random() * 65 + 25}%`,
                            animationDelay: `${i * 0.05}s`,
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
