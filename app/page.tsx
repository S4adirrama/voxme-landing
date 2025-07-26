"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // This should not be reached due to middleware rewrite,
    // but as a safety fallback, redirect to /en
    router.replace("/en")
  }, [router])

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading...</p>
      </div>
    </div>
  )
}
