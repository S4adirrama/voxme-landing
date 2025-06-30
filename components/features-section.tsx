"use client"

import { Music, ImageIcon, Video, Mic, Wand2, Brain } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "AI Song Generator",
    description: "Create complete songs from simple text prompts. Any genre, any style.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: ImageIcon,
    title: "Cover Art Creation",
    description: "Generate stunning album artwork that matches your music perfectly.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Video,
    title: "Music Video AI",
    description: "Transform your tracks into engaging music videos for social media.",
    color: "from-pink-400 to-red-500",
  },
  {
    icon: Wand2,
    title: "Audio Enhancement",
    description: "Professional noise removal and audio cleanup tools included.",
    color: "from-green-400 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Smart Prompts",
    description: "AI assistant helps you write better prompts for amazing results.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Mic,
    title: "Voice Cloning",
    description: "Clone any voice and create singing vocals. Coming soon!",
    color: "from-blue-400 to-purple-500",
    comingSoon: true,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Everything you need</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete AI music creation suite. From idea to finished song in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                {feature.comingSoon && (
                  <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full font-medium">
                    Soon
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
