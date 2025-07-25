"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`)
    router.push(newPath)
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLanguage(currentLang === "en" ? "ru" : "en")}
        className="text-gray-300 hover:text-white"
      >
        <Globe className="h-4 w-4 mr-2" />
        {currentLang === "en" ? "Русский" : "English"}
      </Button>
    </div>
  )
}
