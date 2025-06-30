"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Independent Artist",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Voxme.live completely transformed my music creation process. I went from struggling with expensive studio time to producing professional tracks from my bedroom. The voice cloning is absolutely mind-blowing!",
    rating: 5,
    highlight: "Generated 50+ songs in first month",
  },
  {
    name: "Sarah Chen",
    role: "Music Producer",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "As a producer, I was skeptical about AI music tools. But Voxme.live's quality is incredible. The cover art generator alone has saved me thousands in design costs, and the music videos are cinema-quality.",
    rating: 5,
    highlight: "Saved $10K+ in production costs",
  },
  {
    name: "Marcus Johnson",
    role: "Content Creator",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "I create content for 500K+ followers and needed unique music for every video. Voxme.live lets me generate custom tracks that perfectly match my brand. My engagement has never been higher!",
    rating: 5,
    highlight: "300% increase in engagement",
  },
  {
    name: "Elena Vasquez",
    role: "Singer-Songwriter",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "The voice cloning feature helped me experiment with different vocal styles I never thought possible. I can now create harmonies with myself and explore genres outside my natural range. It's like having a whole choir!",
    rating: 5,
    highlight: "Expanded to 5 new genres",
  },
  {
    name: "David Kim",
    role: "Music Educator",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "I use Voxme.live to teach my students about music production and composition. The AI helps them understand complex concepts by letting them experiment freely. It's revolutionizing music education.",
    rating: 5,
    highlight: "Teaching 200+ students",
  },
  {
    name: "Maya Patel",
    role: "Podcast Host",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Creating intro music and jingles used to be expensive and time-consuming. Now I generate custom audio for every episode in minutes. The quality is so good, listeners think I hired a professional composer!",
    rating: 5,
    highlight: "Custom music for 100+ episodes",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Loved by Creators
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of artists, producers, and creators who are already using Voxme.live to revolutionize their
            music creation process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-cyan-400/50 mb-4" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Highlight */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg px-3 py-2 mb-6">
                  <span className="text-sm font-medium text-cyan-300">{testimonial.highlight}</span>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-600 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-400">Active Creators</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <div className="text-gray-400">Songs Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-400">AI Processing</div>
          </div>
        </div>
      </div>
    </section>
  )
}
