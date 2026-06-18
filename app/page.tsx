import type { Metadata } from "next"
import HomeV3Footer from "@/components/home-v3-footer"
import HomeV3Header from "@/components/home-v3-header"
import HomepageV3 from "@/components/homepage-v3"

export const metadata: Metadata = {
  title: "Grossmann Training | Kommunikation und Führung im technischen Umfeld",
  description:
    "Grossmann Training stärkt Servicetechniker, Führungskräfte und Organisationen dort, wo technische Exzellenz auf Kundenkontakt, Verantwortung und wirtschaftlichen Druck trifft.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomeV3Header />
      <HomepageV3 />
      <HomeV3Footer />
    </div>
  )
}
