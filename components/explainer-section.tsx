"use client"

import { Users, Clock, Star } from "lucide-react"

export default function ExplainerSection() {
  return (
    <section className="py-20 bg-gray-800/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">How is this possible?</h2>
            <p className="text-xl text-gray-400">
              AI has revolutionized music creation. What used to take weeks now happens in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Before - Audio Format */}
            <div>
              <h3 className="text-2xl font-semibold text-red-300 mb-6 text-center">❌ Traditional Way</h3>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                {/* Audio Recording Setup Photo */}
                <div className="mb-6">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Traditional recording studio setup"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-xs text-gray-400 mt-2 text-center">Expensive studio setup required</p>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span>Learn instruments (years of practice)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span>Expensive studio time ($100-500/hour)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span>Hire musicians & producers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span>Weeks to finish one song</span>
                  </div>
                </div>
              </div>
            </div>

            {/* After - AI Format */}
            <div>
              <h3 className="text-2xl font-semibold text-green-300 mb-6 text-center">✅ With Voxme.live</h3>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                {/* AI Interface Photo */}
                <div className="mb-6">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Simple AI interface on laptop"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-xs text-gray-400 mt-2 text-center">Just your laptop and internet</p>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Type what you want in plain English</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>AI creates everything instantly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Professional studio quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Ready in 2 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/30 rounded-xl p-6">
              <Users className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-400 text-sm">Creators worldwide</div>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6">
              <Clock className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">2 min</div>
              <div className="text-gray-400 text-sm">Average creation time</div>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-gray-400 text-sm">User satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
