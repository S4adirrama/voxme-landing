import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Voxme.live - AI Music Generator | Voice Cloning & AI Cover Art Creator",
  description:
    "Create AI-generated songs, cover art, and music videos with advanced voice cloning technology. The ultimate creative lab for AI musicians and artists. Generate songs with AI, create covers, and craft music videos in minutes.",
  keywords:
    "AI music generator, voice cloning, AI cover art, music video AI, generate songs with AI, AI music creation, voice synthesis, AI artist tools, music production AI, AI singing, vocal cloning technology",
  authors: [{ name: "Voxme.live" }],
  creator: "Voxme.live",
  publisher: "Voxme.live",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://voxme.live",
    title: "Voxme.live - AI Music Generator | Voice Cloning & AI Cover Art Creator",
    description:
      "Create AI-generated songs, cover art, and music videos with advanced voice cloning technology. The ultimate creative lab for AI musicians and artists.",
    siteName: "Voxme.live",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxme.live - AI Music Generator | Voice Cloning & AI Cover Art Creator",
    description:
      "Create AI-generated songs, cover art, and music videos with advanced voice cloning technology. The ultimate creative lab for AI musicians and artists.",
    creator: "@voxmelive",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
