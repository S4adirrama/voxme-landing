"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

const musicTags = [
  "GENERAL",
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
  "PUNK",
  "DISCO",
  "FUNK",
  "GOSPEL",
  "LATIN",
  "WORLD",
  "AMBIENT",
  "TECHNO",
  "HOUSE",
  "DUBSTEP",
  "TRAP",
  "LO-FI",
  "INDIE",
  "ALTERNATIVE",
  "GRUNGE",
  "PROGRESSIVE",
  "EXPERIMENTAL",
  "MINIMAL",
  "ORCHESTRAL",
  "CINEMATIC",
  "EPIC",
  "DRAMATIC",
  "ROMANTIC",
  "UPBEAT",
  "CHILL",
  "DARK",
  "BRIGHT",
  "ENERGETIC",
  "RELAXING",
  "MELANCHOLIC",
  "HAPPY",
  "SAD",
  "AGGRESSIVE",
  "PEACEFUL",
  "MYSTERIOUS",
  "NOSTALGIC",
  "FUTURISTIC",
]

const featuredTracks = [
  {
    title: "Summer Vibes",
    image: "/placeholder.svg?height=300&width=400",
    prompt: "Upbeat pop song about summer vacation",
    style: "POP",
  },
  {
    title: "Midnight Study",
    image: "/placeholder.svg?height=300&width=400",
    prompt: "Lo-fi hip hop for late night studying",
    style: "LO-FI",
  },
  {
    title: "Electric Storm",
    image: "/placeholder.svg?height=300&width=400",
    prompt: "Powerful rock anthem with guitar solos",
    style: "ROCK",
  },
  {
    title: "Jazz Cafe",
    image: "/placeholder.svg?height=300&width=400",
    prompt: "Smooth jazz with saxophone and piano",
    style: "JAZZ",
  },
  {
    title: "Street Beats",
    image: "/placeholder.svg?height=300&width=400",
    prompt: "Hard-hitting hip-hop beat with heavy bass",
    style: "HIP-HOP",
  },
  {
    title: "Epic Symphony",
    image: "/placeholder.svg?height=300&width=400",
    prompt: "Cinematic orchestral piece with crescendo",
    style: "CLASSICAL",
  },
]

export default function MusicShowcase() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const togglePlay = (index: number) => {
    setPlayingTrack(playingTrack === index ? null : index)
  }

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <h2 className="text-6xl md:text-8xl font-black text-lime-400 mb-12">VOXME MUSIC</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {musicTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${
                selectedTag === tag
                  ? "bg-lime-400 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTracks.map((track, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => togglePlay(index)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={track.image || "/placeholder.svg"}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center">
                    {playingTrack === index ? (
                      <Pause className="h-6 w-6 text-black" />
                    ) : (
                      <Play className="h-6 w-6 text-black ml-1" />
                    )}
                  </div>
                </div>

                {/* Style Badge */}
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-bold">
                  {track.style}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">{track.title}</h3>
                <p className="text-gray-400 text-sm">"{track.prompt}"</p>
              </div>

              {/* Audio Waveform */}
              {playingTrack === index && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4">
                  <div className="flex items-center justify-center gap-1 h-8">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-lime-400 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 60 + 20}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
