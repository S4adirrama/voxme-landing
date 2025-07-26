"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: string) => {
    if (newLang === "en") {
      // For English, go to root
      router.push("/")
    } else {
      // For other languages, use the locale prefix
      router.push(`/${newLang}`)
    }
  }

  return (
    <div className="flex space-x-1">
      <Button
        onClick={() => switchLanguage("en")}
        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-bold transition-all duration-200 ${
          currentLang === "en"
            ? "bg-cyan-600 text-white shadow-md"
            : "bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 hover:text-white"
        }`}
      >
        EN
      </Button>
      <Button
        onClick={() => switchLanguage("ru")}
        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-bold transition-all duration-200 ${
          currentLang === "ru"
            ? "bg-cyan-600 text-white shadow-md"
            : "bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 hover:text-white"
        }`}
      >
        RU
      </Button>
    </div>
  )
}
