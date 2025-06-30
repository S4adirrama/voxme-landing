"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import DemoSection from "@/components/demo-section"
import ExamplesShowcase from "@/components/examples-showcase"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import { setSEO } from "@/lib/seo"

export default function VoxmeLandingPage() {
  useEffect(() => {
    setSEO(
      "Voxme.live - Create Music with AI | No Experience Needed",
      "Type what you want, get professional music in minutes. No musical experience required.",
      "AI music generator, create music with AI, AI song maker, music creation for beginners",
    )
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <DemoSection />
        <ExamplesShowcase />
        <PricingSection />
        <FAQSection />
      </main>
    </div>
  )
}
