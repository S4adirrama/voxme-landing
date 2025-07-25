"use client"

import { useState, useEffect } from "react"
import { Sparkles, Music, ImageIcon, Video, Zap, Clock, CheckCircle } from "lucide-react"

// Update the dictionary prop type to reflect the demoSection structure
interface DemoSectionDictionary {
  badge: string
  watchAiCreate: string
  magic: string
  description: string
  promptLabel: string
  generating: string
  generateWithAi: string
  generationProgress: string
  processing: string
  liveDemo: string
  songGenerated: string
  artCreated: string
  videoReady: string
  avgTime: string
  successRate: string
  outputs: string
  promptExamples: string[]
  generationSteps: {
    aiProcessing: string
    creatingMusic: string
    generatingArt: string
    buildingVideo: string
  }
}

export default function DemoSection({ dictionary }: { dictionary: DemoSectionDictionary }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % dictionary.promptExamples.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [dictionary.promptExamples])

  const startGeneration = () => {
    setIsGenerating(true)
    setCurrentStep(0)
    setProgress(0)

    const generationStepsData = [
      { icon: Sparkles, label: dictionary.generationSteps.aiProcessing, color: "text-cyan-400", duration: 2000 },
      { icon: Music, label: dictionary.generationSteps.creatingMusic, color: "text-blue-400", duration: 3000 },
      { icon: ImageIcon, label: dictionary.generationSteps.generatingArt, color: "text-purple-400", duration: 1500 },
      { icon: Video, label: dictionary.generationSteps.buildingVideo, color: "text-pink-400", duration: 2500 },
    ]

    generationStepsData.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index)
        const stepProgress = ((index + 1) / generationStepsData.length) * 100
        let currentProgress = (index / generationStepsData.length) * 100
        const progressInterval = setInterval(() => {
          currentProgress += 2
          setProgress(Math.min(currentProgress, stepProgress))
          if (currentProgress >= stepProgress) clearInterval(progressInterval)
        }, 50)
      }, index * 1000)
    })

    setTimeout(
      () => {
        setIsGenerating(false)
        setProgress(100)
        setTimeout(() => {
          setProgress(0)
          setCurrentStep(0)
        }, 2000)
      },
      generationStepsData.length * 1000 + 1000,
    )
  }

  const generationStepsDisplay = [
    { icon: Sparkles, label: dictionary.generationSteps.aiProcessing, color: "text-cyan-400" },
    { icon: Music, label: dictionary.generationSteps.creatingMusic, color: "text-blue-400" },
    { icon: ImageIcon, label: dictionary.generationSteps.generatingArt, color: "text-purple-400" },
    { icon: Video, label: dictionary.generationSteps.buildingVideo, color: "text-pink-400" },
  ]

  return (
    <section id="demo" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/60 pointer-events-none"></div>

      {/* Орбы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-full px-8 py-4 mb-6">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="text-lg font-semibold text-cyan-300">{dictionary.badge}</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            {dictionary.watchAiCreate}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {dictionary.magic}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{dictionary.description}</p>
        </div>

        {/* Центрированный интерактивный блок */}
        <div className="mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-300 mb-3">{dictionary.promptLabel}</label>
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 border border-gray-600/30 min-h-[60px] flex items-center">
              <span className="text-white text-lg font-medium typing-animation">
                {dictionary.promptExamples[currentPrompt]}
              </span>
              <div className="ml-2 w-0.5 h-6 bg-cyan-400 animate-pulse"></div>
            </div>
          </div>

          <button
            onClick={startGeneration}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold text-lg py-4 rounded-2xl shadow-lg transition-all duration-300 mb-8 flex items-center justify-center gap-3"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {dictionary.generating}
              </>
            ) : (
              <>
                <Zap className="h-5 w-5" />
                {dictionary.generateWithAi}
              </>
            )}
          </button>

          {(isGenerating || progress > 0) && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-300">{dictionary.generationProgress}</span>
                <span className="text-sm font-bold text-cyan-400">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {generationStepsDisplay.map((step, index) => {
              const StepIcon = step.icon
              const isActive = isGenerating && currentStep === index
              const isCompleted = isGenerating && currentStep > index
              const isUpcoming = isGenerating && currentStep < index

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "bg-white/10 border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                      : isCompleted
                        ? "bg-green-500/10 border-green-500/30"
                        : isUpcoming
                          ? "bg-gray-800/30 border-gray-600/20"
                          : "bg-gray-800/20 border-gray-700/20"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-cyan-500/20 animate-pulse" : isCompleted ? "bg-green-500/20" : "bg-gray-700/50"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <StepIcon
                        className={`h-5 w-5 ${
                          isActive ? step.color : isCompleted ? "text-green-400" : "text-gray-500"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <span
                      className={`font-semibold ${
                        isActive ? "text-white" : isCompleted ? "text-green-300" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                    {isActive && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                        <span className="text-xs text-cyan-300">{dictionary.processing}</span>
                      </div>
                    )}
                  </div>
                  {isActive && (
                    <Clock className="h-4 w-4 text-cyan-400 animate-spin" style={{ animationDuration: "2s" }} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
