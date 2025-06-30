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
    answer: "Most songs are ready in 1-3 minutes. You'll get a complete song with cover art instantly.",
  },
  {
    question: "Can I use the music commercially?",
    answer: "Yes! Creator plan includes full commercial rights for YouTube, social media, client projects, and more.",
  },
  {
    question: "What if I don't like the result?",
    answer: "You can generate unlimited variations by tweaking your prompt or asking for different styles.",
  },
  {
    question: "When is voice cloning available?",
    answer:
      "Voice cloning is coming soon! You'll be able to upload any voice and have AI sing your songs in that voice.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-black text-white text-center mb-20 tracking-tight">
            Common questions
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/4 to-white/[0.01] backdrop-blur-2xl border border-gray-700/40 rounded-3xl overflow-hidden shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-white/3 transition-colors"
                >
                  <h3 className="font-bold text-white text-lg pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-8">
                    <p className="text-gray-300 leading-relaxed text-base">{faq.answer}</p>
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
