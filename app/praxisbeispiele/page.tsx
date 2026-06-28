import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const cases = [
  {
    id: "siemens",
    navLabel: "Siemens",
    title: "Siemens AG",
    imageSrc: "/images/grossmann/home-case-technical-discussion.jpg",
    imageAlt: "Diskussions- und Arbeitsszene aus einem technischen Seminarumfeld",
    subtitle: "Wenn technische Exzellenz plötzlich Verhandlungskompetenz braucht",
    audience: "Projektnahe Fach- und Vertriebsrollen",
    format: "Entwicklungsprogramm",
    focus: "Verhandlung, Argumentation, Wettbewerb",
    intro:
      "Ein Gründungskapitel von Grossmann Training. Im veränderten technischen Infrastrukturgeschäft reichte technische Stärke allein nicht mehr aus, um Aufträge zu sichern.",
    situation:
      "Neue Einkaufs- und Wettbewerbsstrukturen veränderten das Umfeld von Signaltechnik, Leittechnik und bahnbezogener Infrastruktur.",
    challenge:
      "Kundennahe Mitarbeiter mussten lernen, technische Kompetenz in neue Gesprächs-, Vergabe- und Wettbewerbssituationen wirksam zu übersetzen.",
    approach:
      "Gemeinsam mit der Personalentwicklung der Siemens AG entstand ein Entwicklungsprogramm zu Verhandlungsführung, Argumentation, Gesprächsstruktur und Umgang mit Wettbewerb.",
    impact:
      "Das Projekt zeigt bis heute: Technische Märkte verändern sich - Menschen müssen lernen, ihre Kompetenz neu wirksam zu machen.",
    caption:
      "Neue Marktlogik im technischen Infrastrukturgeschäft - aus technischer Stärke wird Verhandlungskompetenz.",
    ctaLabel: "Ähnliches Projektgeschäft besprechen",
  },
  {
    id: "service",
    navLabel: "Service",
    title: "Servicetechniker im Kundenkontakt",
    imageSrc: "/images/grossmann/service-seminar-team-photo.png",
    imageAlt: "Bernd Grossmann mit Teilnehmenden aus dem Serviceumfeld nach einem Seminar",
    subtitle: "Techniker werden zu Botschaftern zwischen Technik, Betrieb und Kunde",
    audience: "Servicetechniker & Monteure",
    format: "Praxisnahes Seminar",
    focus: "Kundenkontakt, Wirkung, Deeskalation",
    intro:
      "Servicetechniker und Monteure sind oft die sichtbarsten Vertreter eines technischen Unternehmens beim Kunden.",
    situation: "Sie erklären Störungen, vertreten Termine, erleben Ärger und werden gleichzeitig als Vertrauenspersonen wahrgenommen.",
    challenge:
      "Fachliche Kompetenz reicht nicht aus, wenn Kunden unsicher, verärgert oder kostenbewusst reagieren.",
    approach:
      "Trainiert werden reale Kundensituationen: Begrüßung, Klärung, Nutzenargumentation, Deeskalation, Fragen, Körpersprache und verständliche Erklärung technischer Zusammenhänge.",
    impact:
      "Die Teilnehmer bleiben technische Spezialisten - erweitern aber ihre Wirkung im Kundenkontakt.",
    caption: "Jeder Einsatz ist auch ein Auftritt - technische Kompetenz wird im Gespräch erlebbar.",
    ctaLabel: "Serviceteams im Kundenkontakt besprechen",
  },
  {
    id: "fuehrung",
    navLabel: "Führung",
    title: "Bauleiter & technische Führungskräfte",
    imageSrc: "/images/grossmann/practice-leadership-seminar-board.jpg",
    imageAlt: "Bernd Grossmann vor einer Seminarübersicht für technische Führung und Gesprächsführung",
    subtitle: "Technische Stärke in Führungswirkung übersetzen",
    audience: "Bauleiter & technische Führungskräfte",
    format: "Seminar plus Transfer",
    focus: "Führung, Besprechung, Präsenz",
    intro: "Führung im technischen Alltag bedeutet oft Führung unter Druck.",
    situation: "Bauleiter und Führungskräfte koordinieren Menschen, Unternehmen und Gewerke und prägen Kultur und Zusammenarbeit.",
    challenge:
      "Fachwissen allein schafft noch keine Gefolgschaft. In Projekten entstehen Reibung, Widerstand und Verantwortungsverschiebungen.",
    approach:
      "Die Arbeit verbindet Führung, Gesprächssteuerung, Besprechungsmoderation, Konfliktstabilisierung und Selbstwahrnehmung.",
    impact:
      "Technische Führungskräfte gewinnen an Klarheit, Präsenz und Wirksamkeit.",
    caption: "Führung im technischen Umfeld braucht Klarheit, Präsenz und Gesprächssteuerung.",
    ctaLabel: "Führung im technischen Umfeld besprechen",
  },
  {
    id: "teams",
    navLabel: "Teams",
    title: "Team- & Niederlassungsentwicklung",
    imageSrc: "/images/grossmann/practice-team-workshop-discussion.jpg",
    imageAlt: "Diskussion und Gruppenarbeit in einem Workshop zur Team- und Niederlassungsentwicklung",
    subtitle: "Vom Einzeltraining zum Entwicklungsprogramm",
    audience: "Teams, Niederlassungen, Schnittstellen",
    format: "Mehrstufige Entwicklung",
    focus: "Transfer, Zusammenarbeit, Führung",
    intro: "Viele technische Organisationen arbeiten mit einzelnen Seminaren. Der Alltag ist jedoch komplexer.",
    situation: "Service, Innendienst, Außendienst, Projektleitung, Führung und Kunde greifen ineinander.",
    challenge:
      "Wenn nur Einzelpersonen trainiert werden, bleibt die Wirkung begrenzt.",
    approach:
      "Mehrstufige Programme können Basisseminar, Follow-up, persönliches Coaching, Teamtage und Niederlassungsworkshops verbinden.",
    impact:
      "Teams und Niederlassungen gewinnen Klarheit in Zusammenarbeit, Kundenorientierung und Führung.",
    caption: "Entwicklung entsteht, wenn Menschen, Rollen und Schnittstellen gemeinsam betrachtet werden.",
    ctaLabel: "Team- oder Niederlassungsentwicklung besprechen",
  },
  {
    id: "schnittstellen",
    navLabel: "Schnittstellen",
    title: "Zusammenarbeit Innen- und Außendienst",
    imageSrc: "/images/grossmann/practice-internal-external-dialogue.jpeg",
    imageAlt: "Dialogszene aus einem Workshop zur Zusammenarbeit zwischen Innen- und Außendienst",
    subtitle: "Wenn Service, Projekt und Vertrieb dieselbe Sprache brauchen",
    audience: "Service, Innendienst, Projekt, Vertrieb",
    format: "Workshop",
    focus: "Schnittstellen, Rollen, Klarheit",
    intro:
      "In technischen Unternehmen entstehen viele Reibungsverluste nicht beim Kunden, sondern intern.",
    situation: "Zwischen Service, Innendienst, Vertrieb, Projektleitung und Führung entstehen Brüche, die der Kunde oft unmittelbar spürt.",
    challenge:
      "Unklare Übergaben, unterschiedliche Prioritäten und unausgesprochene Erwartungen führen zu Konflikten.",
    approach:
      "Workshops machen Schnittstellen sichtbar und klären Rollen, Erwartungen, Gesprächswege und Verantwortlichkeiten.",
    impact:
      "Weniger Reibung nach innen führt zu besserer Wirkung nach außen.",
    caption: "Kundenwirkung entsteht auch an internen Schnittstellen.",
    ctaLabel: "Schnittstellen im Unternehmen besprechen",
  },
]

const caseOverview = [
  {
    label: "5 Praxisbeispiele",
    value: "Vom Kundendienst bis zur Führung im technischen Umfeld.",
  },
  {
    label: "Typische Hebel",
    value: "Kundenkontakt, Verhandlung, Führung, Transfer und Zusammenarbeit.",
  },
  {
    label: "Formatlogik",
    value: "Seminar, Entwicklungsprogramm, Workshop und Transferbausteine.",
  },
]

const proofQuote = {
  eyebrow: "Stimme aus der Praxis",
  quote:
    "Nach diesem Pilotseminar haben wir sofort vier weitere Trainings beauftragt. Das Feedback der Techniker und des Serviceteams war herausragend.",
  author: "Stefan Zöller",
  role: "Head of NL Stuttgart Service & FM, R.O.M. Technik",
}

export const metadata: Metadata = {
  title: "Praxisbeispiele | Grossmann Training",
  description:
    "Praxisbeispiele von Grossmann Training: technische Kundenkommunikation, Führung, Teamentwicklung und Zusammenarbeit in realen technischen Umfeldern.",
}

export default function PraxisbeispielePage() {
  return (
    <SiteShell>
      <main className="pt-28 sm:pt-32">
        <PageHero
          eyebrow="Praxisbeispiele"
          title="Beweis vor Erklärung"
          body="Die Praxisbeispiele zeigen keine Werbeslogans, sondern nachvollziehbare Entwicklungsgeschichten: Ausgangslage, Herausforderung, Vorgehen und Wirkung."
        />

        <section className="border-b border-border/70 bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div>
                <SectionEyebrow>Schnelle Orientierung</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-[2.7rem]">
                  Welche Art von Situation Sie hier wiederfinden
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {cases.map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className="inline-flex items-center rounded-full border border-border/70 bg-[#fcfbf8] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/35 hover:text-primary"
                    >
                      {item.navLabel}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {caseOverview.map((item) => (
                  <div key={item.label} className="rounded-[22px] border border-border/70 bg-[#fcfbf8] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">{item.label}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            {cases.map((item, index) => (
              <div key={item.id} className="space-y-8">
                <section
                  id={item.id}
                  className="overflow-hidden rounded-[30px] border border-border/70 bg-white shadow-[0_18px_55px_rgba(16,33,43,0.05)]"
                >
                  <div className={`grid ${index === 0 ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"}`}>
                    <div className={`relative min-h-[320px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className={`p-8 sm:p-10 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">{item.title}</p>
                        <span className="inline-flex rounded-full border border-border/70 bg-[#fcfbf8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/76">
                          Fall {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium leading-snug tracking-[-0.03em] text-foreground sm:text-4xl">
                        {item.subtitle}
                      </h2>
                      <p className="mt-5 text-[15px] leading-8 text-muted-foreground">{item.intro}</p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <div className="rounded-full border border-border/70 bg-[#fcfbf8] px-4 py-2 text-sm text-foreground">
                          <span className="font-semibold text-primary/80">Zielgruppe:</span> {item.audience}
                        </div>
                        <div className="rounded-full border border-border/70 bg-[#fcfbf8] px-4 py-2 text-sm text-foreground">
                          <span className="font-semibold text-primary/80">Format:</span> {item.format}
                        </div>
                        <div className="rounded-full border border-border/70 bg-[#fcfbf8] px-4 py-2 text-sm text-foreground">
                          <span className="font-semibold text-primary/80">Schwerpunkt:</span> {item.focus}
                        </div>
                      </div>

                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                        <div className="rounded-[22px] border border-border/70 bg-[#faf8f3] p-5">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Ausgangssituation</p>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.situation}</p>
                        </div>
                        <div className="rounded-[22px] border border-border/70 bg-[#faf8f3] p-5">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Herausforderung</p>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.challenge}</p>
                        </div>
                        <div className="rounded-[22px] border border-border/70 bg-[#faf8f3] p-5">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Vorgehen</p>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.approach}</p>
                        </div>
                        <div className="rounded-[22px] border border-border/70 bg-[#f4efe2] p-5">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-primary/72">Wirkung</p>
                          <p className="mt-3 text-sm leading-7 text-foreground/78">{item.impact}</p>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link href="/kontakt" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
                          {item.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href="/zielgruppen" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                          Passende Zielgruppe ansehen
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border/70 bg-[#fcfbf8] px-6 py-4 text-sm text-muted-foreground">{item.caption}</div>
                </section>

                {index === 1 ? (
                  <section className="rounded-[30px] border border-border/70 bg-[#102f42] px-7 py-8 text-white shadow-[0_20px_60px_rgba(16,33,43,0.12)] sm:px-10">
                    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                      <div>
                        <SectionEyebrow>{proofQuote.eyebrow}</SectionEyebrow>
                        <h3 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] text-white sm:text-[2.4rem]">
                          Pilottraining, Folgeaufträge und spürbare Resonanz
                        </h3>
                      </div>
                      <div>
                        <blockquote className="font-display text-[1.55rem] font-light italic leading-[1.7] text-white/88 sm:text-[1.85rem]">
                          "{proofQuote.quote}"
                        </blockquote>
                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{proofQuote.author}</p>
                        <p className="mt-2 text-sm leading-7 text-white/72">{proofQuote.role}</p>
                      </div>
                    </div>
                  </section>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <PageCtaPanel
          eyebrow="Nächster Schritt"
          title="Wenn Sie eine ähnliche Ausgangslage sehen, lässt sich der passende Hebel meist schnell eingrenzen."
          primaryHref="/kontakt"
          primaryLabel="Vergleichbare Situation besprechen"
          secondaryHref="/themen-formate"
          secondaryLabel="Themen & Formate ansehen"
        />
      </main>
    </SiteShell>
  )
}
