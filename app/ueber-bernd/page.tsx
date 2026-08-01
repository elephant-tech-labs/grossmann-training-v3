import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageCtaPanel from "@/components/page-cta-panel"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const qualifications = [
  {
    title: "BWL, Sozialpsychologie und Verhalten",
    body: "Studium BWL an den Universitäten Bayreuth und Göttingen mit vertiefter Beschäftigung zu Sozialpsychologie und Verhalten.",
    effect: "Hilft dabei, wirtschaftliche Realität und menschliches Verhalten zusammenzudenken.",
  },
  {
    title: "Gesprächspsychotherapie nach Carl Rogers",
    body: "Eine Grundlage für respektvolle Gesprächsführung, echtes Zuhören und wirksame Gesprächsatmosphäre.",
    effect: "Wird dort relevant, wo technische Gespräche unter Druck trotzdem klar und konstruktiv bleiben sollen.",
  },
  {
    title: "Transaktionsanalyse nach Eric Berne",
    body: "Ein praxistauglicher Blick auf Kommunikation, Rollen und wiederkehrende Muster in Gesprächen.",
    effect: "Hilft, Spannungen, Missverständnisse und unproduktive Gesprächsdynamiken schneller zu erkennen.",
  },
  {
    title: "Microskills nach Michael Grinder",
    body: "Feinsteuerung von Wirkung, Körpersprache, Präsenz und sprachlicher Führung in konkreten Situationen.",
    effect: "Besonders nützlich, wenn erfahrene Fachleute ihre Wirkung gezielt schärfen wollen.",
  },
]

const trustSignals = [
  {
    label: "Seit 1994",
    value: "Arbeit mit technischen Service- und Führungsteams",
  },
  {
    label: "Praxisfokus",
    value: "Kundenkontakt, Führung, Projektalltag und Zusammenarbeit",
  },
  {
    label: "Grundhaltung",
    value: "Nicht Theorie um der Theorie willen, sondern Wirkung im Alltag",
  },
]

const perspectiveCards = [
  {
    title: "Praxis",
    body: "Technische Serviceumfelder, Führung, Projektalltag und Kundensituationen stehen im Zentrum der Arbeit.",
  },
  {
    title: "Ehrenamt",
    body: "Weiterbildung für Betreuer und Coaching im Umfeld des Bunds Deutscher Einsatzveteranen e.V. Verantwortung, Kameradschaft und Dienst sind auch in der Familiengeschichte verankert.",
  },
  {
    title: "Zusammenarbeit",
    body: "Für größere Entwicklungsprogramme können bei Bedarf weitere erfahrene Trainer eingebunden werden.",
  },
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
                    src="/images/grossmann-v4/bernd-brand-portrait.png"
                    alt="Bernd Grossmann vor dem Grossmann Training Firmenbanner"
                    fill
                    className="object-cover object-left"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="border-t border-border/70 bg-[#fcfbf8] px-6 py-4 text-sm text-muted-foreground">
                  Bernd Grossmann arbeitet mit technischem Alltag, nicht an ihm vorbei.
                </div>
              </div>

              <div>
                <SectionEyebrow>Über Bernd Grossmann</SectionEyebrow>
                <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-6xl">
                  Seit 1994 arbeitet Bernd Grossmann mit Service- und Führungsteams in technischen Umfeldern
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                  Bernd Grossmann arbeitet dort, wo technische Exzellenz auf Kundenkontakt, Verantwortung,
                  Zusammenarbeit und wirtschaftlichen Druck trifft. Im Mittelpunkt steht nicht abstrakte Theorie,
                  sondern Wirkung im realen technischen Alltag.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                  Gute Technik braucht gute Gespräche. Dieser Gedanke verbindet fachliche Realität mit menschlicher
                  Wirkung, Gesprächsqualität und professioneller Präsenz.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {trustSignals.map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-border/70 bg-[#fcfbf8] p-5 shadow-[0_10px_30px_rgba(16,33,43,0.03)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{item.label}</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="qualifikation" className="scroll-mt-24 bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionEyebrow>Ausbildungen & Grundlagen</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Haltung, Methodik und Hintergrund
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                  Die fachlichen Grundlagen sind nicht Selbstzweck. Relevant ist, was davon im Gespräch, in Führung
                  und im Kundenkontakt praktisch wirksam wird.
                </p>
                <figure className="mt-8 overflow-hidden rounded-[26px] border border-border/70 bg-white shadow-[0_16px_45px_rgba(16,33,43,0.05)]">
                  <div className="relative aspect-[4/5] min-h-[300px]">
                    <Image
                      src="/images/grossmann-v4/bernd-with-michael-grinder.jpg"
                      alt="Bernd Grossmann mit Michael Grinder"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 38vw"
                    />
                  </div>
                  <figcaption className="border-t border-border/70 bg-[#fcfbf8] px-5 py-4 text-sm leading-6 text-muted-foreground">
                    Bernd Grossmann mit Michael Grinder - fachlicher Bezug zu Microskills, Präsenz und Wirkung.
                  </figcaption>
                </figure>
              </div>
              <div className="grid gap-4">
                {qualifications.map((item) => (
                  <div key={item.title} className="soft-card p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{item.title}</p>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">{item.body}</p>
                    <div className="mt-5 rounded-[18px] border border-border/70 bg-white/75 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Was das in die Arbeit bringt</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.effect}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kollegen" className="scroll-mt-24 border-y border-border/70 bg-[#f3efe6] py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionEyebrow>Grossmann Training & Kollegen</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Persönlich geführt, bei größeren Vorhaben sinnvoll erweiterbar
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                  Für größere Entwicklungsprogramme können weitere erfahrene Trainer eingebunden werden. Das eignet
                  sich für Team- und Niederlassungsentwicklung, parallele Maßnahmen und größere Organisationseinheiten.
                  Konzeption, Qualitätsanspruch und persönliche Verantwortung bleiben bei Bernd Grossmann gebündelt.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {perspectiveCards.map((item) => (
                  <div key={item.title} className="white-card p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{item.title}</p>
                    <p className="mt-5 text-base leading-8 text-muted-foreground [overflow-wrap:anywhere]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[28px] border border-border/70 bg-white/80 px-6 py-6 shadow-[0_12px_35px_rgba(16,33,43,0.04)] sm:px-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Weiterführend</p>
                  <h3 className="mt-3 max-w-2xl font-display text-2xl font-medium leading-snug tracking-[-0.03em] text-foreground sm:text-[2rem]">
                    Wer die Person hinter der Arbeit versteht, möchte meist als Nächstes Wirkung oder Beispiele sehen.
                  </h3>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/referenzen-stimmen" className="btn-brand">
                    Referenzen ansehen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/praxisbeispiele" className="btn-brand-outline">
                    Praxisbeispiele ansehen
                  </Link>
                </div>
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
