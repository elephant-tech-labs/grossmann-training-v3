import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const seminarTopics = [
  {
    label: "Service",
    title: "Servicetechniker im Kundenkontakt",
    body: "Wenn technische Kompetenz im direkten Kundenkontakt verständlich, ruhig und verbindlich wirken soll.",
  },
  {
    label: "Führung",
    title: "Führung im technischen Umfeld",
    body: "Für Führungskräfte, die Klarheit, Gefolgschaft und Gesprächssicherheit im Alltag stärken wollen.",
  },
  {
    label: "Projektgeschäft",
    title: "Verhandlungsführung & Besprechungsmoderation",
    body: "Für Projektleiter, Objektleiter und technische Ansprechpartner, die Gespräche wirksam steuern müssen.",
  },
  {
    label: "Mitarbeiter",
    title: "Mitarbeiterführung",
    body: "Wenn Verantwortung übernommen wird und Präsenz, Rückmeldung und Verbindlichkeit an Gewicht gewinnen.",
  },
  {
    label: "Zusammenarbeit",
    title: "Schnittstellenarbeit",
    body: "Wenn Service, Projekt, Innendienst und Führung in der Zusammenarbeit mehr gemeinsame Linie brauchen.",
  },
]

const formats = [
  {
    title: "Seminare",
    body: "Praxisnahe Trainings mit realen Situationen aus dem technischen Alltag. Für Service, Projekt, Führung und Kundenkontakt.",
    fit: "Gut, wenn ein gemeinsamer Startpunkt, klare Muster und ein fokussierter Rahmen gefragt sind.",
    scope: "Typisch: 1 bis 2 Tage, inhouse, mit Beispielen aus dem Alltag der Teilnehmenden.",
  },
  {
    title: "Team- & Niederlassungsentwicklung",
    body: "Teamtage, Niederlassungsworkshops und Entwicklungsprogramme, wenn gemeinsame Sprache und gemeinsame Haltung entstehen sollen.",
    fit: "Sinnvoll, wenn nicht nur Einzelpersonen, sondern Rollen, Teams und Schnittstellen entwickelt werden müssen.",
    scope: "Typisch: mehrstufige Zusammenarbeit mit Seminar, Follow-up, Workshop oder Transferbausteinen.",
  },
  {
    title: "Persönliches Coaching",
    body: "Tages- oder Halbtagestreffen für Führungssituationen, schwierige Gesprächsanlässe oder individuelle Schärfung von Wirkung und Klarheit.",
    fit: "Passend, wenn einzelne Personen konkrete Situationen, Rollenwechsel oder heikle Gespräche gezielt bearbeiten wollen.",
    scope: "Typisch: kompakte 1:1-Formate mit unmittelbarer Anwendung auf reale Fälle.",
  },
]

const decisionPoints = [
  {
    title: "Wenn es um direkte Praxisrelevanz geht",
    body: "Ausgangspunkt sind echte Fälle, keine künstlichen Standardbeispiele. Die Formate müssen sich an den nächsten Arbeitstag anschließen lassen.",
  },
  {
    title: "Wenn Transfer wichtig ist",
    body: "Ein einzelnes Seminar kann reichen. In komplexeren Situationen sind Follow-ups, Teamtage oder mehrstufige Programme sinnvoller.",
  },
  {
    title: "Wenn größere Einheiten beteiligt sind",
    body: "Für größere Entwicklungsprogramme können bei Bedarf weitere erfahrene Kollegen eingebunden werden.",
  },
]

export const metadata: Metadata = {
  title: "Themen & Formate | Grossmann Training",
  description:
    "Seminare, Team- und Niederlassungsentwicklung sowie persönliches Coaching für technische Teams, Führungskräfte und Serviceumfelder.",
}

export default function ThemenFormatePage() {
  return (
    <SiteShell>
      <main className="pt-28 sm:pt-32">
        <PageHero
          eyebrow="Themen & Formate"
          title="Wobei wir unterstützen und in welcher Form"
          body="Nicht jedes Anliegen braucht dasselbe Format. Entscheidend ist, wie nah das Thema am Alltag der Teilnehmenden liegt und wie nachhaltig die Veränderung wirken soll."
        />

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <SectionEyebrow>Seminarthemen</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Die häufigsten Themenfelder
                </h2>
              </div>
              <p className="max-w-2xl text-[15px] leading-8 text-muted-foreground">
                Die Themen sind nicht als abstrakter Katalog gedacht, sondern als typische Entwicklungsfelder aus
                technischem Alltag, Kundenkontakt, Führung und Projektgeschäft. Entscheidend ist immer, wo die Wirkung
                im Alltag fehlen oder verloren gehen kann.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {seminarTopics.map((topic, index) => (
                <div
                  key={topic.title}
                  className={`${index === 0 ? "lg:col-span-2" : ""} soft-card min-h-[220px] p-6 sm:p-7`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">{topic.label}</p>
                  <h3 className="mt-5 max-w-[18ch] font-display text-[1.85rem] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[2.15rem]">
                    {topic.title}
                  </h3>
                  <p className="mt-4 max-w-[34ch] text-[15px] leading-7 text-muted-foreground">{topic.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-[#f3efe6] py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <SectionEyebrow>Veranstaltungsformen</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Welche Form sinnvoll sein kann
                </h2>
              </div>
              <p className="max-w-2xl text-[15px] leading-8 text-muted-foreground">
                Nicht das Thema allein entscheidet über das passende Format. Wichtiger sind Gruppenkonstellation,
                Transferbedarf, Zeitrahmen und die Frage, ob eher Einzelwirkung, Teamabstimmung oder ein größerer
                Entwicklungsbogen gebraucht wird.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div className="overflow-hidden rounded-[30px] border border-border/70 bg-white shadow-[0_18px_55px_rgba(16,33,43,0.05)]">
                <div className="relative aspect-[16/11] min-h-[280px]">
                  <Image
                    src="/images/grossmann/reserve-seminar-speaker-wide.png"
                    alt="Seminarszene mit aktivem Vortrag im technischen Umfeld"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
                <div className="border-t border-border/70 bg-[#fcfbf8] px-6 py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Praxisbild aus dem Seminaralltag</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Formate wirken dann gut, wenn sie nicht abstrakt geplant werden, sondern an reale Gesprächs-,
                    Führungs- und Kundensituationen anschließen.
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {formats.map((item) => (
                  <div key={item.title} className="white-card p-6 sm:p-7">
                    <h3 className="font-display text-[1.9rem] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[20px] border border-border/70 bg-[#faf8f3] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/72">Sinnvoll, wenn</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.fit}</p>
                      </div>
                      <div className="rounded-[20px] border border-border/70 bg-[#faf8f3] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/72">Typischer Rahmen</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.scope}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[28px] border border-border/70 bg-white/75 px-6 py-6 shadow-[0_12px_35px_rgba(16,33,43,0.04)] sm:px-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Zwischenschritt</p>
                  <p className="mt-3 max-w-2xl text-[15px] leading-8 text-muted-foreground">
                    Wenn schnell geklärt werden soll, ob eher Seminar, Teamformat oder ein kompakter 1:1-Rahmen passt,
                    reicht oft ein kurzes Erstgespräch.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/kontakt" className="btn-brand">
                    Erstgespräch anfragen
                  </Link>
                  <Link href="/praxisbeispiele" className="btn-brand-outline">
                    Praxisbeispiele ansehen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <SectionEyebrow>Orientierung</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Woran sich die Formatwahl orientiert
                </h2>
              </div>
              <p className="max-w-2xl text-[15px] leading-8 text-muted-foreground">
                Gute Formatentscheidungen entstehen nicht aus Standardpaketen, sondern aus Alltag, Zielgruppe und
                gewünschter Wirkung. Diese drei Fragen helfen fast immer beim Sortieren.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {decisionPoints.map((item, index) => (
                <div key={item.title} className="soft-card p-7 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">0{index + 1} · Orientierung</p>
                  <h3 className="mt-5 font-display text-2xl font-medium leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCtaPanel
          eyebrow="Kontaktimpuls"
          title="Das passende Format klärt sich am besten an der konkreten Situation."
          primaryHref="/kontakt"
          primaryLabel="Erstgespräch anfragen"
          secondaryHref="/praxisbeispiele"
          secondaryLabel="Praxisbeispiele ansehen"
        />
      </main>
    </SiteShell>
  )
}
