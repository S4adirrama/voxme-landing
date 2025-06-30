"use client"

import { useState, useEffect } from "react"
import { Play, Sparkles, Music, ImageIcon, Video, Zap, Clock, CheckCircle, Volume2, VolumeX } from "lucide-react"

const generationSteps = [
  { icon: Sparkles, label: "AI Processing", color: "text-cyan-400", duration: 2000 },
  { icon: Music, label: "Creating Music", color: "text-blue-400", duration: 3000 },
  { icon: ImageIcon, label: "Generating Art", color: "text-purple-400", duration: 1500 },
  { icon: Video, label: "Building Video", color: "text-pink-400", duration: 2500 },
]

const promptExamples = [
  "Happy birthday song for Emma with jazz style",
  "Relaxing lo-fi beats for studying",
  "Epic rock anthem with guitar solos",
  "Romantic ballad with piano and strings",
]

export default function DemoSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % promptExamples.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const startGeneration = () => {
    setIsGenerating(true)
    setCurrentStep(0)
    setProgress(0)

    generationSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index)
        const stepProgress = ((index + 1) / generationSteps.length) * 100
        let currentProgress = (index / generationSteps.length) * 100
        const progressInterval = setInterval(() => {
          currentProgress += 2
          setProgress(Math.min(currentProgress, stepProgress))
          if (currentProgress >= stepProgress) clearInterval(progressInterval)
        }, 50)
      }, index * 1000)
    })

    setTimeout(() => {
      setIsGenerating(false)
      setProgress(100)
      setTimeout(() => {
        setProgress(0)
        setCurrentStep(0)
      }, 2000)
    }, generationSteps.length * 1000 + 1000)
  }

  return (
    <section id="demo" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/60"></div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-full px-8 py-4 mb-8">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="text-lg font-semibold text-cyan-300">See It In Action</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
              Watch AI Create{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Magic</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See exactly how our AI transforms simple text into complete music experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Demo Interaction */}
            <div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Enter your prompt:</label>
                  <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 border border-gray-600/30 min-h-[60px] flex items-center">
                    <span className="text-white text-lg font-medium typing-animation">
                      {promptExamples[currentPrompt]}
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
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5" />
                      Generate with AI
                    </>
                  )}
                </button>

                {(isGenerating || progress > 0) && (
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">Generation Progress</span>
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
                  {generationSteps.map((step, index) => {
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
                            isActive
                              ? "bg-cyan-500/20 animate-pulse"
                              : isCompleted
                                ? "bg-green-500/20"
                                : "bg-gray-700/50"
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
                              <span className="text-xs text-cyan-300">Processing...</span>
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

            {/* Right: Video */}
            <div>
              <div className="relative group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <div className="relative aspect-video">
                    <video
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg?height=400&width=600"
                    >
                      <source src="/demo-video.mp4" type="video/mp4" />
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-slate-900/80">
                        <div className="text-center z-10">
                          <div className="relative mb-8">
                            <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl shadow-cyan-500/25 mx-auto">
                              <Play className="h-12 w-12 text-white ml-2" />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-4">Demo Video Loading...</h3>
                          <p className="text-xl text-gray-300">Watch the complete AI generation process</p>
                        </div>
                      </div>
                    </video>

                    {/* Video Controls */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="bg-black/70 backdrop-blur-xl rounded-full p-3 border border-white/20 hover:bg-black/80 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="h-4 w-4 text-white" />
                        ) : (
                          <Volume2 className="h-4 w-4 text-white" />
                        )}
                      </button>
                    </div>

                    {/* Info Tag */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xl rounded-2xl px-4 py-2 border border-white/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-semibold">Live Demo</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-black text-cyan-400 mb-1">2:34</div>
                  <div className="text-xs text-gray-400">Avg. Time</div>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-black text-purple-400 mb-1">100%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-black text-pink-400 mb-1">3-in-1</div>
                  <div className="text-xs text-gray-400">Outputs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
