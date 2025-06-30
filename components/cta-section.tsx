"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Limited Time Offer</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Create Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Music Empire?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 50,000+ creators who are already using AI to revolutionize their music. Start your free trial today and
            experience the future of music creation.
          </p>

          {/* Offer Details */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-lg font-semibold text-white">Free Trial Includes:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <span>✓ 10 AI Songs</span>
              </div>
              <div className="flex items-center justify-center">
                <span>✓ Unlimited Cover Art</span>
              </div>
              <div className="flex items-center justify-center">
                <span>✓ 5 Music Videos</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xl px-10 py-8 h-auto shadow-2xl shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200"
            >
              <Sparkles className="h-6 w-6 mr-3" />
              Start Free Trial
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 font-bold text-xl px-10 py-8 h-auto backdrop-blur-sm bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <span>✓ No credit card required</span>
            </div>
            <div className="flex items-center">
              <span>✓ Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <span>✓ 30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-bounce delay-300"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-bounce delay-700"></div>
    </section>
  )
}
