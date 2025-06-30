"use client"

import { ArrowRight, Type, Sparkles, Download } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Describe",
    description: "Type what you want in plain English",
    example: '"Happy birthday song for Emma"',
    icon: Type,
  },
  {
    number: 2,
    title: "AI Creates",
    description: "Our AI generates everything in minutes",
    example: "Song + Art + Video",
    icon: Sparkles,
  },
  {
    number: 3,
    title: "Download",
    description: "Get professional files ready to use",
    example: "MP3, PNG, MP4",
    icon: Download,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">How it works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-2xl">
                      {step.number}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gray-800 rounded-full p-2">
                      <step.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{step.description}</p>
                  <div className="bg-gray-800/50 rounded-lg px-4 py-3 text-cyan-300 font-medium">{step.example}</div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 transform">
                    <ArrowRight className="h-6 w-6 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
