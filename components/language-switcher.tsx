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
    <div className="flex space-x-2">
      <Button
        onClick={() => switchLanguage("en")}
        className={`px-4 py-2 rounded-md text-sm font-bold ${
          currentLang === "en" ? "bg-cyan-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        EN
      </Button>
      <Button
        onClick={() => switchLanguage("ru")}
        className={`px-4 py-2 rounded-md text-sm font-bold ${
          currentLang === "ru" ? "bg-cyan-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        RU
      </Button>
    </div>
  )
}
