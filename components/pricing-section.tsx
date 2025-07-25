"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

// Update the dictionary prop type to reflect the pricingSection structure
interface PricingSectionDictionary {
  simplePricing: string
  startFreeUpgrade: string
  freeTrial: string
  priceFree: string
  freeFeatures: string[]
  startFreeCta: string
  mostPopular: string
  creator: string
  pricePerMonth: string
  creatorFeatures: string[]
  getStartedCta: string
  moneyBackGuarantee: string
}

export default function PricingSection({ dictionary }: { dictionary: PricingSectionDictionary }) {
  return (
    <section id="pricing" className="py-28 bg-gradient-to-b from-gray-800/25 to-slate-900/25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">{dictionary.simplePricing}</h2>
          <p className="text-xl text-gray-300 mb-18">{dictionary.startFreeUpgrade}</p>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Free */}
            <div className="bg-gradient-to-br from-white/4 to-white/[0.01] backdrop-blur-2xl border border-gray-700/40 rounded-3xl p-9 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-5">{dictionary.freeTrial}</h3>
              <div className="text-5xl font-black text-white mb-7">{dictionary.priceFree}</div>

              <ul className="space-y-4 mb-9 text-left">
                {dictionary.freeFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="https://app.voxme.live" passHref>
                <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold text-base py-3.5 rounded-2xl transition-all duration-300">
                  {dictionary.startFreeCta}
                </Button>
              </Link>
            </div>

            {/* Paid */}
            <div className="bg-gradient-to-br from-cyan-500/8 to-blue-500/8 backdrop-blur-2xl border border-cyan-500/25 rounded-3xl p-9 relative shadow-2xl shadow-cyan-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-black flex items-center gap-2 shadow-lg">
                  <Star className="h-4 w-4" />
                  {dictionary.mostPopular}
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-5">{dictionary.creator}</h3>
              <div className="text-5xl font-black text-white mb-2">$19</div>
              <div className="text-gray-400 mb-7 text-lg">{dictionary.pricePerMonth}</div>

              <ul className="space-y-4 mb-9 text-left">
                {dictionary.creatorFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="https://app.voxme.live" passHref>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-base py-3.5 rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
                  {dictionary.getStartedCta}
                </Button>
              </Link>
            </div>
          </div>

          <p className="text-gray-400 text-base mt-10">{dictionary.moneyBackGuarantee}</p>
        </div>
      </div>
    </section>
  )
}
