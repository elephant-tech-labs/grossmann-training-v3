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
    navLabel: "Service",
    title: "Servicetechniker & Monteure",
    body: "Servicetechniker und Monteure sind häufig die Menschen mit dem intensivsten Kundenkontakt. Sie erklären Technik, lösen Probleme, repräsentieren das Unternehmen und beeinflussen Kundenbindung, Zusatzaufträge und Empfehlungen.",
    situation: "Wenn Technik sauber gelöst wird, die Wirkung im Gespräch aber trotzdem unsicher bleibt.",
    proximity: "Direkter Kundenkontakt",
    formats: "Praxisnahes Seminar, Transfer im Alltag",
    bullets: [
      "Kundenorientierte Kommunikation",
      "Technik verständlich erklären",
      "Nutzenargumentation und positive Gesprächsführung",
      "Reklamationen und schwierige Situationen sicher meistern",
    ],
    icon: Wrench,
    href: "/servicetechniker",
    secondaryHref: "/praxisbeispiele#service",
    secondaryLabel: "Praxisbeispiel Service ansehen",
  },
  {
    id: "projekt-objekt",
    navLabel: "Projekt",
    title: "Objektleiter, Auftragsleiter & Projektleiter",
    body: "Diese Rollen verbinden Technik, Kunde, Termine, Wirtschaftlichkeit und Menschen. Sie koordinieren zwischen Auftraggeber, Team und internen Bereichen.",
    situation: "Wenn Gespräche mit Kunden, Partnern und internen Stellen wirksamer geführt werden müssen.",
    proximity: "Kunden- und projektnahe Schnittstelle",
    formats: "Seminar, Workshop, Entwicklungsprogramm",
    bullets: [
      "Verhandlungsführung und Gesprächsmoderation",
      "Projektgespräche und Kundenkommunikation",
      "Schnittstellenmanagement",
      "Besprechungen wirksam gestalten",
    ],
    icon: MessageSquareText,
    href: "/themen-formate",
    primaryLabel: "Passendes Format ansehen",
    secondaryHref: "/praxisbeispiele#siemens",
    secondaryLabel: "Projektbeispiel ansehen",
  },
  {
    id: "technische-fuehrung",
    navLabel: "Führung",
    title: "Bauleiter & technische Führungskräfte",
    body: "Führung im technischen Umfeld bedeutet oft Führung unter Druck. Es geht um Klarheit, Verbindlichkeit, Gefolgschaft und Zusammenarbeit.",
    situation: "Wenn Führung fachlich vorhanden ist, aber Präsenz, Klarheit oder Gefolgschaft an Grenzen stoßen.",
    proximity: "Führung mit hoher Alltagsdichte",
    formats: "Seminar, Coaching, Transferbausteine",
    bullets: [
      "Mitarbeiterführung und Gefolgschaft",
      "Führung unter Druck",
      "Präsenz und Klarheit",
      "Konflikte konstruktiv bearbeiten",
    ],
    icon: BriefcaseBusiness,
    href: "/praxisbeispiele#fuehrung",
    primaryLabel: "Praxisbeispiel Führung ansehen",
    secondaryHref: "/themen-formate",
    secondaryLabel: "Formate für Führung ansehen",
  },
  {
    id: "teams-niederlassungen",
    navLabel: "Teams",
    title: "Teams & Niederlassungen",
    body: "Wenn Service, Innendienst, Außendienst, Projektleitung und Führung gemeinsam wirksamer werden sollen, braucht es mehr als Einzeltraining.",
    situation: "Wenn einzelne Personen gut arbeiten, die Gesamtwirkung über Rollen und Schnittstellen aber nicht stabil ist.",
    proximity: "Rollenübergreifende Zusammenarbeit",
    formats: "Workshop, Teamtag, mehrstufige Entwicklung",
    bullets: [
      "Gemeinsame Sprache und Haltung",
      "Bessere Zusammenarbeit nach innen",
      "Stärkere Wirkung nach außen",
      "Entwicklung über Rollen und Schnittstellen hinweg",
    ],
    icon: Users,
    href: "/praxisbeispiele#teams",
    primaryLabel: "Entwicklungsbeispiel ansehen",
    secondaryHref: "/themen-formate",
    secondaryLabel: "Teamformate ansehen",
  },
  {
    id: "unternehmen",
    navLabel: "Inhouse",
    title: "Unternehmen & größere Inhouse-Vorhaben",
    body: "Für technische Organisationen, die Entwicklung nicht punktuell, sondern systematisch denken wollen - vom Seminar bis zum mehrstufigen Programm.",
    situation: "Wenn nicht nur einzelne Trainings, sondern eine saubere Entwicklungslogik für mehrere Zielgruppen gebraucht wird.",
    proximity: "Organisation und Entwicklungsverantwortung",
    formats: "Inhouse-Reihe, Entwicklungsprogramm, kombinierte Maßnahmen",
    bullets: [
      "Inhouse-Trainings",
      "Follow-ups und Transfer",
      "Parallele Maßnahmen bei Bedarf",
      "Passende Formate für unterschiedliche Zielgruppen",
    ],
    icon: Building2,
    href: "/themen-formate",
    primaryLabel: "Formatlogik ansehen",
    secondaryHref: "/kontakt",
    secondaryLabel: "Inhouse-Vorhaben besprechen",
  },
  {
    id: "hotline",
    navLabel: "Hotline",
    title: "Technische Hotline & telefonischer Kundenkontakt",
    body: "Innendienst und Support stehen oft zwischen Kunde, Technik, Service und Vertrieb. Gerade hier entscheidet Gesprächsführung über Klarheit und Entlastung.",
    situation: "Wenn Druck, Reklamationen und Erklärungsbedarf im Telefonkontakt gleichzeitig zusammenkommen.",
    proximity: "Telefonischer Kundenkontakt",
    formats: "Kompaktes Seminar, Praxisübungen, Transfer",
    bullets: [
      "Gesprächsführung unter Druck",
      "Reklamationsbearbeitung",
      "Technik verständlich erklären",
      "Telefonische Kundenführung und Deeskalation",
    ],
    icon: Headset,
    href: "/themen-formate",
    primaryLabel: "Formate für Hotline-Teams ansehen",
    secondaryHref: "/kontakt",
    secondaryLabel: "Hotline-Situation besprechen",
  },
]

const overviewCards = [
  {
    label: "6 typische Rollenbilder",
    value: "Vom Serviceeinsatz bis zur Führungs- und Inhouse-Entwicklung.",
  },
  {
    label: "Entscheidend ist der Hebel",
    value: "Nicht jede Zielgruppe braucht denselben Schwerpunkt, obwohl der Kontext technisch ähnlich ist.",
  },
  {
    label: "Nächster Denkschritt",
    value: "Erst Rolle erkennen, dann Format und Praxisbeispiele passend einordnen.",
  },
]

const bridgeLinks = [
  {
    title: "Welche Form sinnvoll sein kann",
    body: "Wenn die Zielgruppe klar ist, lässt sich das passende Format deutlich schneller eingrenzen.",
    href: "/themen-formate",
    label: "Zu Themen & Formaten",
  },
  {
    title: "Wie das in der Praxis aussieht",
    body: "Konkrete Beispiele zeigen, wie ähnliche Situationen bereits bearbeitet wurden.",
    href: "/praxisbeispiele",
    label: "Zu Praxisbeispielen",
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

        <section className="border-b border-border/70 bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionEyebrow>Schnelle Orientierung</SectionEyebrow>
                <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-[2.85rem]">
                  Welche Rolle Ihrer Situation am ehesten entspricht
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-8 text-muted-foreground">
                  Die Themen wirken nach außen ähnlich, der richtige Ansatz hängt aber stark davon ab, in welcher Rolle
                  Menschen stehen und an welcher Stelle Wirkung verloren geht.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {groups.map((group) => (
                    <Link
                      key={group.id}
                      href={`#${group.id}`}
                      className="inline-flex items-center rounded-full border border-border/70 bg-[#fcfbf8] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/35 hover:text-primary"
                    >
                      {group.navLabel}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {overviewCards.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-border/70 bg-[#fcfbf8] p-6 shadow-[0_10px_30px_rgba(16,33,43,0.03)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">{item.label}</p>
                    <p className="mt-4 text-[15px] leading-7 text-muted-foreground [overflow-wrap:anywhere]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
            {groups.map((group, index) => {
              const Icon = group.icon
              return (
                <div key={group.id} className="space-y-6">
                  <section
                    id={group.id}
                    className="soft-card p-7 sm:p-9"
                  >
                    <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/66">
                            0{index + 1}
                          </p>
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                        </div>
                        <h2 className="mt-6 max-w-lg font-display text-3xl font-medium leading-snug text-foreground sm:text-4xl">
                          {group.title}
                        </h2>
                        <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted-foreground">{group.body}</p>

                        <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                          <div className="rounded-[20px] border border-border/70 bg-[#fcfbf8] px-4 py-5">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/72">Typische Lage</p>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground [overflow-wrap:anywhere]">{group.situation}</p>
                          </div>
                          <div className="rounded-[20px] border border-border/70 bg-[#fcfbf8] px-4 py-5">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/72">Nähe zum Kunden</p>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground [overflow-wrap:anywhere]">{group.proximity}</p>
                          </div>
                          <div className="rounded-[20px] border border-border/70 bg-[#fcfbf8] px-4 py-5 md:col-span-2 xl:col-span-1">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/72">Passende Formate</p>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground [overflow-wrap:anywhere]">{group.formats}</p>
                          </div>
                        </div>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                          {group.href ? (
                            <Link
                              href={group.href}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                            >
                              {group.primaryLabel ?? "Vertiefende Seite ansehen"}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          ) : null}
                          {group.secondaryHref ? (
                            <Link
                              href={group.secondaryHref}
                              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                            >
                              {group.secondaryLabel}
                            </Link>
                          ) : null}
                        </div>
                      </div>

                      <div className="white-card p-6 sm:p-7">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Schwerpunkte</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          Typische Arbeitsschwerpunkte, die in dieser Rolle im Alltag besonders wirksam werden.
                        </p>
                        <ul className="mt-5 space-y-0 text-[15px] leading-8 text-muted-foreground">
                          {group.bullets.map((item) => (
                            <li key={item} className="border-b border-border/60 py-3 first:pt-0 last:border-b-0 last:pb-0">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {index === 2 ? (
                    <section className="rounded-[30px] border border-border/70 bg-[#fcfbf8] px-6 py-8 shadow-[0_12px_35px_rgba(16,33,43,0.04)] sm:px-8">
                      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                        <div>
                          <SectionEyebrow>Brücke zum nächsten Schritt</SectionEyebrow>
                          <h3 className="mt-5 max-w-lg font-display text-3xl font-light leading-tight tracking-[-0.03em] text-foreground sm:text-[2.35rem]">
                            Wenn die Rolle klar ist, folgen meist Format oder Praxisbeispiel.
                          </h3>
                          <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted-foreground">
                            Manche Besucher wollen zuerst wissen, in welcher Form das sinnvoll ist. Andere möchten
                            zuerst sehen, wie vergleichbare Situationen praktisch bearbeitet wurden.
                          </p>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-2">
                          {bridgeLinks.map((item) => (
                            <div key={item.title} className="rounded-[22px] border border-border/70 bg-white p-5 sm:p-6">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">Nächster Blick</p>
                              <h3 className="mt-4 font-display text-2xl font-medium leading-snug tracking-[-0.03em] text-foreground">
                                {item.title}
                              </h3>
                              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                              <Link
                                href={item.href}
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                              >
                                {item.label}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  ) : null}
                </div>
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
