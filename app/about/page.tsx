import type { Metadata } from "next"
import HomeV3Footer from "@/components/home-v3-footer"
import HomeV3Header from "@/components/home-v3-header"

export const metadata: Metadata = {
  title: "Über Bernd | Grossmann Training",
  description: "Platzhalterseite für die nächste Ausbaustufe der V3-Website.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeV3Header />
      <main className="pt-32">
        <section className="bg-[#faf8f3] py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">In Vorbereitung</p>
            <h1 className="mt-5 font-display text-4xl font-light tracking-[-0.03em] sm:text-5xl">
              Über Bernd Grossmann
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted-foreground">
              Diese Seite wird als nächster Schritt auf Basis derselben V3-Richtung ausgearbeitet.
            </p>
          </div>
        </section>
      </main>
      <HomeV3Footer />
    </div>
  )
}
