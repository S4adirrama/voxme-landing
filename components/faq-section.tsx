"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Do I need musical experience?",
    answer:
      "Not at all! Just type what you want in plain English, like 'happy birthday song' or 'relaxing piano music.' Our AI handles everything else.",
  },
  {
    question: "How long does it take?",
    answer: "Most songs are ready in 1–3 minutes. You'll get a complete song with cover art instantly.",
  },
  {
    question: "Can I use the music commercially?",
    answer:
      "Yes! Creator plan includes full commercial rights for YouTube, social media, client projects, and more.",
  },
  {
    question: "What if I don't like the result?",
    answer:
      "You can generate unlimited variations by tweaking your prompt or asking for different styles.",
  },
  {
    question: "When is voice cloning available?",
    answer:
      "Voice cloning is coming soon! You'll be able to upload any voice and have AI sing your songs in that voice.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-white text-center mb-16 tracking-tight">
            Common Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-700/40 bg-white/5 backdrop-blur-xl transition-shadow"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-6 sm:px-8 py-6 sm:py-8 text-left hover:bg-white/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-semibold text-white text-base sm:text-lg pr-4">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  <div
                    className={`px-6 sm:px-8 transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100 py-4 sm:py-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
