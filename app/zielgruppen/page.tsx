import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, Building2, Headset, MessageSquareText, Users, Wrench } from "lucide-react"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const groups = [
  {
    id: "servicetechniker",
    title: "Servicetechniker & Monteure",
    body: "Servicetechniker und Monteure sind häufig die Menschen mit dem intensivsten Kundenkontakt. Sie erklären Technik, lösen Probleme, repräsentieren das Unternehmen und beeinflussen Kundenbindung, Zusatzaufträge und Empfehlungen.",
    bullets: [
      "Kundenorientierte Kommunikation",
      "Technik verständlich erklären",
      "Nutzenargumentation und positive Gesprächsführung",
      "Reklamationen und schwierige Situationen sicher meistern",
    ],
    icon: Wrench,
    href: "/servicetechniker",
  },
  {
    id: "projekt-objekt",
    title: "Objektleiter, Auftragsleiter & Projektleiter",
    body: "Diese Rollen verbinden Technik, Kunde, Termine, Wirtschaftlichkeit und Menschen. Sie koordinieren zwischen Auftraggeber, Team und internen Bereichen.",
    bullets: [
      "Verhandlungsführung und Gesprächsmoderation",
      "Projektgespräche und Kundenkommunikation",
      "Schnittstellenmanagement",
      "Besprechungen wirksam gestalten",
    ],
    icon: MessageSquareText,
  },
  {
    id: "technische-fuehrung",
    title: "Bauleiter & technische Führungskräfte",
    body: "Führung im technischen Umfeld bedeutet oft Führung unter Druck. Es geht um Klarheit, Verbindlichkeit, Gefolgschaft und Zusammenarbeit.",
    bullets: [
      "Mitarbeiterführung und Gefolgschaft",
      "Führung unter Druck",
      "Präsenz und Klarheit",
      "Konflikte konstruktiv bearbeiten",
    ],
    icon: BriefcaseBusiness,
  },
  {
    id: "teams-niederlassungen",
    title: "Teams & Niederlassungen",
    body: "Wenn Service, Innendienst, Außendienst, Projektleitung und Führung gemeinsam wirksamer werden sollen, braucht es mehr als Einzeltraining.",
    bullets: [
      "Gemeinsame Sprache und Haltung",
      "Bessere Zusammenarbeit nach innen",
      "Stärkere Wirkung nach außen",
      "Entwicklung über Rollen und Schnittstellen hinweg",
    ],
    icon: Users,
  },
  {
    id: "unternehmen",
    title: "Unternehmen & größere Inhouse-Vorhaben",
    body: "Für technische Organisationen, die Entwicklung nicht punktuell, sondern systematisch denken wollen - vom Seminar bis zum mehrstufigen Programm.",
    bullets: [
      "Inhouse-Trainings",
      "Follow-ups und Transfer",
      "Parallele Maßnahmen bei Bedarf",
      "Passende Formate für unterschiedliche Zielgruppen",
    ],
    icon: Building2,
  },
  {
    id: "hotline",
    title: "Technische Hotline & telefonischer Kundenkontakt",
    body: "Innendienst und Support stehen oft zwischen Kunde, Technik, Service und Vertrieb. Gerade hier entscheidet Gesprächsführung über Klarheit und Entlastung.",
    bullets: [
      "Gesprächsführung unter Druck",
      "Reklamationsbearbeitung",
      "Technik verständlich erklären",
      "Telefonische Kundenführung und Deeskalation",
    ],
    icon: Headset,
  },
]

export const metadata: Metadata = {
  title: "Zielgruppen | Grossmann Training",
  description:
    "Zielgruppen von Grossmann Training: Servicetechniker, Projektleiter, technische Führungskräfte, Teams, Niederlassungen und Unternehmen im technischen Umfeld.",
}

export default function ZielgruppenPage() {
  return (
    <SiteShell>
      <main className="pt-28 sm:pt-32">
        <PageHero
          eyebrow="Zielgruppen"
          title="Für wen die Arbeit gedacht ist"
          body="Je nach Rolle, Verantwortung und Nähe zum Kunden braucht es einen anderen Schwerpunkt. Die Inhalte bleiben praxisnah, aber der Hebel ist nicht für jede Zielgruppe derselbe."
        />

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
            {groups.map((group, index) => {
              const Icon = group.icon
              return (
                <section
                  key={group.id}
                  id={group.id}
                  className="soft-card p-7 sm:p-9"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/66">
                        0{index + 1}
                      </p>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="mt-6 max-w-lg font-display text-3xl font-medium leading-snug text-foreground sm:text-4xl">
                        {group.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted-foreground">{group.body}</p>

                      {group.href ? (
                        <div className="mt-7">
                          <Link
                            href={group.href}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                          >
                            Vertiefende Seite ansehen
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      ) : null}
                    </div>

                    <div className="white-card p-6 sm:p-7">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Schwerpunkte</p>
                      <ul className="mt-6 space-y-3 text-[15px] leading-8 text-muted-foreground">
                        {group.bullets.map((item) => (
                          <li key={item} className="border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        </section>

        <PageCtaPanel
          eyebrow="Nächster Schritt"
          title="Wenn Sie eine vergleichbare Situation in Ihrer Organisation kennen, lohnt sich ein persönlicher Austausch."
          primaryHref="/kontakt"
          primaryLabel="Erstgespräch anfragen"
          secondaryHref="/themen-formate"
          secondaryLabel="Themen & Formate ansehen"
        />
      </main>
    </SiteShell>
  )
}
