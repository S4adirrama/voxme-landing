import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css" // Corrected path
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { getDictionary } from "@/lib/dictionaries" // New import
import { Suspense } from "react" // Corrected import

const inter = Inter({ subsets: ["latin"] })

// Dynamic metadata based on fetched dictionary
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    authors: [{ name: "Voxme.live" }],
    creator: "Voxme.live",
    publisher: "Voxme.live",
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: params.lang === "en" ? "en_US" : params.lang === "ru" ? "ru_RU" : "en_US",
      url: "https://voxme.live",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      siteName: "Voxme.live",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      creator: "@voxmelive",
    },
  }
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // No need to fetch dictionary here if it's only passed to children via page.tsx
  // The metadata is already handled by generateMetadata above.

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
