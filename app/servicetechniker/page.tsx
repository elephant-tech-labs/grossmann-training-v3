import type { Metadata } from "next"
import HomeV3Footer from "@/components/home-v3-footer"
import HomeV3Header from "@/components/home-v3-header"
import ServiceTechPage from "@/components/service-tech-page"

export const metadata: Metadata = {
  title: "Für Servicetechniker | Grossmann Training",
  description:
    "Training für Servicetechniker im Kundenkontakt: klar erklären, souverän auftreten und schwierige Situationen professionell lösen.",
}

export default function ServicetechnikerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeV3Header />
      <ServiceTechPage />
      <HomeV3Footer />
    </div>
  )
}
