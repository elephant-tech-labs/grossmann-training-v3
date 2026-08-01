import type React from "react"
import type { Metadata } from "next"
import { Newsreader, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Grossmann Training | Kommunikation und Führung im technischen Umfeld",
  description:
    "Grossmann Training stärkt Servicetechniker, Führungskräfte und Organisationen dort, wo technische Exzellenz auf Kundenkontakt, Verantwortung und wirtschaftlichen Druck trifft.",
  keywords: [
    "Grossmann Training",
    "Servicetechniker",
    "FM TGA Training",
    "Kommunikation im technischen Service",
    "Führung im technischen Umfeld",
  ],
  icons: {
    icon: "/images/brand/grossmann-training-favicon.svg",
  },
  openGraph: {
    title: "Grossmann Training | Kommunikation und Führung im technischen Umfeld",
    description: "Training für Servicetechniker, Führungskräfte und technische Organisationen. Seit 1994.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${sourceSans.variable} ${newsreader.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
