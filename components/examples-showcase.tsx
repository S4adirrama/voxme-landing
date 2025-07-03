"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

const musicStyles = [
  "POP", "ROCK", "HIP-HOP", "JAZZ", "ELECTRONIC",
  "CLASSICAL", "COUNTRY", "R&B", "REGGAE", "BLUES", "FOLK", "METAL",
]

const featuredExamples = [
  {
    title: "Sunset Exit",
    style: "ELECTRONIC",
    prompt: "Melancholic synthwave at sunset",
    image: "https://storage.googleapis.com/corpusant-app-public/riffs/328c462e-e215-4ade-8131-3368ad65eac3/image/f7be7ee7-785d-49fb-bc75-75d0134ec189.jpg",
    color: "from-pink-500 to-purple-500",
    audio: "https://res.cloudinary.com/dxf0fmf9a/video/upload/v1751521887/Sunset_Exit_spuha0.mp3",
  },
  {
    title: "Rainy Study",
    style: "LO-FI",
    prompt: "Lo-fi chill beats for focus",
    image: "https://storage.googleapis.com/corpusant-app-public/riffs/328c462e-e215-4ade-8131-3368ad65eac3/image/98ef63b3-88f7-4f4f-a3b9-2811ef28a6bb.jpg",
    color: "from-blue-500 to-indigo-500",
    audio: "https://res.cloudinary.com/dxf0fmf9a/video/upload/v1751522687/Rainy_Study_vkvxk2.mp3",
  },
  {
    title: "Breaking",
    style: "HIP-HOP",
    prompt: "Aggressive hip-hop with tight beats",
    image: "https://storage.googleapis.com/corpusant-app-public/riffs/328c462e-e215-4ade-8131-3368ad65eac3/image/7b31ce3e-a1b7-4aed-bdbb-70408244eba2.jpg",
    color: "from-yellow-500 to-orange-500",
    audio: "https://res.cloudinary.com/dxf0fmf9a/video/upload/v1751523849/Breaking_ztvzx9.mp3",
  },
  {
    title: "Silent Echo",
    style: "JAZZ",
    prompt: "Smooth ambient jazz with echo",
    image: "https://storage.googleapis.com/corpusant-app-public/riffs/328c462e-e215-4ade-8131-3368ad65eac3/image/5b841dab-0cea-4dd4-8658-06339468f87c.jpg",
    color: "from-teal-500 to-cyan-500",
    audio: "https://res.cloudinary.com/dxf0fmf9a/video/upload/v1751524527/Silent_Echo_z2mkvz.mp3",
  },
  {
    title: "Lost Youth",
    style: "POP",
    prompt: "Emotional synth pop for late nights",
    image: "https://storage.googleapis.com/corpusant-app-public/riffs/328c462e-e215-4ade-8131-3368ad65eac3/image/1f3f9a2c-6ea8-4be1-bb51-a1d4bfcaf424.jpg",
    color: "from-pink-500 to-rose-500",
    audio: "https://res.cloudinary.com/dxf0fmf9a/video/upload/v1751524696/Lost_Youth_j8knfc.mp3",
  },
  {
    title: "Resilience",
    style: "CLASSICAL",
    prompt: "Uplifting orchestral soundtrack",
    image: "https://storage.googleapis.com/corpusant-app-public/riffs/328c462e-e215-4ade-8131-3368ad65eac3/image/f32e0bc2-11f4-4fa0-a440-435cccb06bb0.jpg",
    color: "from-emerald-500 to-lime-500",
    audio: "https://res.cloudinary.com/dxf0fmf9a/video/upload/v1751525132/Resilience_jf2dbk.mp3",
  },
]

export default function ExamplesShowcase() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([])

  const togglePlay = (index: number) => {
    if (playingTrack === index) {
      audioRefs.current[index]?.pause()
      setPlayingTrack(null)
    } else {
      audioRefs.current.forEach((audio, i) => {
        if (audio && i !== index) audio.pause()
      })
      audioRefs.current[index]?.play()
      setPlayingTrack(index)
    }
  }

  useEffect(() => {
    audioRefs.current.forEach((audio, i) => {
      if (!audio) return
      audio.onended = () => {
        if (playingTrack === i) setPlayingTrack(null)
      }
    })
  }, [playingTrack])

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredExamples.map((example, index) => (
            <div key={index} className="relative cursor-pointer" onClick={() => togglePlay(index)}>
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={example.image}
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

                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  src={example.audio}
                  preload="auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
