import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { getDictionary } from "@/lib/dictionaries"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

// Generate metadata based on the dictionary
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)

  const title =
    params.lang === "en"
      ? "Voxme.live - Create AI Music | No Experience Needed"
      : "Voxme.live - AI Генератор Музыки | Создание Музыки с ИИ"

  const description = dictionary.heroSection.subtitle

  return {
    title,
    description,
    keywords:
      params.lang === "en"
        ? "AI music generator, voice cloning, AI cover art, music video AI, generate songs with AI"
        : "AI генератор музыки, клонирование голоса, AI обложки, музыкальное видео AI, создание песен с AI",
    authors: [{ name: "Voxme.live" }],
    creator: "Voxme.live",
    publisher: "Voxme.live",
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: params.lang === "en" ? "en_US" : params.lang === "ru" ? "ru_RU" : "en_US",
      url: "https://voxme.live",
      title,
      description,
      siteName: "Voxme.live",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@voxmelive",
    },
  }
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
