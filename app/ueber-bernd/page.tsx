import type { Metadata } from "next"
import Image from "next/image"
import PageCtaPanel from "@/components/page-cta-panel"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const qualifications = [
  "Studium BWL an den Universitäten Bayreuth und Göttingen mit vertiefter Beschäftigung zu Sozialpsychologie und Verhalten",
  "Gesprächspsychotherapie nach Carl Rogers",
  "Transaktionsanalyse nach Eric Berne",
  "Microskills nach Michael Grinder",
]

export const metadata: Metadata = {
  title: "Über Bernd Grossmann | Grossmann Training",
  description:
    "Über Bernd Grossmann: Erfahrung seit 1994, wirtschaftliche Praxis, Sozialpsychologie und Training in technischen Umfeldern.",
}

export default function UeberBerndPage() {
  return (
    <SiteShell>
      <main className="pt-28 sm:pt-32">
        <section className="page-hero-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="overflow-hidden rounded-[30px] border border-border/70 bg-white shadow-[0_25px_75px_rgba(16,33,43,0.08)]">
                <div className="relative aspect-[4/5] min-h-[360px]">
                  <Image
                    src="/images/photo-placeholder.svg"
                    alt="Platzhalter für Bernd Grossmann Portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="border-t border-border/70 bg-[#fcfbf8] px-6 py-4 text-sm text-muted-foreground">
                  Portrait- oder Trainingsbild kann später ersetzt werden.
                </div>
              </div>

              <div>
                <SectionEyebrow>Über Bernd Grossmann</SectionEyebrow>
                <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-6xl">
                  Seit 1994 Arbeit mit Service- und Führungsteams in technischen Umfeldern
                </h1>
                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted-foreground">
                  Bernd Grossmann arbeitet dort, wo technische Exzellenz auf Kundenkontakt, Verantwortung,
                  Zusammenarbeit und wirtschaftlichen Druck trifft. Im Mittelpunkt steht nicht abstrakte Theorie,
                  sondern Wirkung im realen technischen Alltag.
                </p>
                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-muted-foreground">
                  Gute Technik braucht gute Gespräche. Dieser Gedanke verbindet fachliche Realität mit menschlicher
                  Wirkung, Gesprächsqualität und professioneller Präsenz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionEyebrow>Ausbildungen & Grundlagen</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Haltung, Methodik und Hintergrund
                </h2>
              </div>
              <div className="grid gap-4">
                {qualifications.map((item) => (
                  <div key={item} className="soft-card p-6">
                    <p className="text-[15px] leading-8 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-[#f3efe6] py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="white-card p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Praxis</p>
                <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
                  Technische Serviceumfelder, Führung, Projektalltag und Kundensituationen stehen im Zentrum der Arbeit.
                </p>
              </div>
              <div className="white-card p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Ehrenamt</p>
                <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
                  Weiterbildung für Betreuer und Coaching im Umfeld des Bunds Deutscher Einsatzveteranen e.V.
                </p>
              </div>
              <div className="white-card p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Kollegen</p>
                <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
                  Für größere Entwicklungsprogramme können bei Bedarf weitere erfahrene Trainer eingebunden werden.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PageCtaPanel
          eyebrow="Kontaktimpuls"
          title="Wenn die Situation in Ihrem Unternehmen ähnlich klingt, lohnt sich ein persönlicher Austausch."
          primaryHref="/kontakt"
          primaryLabel="Erstgespräch anfragen"
          secondaryHref="/referenzen-stimmen"
          secondaryLabel="Referenzen & Stimmen ansehen"
        />
      </main>
    </SiteShell>
  )
}
