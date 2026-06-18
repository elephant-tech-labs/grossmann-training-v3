import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Grossmann Training | Kommunikation und Führung im technischen Umfeld",
  description:
    "Grossmann Training stärkt Servicetechniker, Führungskräfte und Organisationen dort, wo technische Exzellenz auf Kundenkontakt, Verantwortung und wirtschaftlichen Druck trifft.",
  generator: "v0.app",
  keywords: [
    "Grossmann Training",
    "Servicetechniker",
    "FM TGA Training",
    "Kommunikation im technischen Service",
    "Führung im technischen Umfeld",
  ],
  icons: {
    icon: "/images/favicon2.svg",
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
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
