"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// Update the dictionary prop type to reflect the faqSection structure
interface FAQSectionDictionary {
  commonQuestions: string
  faqs: {
    question: string
    answer: string
  }[]
}

export default function FAQSection({ dictionary }: { dictionary: FAQSectionDictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black text-white text-center mb-16 tracking-tight">
            {dictionary.commonQuestions}
          </h2>

          <div className="space-y-6">
            {dictionary.faqs.map((faq: any, index: number) => {
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
                    <h3 className="font-semibold text-white text-base sm:text-lg pr-4">{faq.question}</h3>
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
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
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
