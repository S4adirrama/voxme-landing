"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import DemoSection from "@/components/demo-section"
import ExamplesShowcase from "@/components/examples-showcase"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import { getDictionary } from "@/lib/dictionaries" // New import

export default async function VoxmeLandingPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dictionary = await getDictionary(lang) // Fetch the dictionary

  // Removed useEffect for setSEO as metadata is now handled by generateMetadata in layout.tsx

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Pass specific dictionary sections to components */}
      <Header dictionary={dictionary.header} lang={lang} />
      <main>
        <HeroSection dictionary={dictionary.heroSection} />
        <DemoSection dictionary={dictionary.demoSection} />
        <ExamplesShowcase dictionary={dictionary.examplesShowcase} />
        <PricingSection dictionary={dictionary.pricingSection} />
        <FAQSection dictionary={dictionary.faqSection} />
      </main>
    </div>
  )
}
