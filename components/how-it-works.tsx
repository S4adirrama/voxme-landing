import type React from "react"
import { Mic, Wand2, Music, Share2 } from "lucide-react"

const HowItWorks: React.FC = () => (
  <section className="py-20 px-6 border-t border-yellow-500/20" id="how-it-works">
    <h2 className="text-4xl font-bold mb-16 text-center text-yellow-300">How It Works</h2>
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-yellow-500/30 hidden md:block"></div>

        <div className="space-y-16">
          <Step
            number={1}
            title="Upload or record your voice"
            description="Use our web recorder or upload an existing audio file. Just 30 seconds of clear speech is all we need."
            icon={<Mic className="h-6 w-6" />}
          />

          <Step
            number={2}
            title="Clean or enhance it using our tools"
            description="Our AI-powered tools automatically remove background noise and enhance vocal clarity."
            icon={<Wand2 className="h-6 w-6" />}
          />

          <Step
            number={3}
            title="Choose a song — let AI do the singing"
            description="Browse our library of thousands of songs or upload your own instrumental track."
            icon={<Music className="h-6 w-6" />}
          />

          <Step
            number={4}
            title="Get your cover, share it anywhere"
            description="Download your AI-generated vocal cover in studio quality and share it with the world."
            icon={<Share2 className="h-6 w-6" />}
          />
        </div>
      </div>
    </div>
  </section>
)

interface StepProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => (
  <div className="flex items-start gap-6">
    <div className="relative">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 text-black font-bold text-xl z-10 relative">
        {number}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-yellow-400/10 p-2 rounded-full">{icon}</div>
        <h3 className="text-2xl font-semibold text-yellow-300">{title}</h3>
      </div>
      <p className="text-yellow-100 text-lg">{description}</p>
    </div>
  </div>
)

export default HowItWorks
