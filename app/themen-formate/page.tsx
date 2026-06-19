import type { Metadata } from "next"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const seminarTopics = [
  "Servicetechniker im Kundenkontakt",
  "Führung im technischen Umfeld",
  "Verhandlungsführung & Besprechungsmoderation",
  "Mitarbeiterführung",
  "Schnittstellenarbeit",
]

const formats = [
  {
    title: "Seminare",
    body: "Praxisnahe Trainings mit realen Situationen aus dem technischen Alltag. Für Service, Projekt, Führung und Kundenkontakt.",
  },
  {
    title: "Team- & Niederlassungsentwicklung",
    body: "Teamtage, Niederlassungsworkshops und Entwicklungsprogramme, wenn gemeinsame Sprache und gemeinsame Haltung entstehen sollen.",
  },
  {
    title: "Persönliches Coaching",
    body: "Tages- oder Halbtagestreffen für Führungssituationen, schwierige Gesprächsanlässe oder individuelle Schärfung von Wirkung und Klarheit.",
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
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow>Seminarthemen</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Die häufigsten Themenfelder
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {seminarTopics.map((topic) => (
                <div key={topic} className="soft-card flex min-h-[190px] items-end p-6">
                  <p className="font-display text-[1.6rem] font-medium leading-[1.12] text-foreground [overflow-wrap:anywhere] sm:text-[1.95rem]">
                    {topic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-[#f3efe6] py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <SectionEyebrow>Veranstaltungsformen</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Welche Form sinnvoll sein kann
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
              {formats.map((item) => (
                <div key={item.title} className="white-card p-7 sm:p-8">
                  <h3 className="font-display text-2xl font-medium leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {decisionPoints.map((item) => (
                <div key={item.title} className="soft-card p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Orientierung</p>
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
