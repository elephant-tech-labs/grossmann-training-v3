import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const faqOverview = [
  {
    label: "Typische Einwände",
    value: "Es geht nicht um Verkaufstricks, sondern um Wirkung, Klarheit und professionellen Kundenkontakt.",
  },
  {
    label: "Praxisbezug",
    value: "Die Fragen drehen sich um reale Situationen, nicht um theoretische Modelle.",
  },
  {
    label: "Nächster Schritt",
    value: "Wenn nach der Antwort noch Klärung fehlt, helfen Praxisbeispiele oder ein kurzes Erstgespräch.",
  },
]

const faqGroups = [
  {
    id: "einwaende",
    title: "Einwände vor einer Entscheidung",
    body: "Diese Fragen tauchen oft früh auf, wenn Verantwortliche prüfen, ob das Thema wirklich passt oder ob falsche Erwartungen damit verbunden sind.",
    items: [
      {
        question: "Warum ein Training für Kundenkontakt, wenn unsere Techniker fachlich sehr gut sind?",
        shortAnswer: "Weil technische Qualität allein nicht automatisch als professionelle Wirkung beim Kunden ankommt.",
        answer:
          "Technische Kompetenz ist die Grundlage. Sie entscheidet aber nicht allein darüber, wie verständlich, souverän und vertrauenswürdig ein Auftritt beim Kunden erlebt wird. Das Training ergänzt Fachkompetenz um Verständlichkeit, Gesprächsführung, professionelle Wirkung und einen sicheren Umgang mit schwierigen Situationen.",
        links: [
          { href: "/praxisbeispiele#service", label: "Praxisbeispiel Service ansehen" },
        ],
      },
      {
        question: "Wir wollen keine Verkäufer aus unseren Technikern machen. Passt das trotzdem?",
        shortAnswer: "Ja. Es geht nicht um klassische Verkaufstechniken, sondern um kundenorientierte und professionelle Kommunikation.",
        answer:
          "Der Schwerpunkt liegt auf Klarheit, positiver Argumentation, professionellem Auftreten und sicherem Umgang mit Reklamationen, Spannungen und Nutzenkommunikation. Techniker sollen technische Spezialisten bleiben und gleichzeitig im Kundenkontakt wirksamer werden.",
        links: [
          { href: "/zielgruppen#servicetechniker", label: "Zielgruppe Servicetechniker ansehen" },
          { href: "/themen-formate", label: "Formate ansehen" },
        ],
      },
      {
        question: "Ist das ein Kommunikationstraining oder eher theoretische Psychologie?",
        shortAnswer: "Praxis steht im Mittelpunkt, nicht Theorie um der Theorie willen.",
        answer:
          "Gearbeitet wird mit echten Kundensituationen, Übungen, Simulationen und konkreten Werkzeugen für den nächsten Arbeitstag. Methodische Grundlagen fließen ein, bleiben aber verständlich, dosiert und alltagsnah.",
        links: [
          { href: "/praxisbeispiele", label: "Praxisbeispiele ansehen" },
        ],
      },
    ],
  },
  {
    id: "praxis-und-teilnehmer",
    title: "Praxis, Teilnehmer und Alltagstauglichkeit",
    body: "Hier geht es um die Frage, ob die Arbeit wirklich zu erfahrenen Teams, realen Situationen und einem technischen Umfeld passt.",
    items: [
      {
        question: "Funktioniert das auch bei erfahrenen Servicetechnikern?",
        shortAnswer: "Gerade dort oft besonders gut, weil es häufig nicht um mehr Wissen, sondern um feinere Wirkung geht.",
        answer:
          "Viele erfahrene Techniker verfügen bereits über enormes Fachwissen. Häufig geht es nicht um zusätzliches Wissen, sondern um Feinsteuerung, schwierige Gespräche, Kundenbindung, Souveränität und Vorbildrolle im Umgang mit Kunden und Kollegen.",
        links: [
          { href: "/servicetechniker", label: "Servicetechniker-Seite ansehen" },
        ],
      },
      {
        question: "Wie praxisnah sind die Trainings?",
        shortAnswer: "Sehr praxisnah, weil reale Situationen der Teilnehmenden den Ausgangspunkt bilden.",
        answer:
          "Gearbeitet wird mit Kundenfällen, Reklamationen, Übergaben, Konfliktsituationen und Abstimmungen zwischen Service, Projektleitung und Kunde. Das Ziel ist nicht ein gutes Seminarerlebnis, sondern bessere Wirkung im Alltag danach.",
        links: [
          { href: "/referenzen-stimmen", label: "Stimmen aus der Praxis ansehen" },
          { href: "/praxisbeispiele", label: "Konkrete Beispiele ansehen" },
        ],
      },
      {
        question: "Wie groß sind die Gruppen?",
        shortAnswer: "Bevorzugt werden überschaubare Gruppen, damit echte Situationen bearbeitet werden können.",
        answer:
          "Gerade bei sensiblen Kunden- und Führungsthemen ist Beteiligung, Reflexion und individuelle Rückmeldung ein Qualitätsfaktor. Deshalb wird in Formaten gearbeitet, die Raum für echte Fälle und sichtbare Entwicklung lassen.",
        links: [
          { href: "/themen-formate", label: "Formatlogik ansehen" },
        ],
      },
    ],
  },
  {
    id: "formate-und-umfang",
    title: "Formate, Umfang und nächste Schritte",
    body: "Diese Fragen helfen, wenn das Thema grundsätzlich passt und nun geklärt werden soll, in welcher Form die Zusammenarbeit sinnvoll wäre.",
    items: [
      {
        question: "Gibt es auch Follow-ups, Coaching oder längere Entwicklungsformate?",
        shortAnswer: "Ja. Je nach Ausgangslage kann die Zusammenarbeit deutlich über ein Basisseminar hinausgehen.",
        answer:
          "Möglich sind Follow-ups, persönliches Coaching, Teamtage, Niederlassungsworkshops oder mehrstufige Entwicklungsprogramme. Entscheidend ist nicht das größte Format, sondern das passende Format für Zielgruppe, Alltag und gewünschte Nachhaltigkeit.",
        links: [
          { href: "/themen-formate", label: "Themen & Formate ansehen" },
          { href: "/zielgruppen", label: "Zielgruppen ansehen" },
        ],
      },
    ],
  },
]

export const metadata: Metadata = {
  title: "FAQ | Grossmann Training",
  description:
    "Typische Fragen aus der Praxis von Serviceleitern, Niederlassungsleitern und technischen Führungskräften zu Trainings, Formaten und Wirkung.",
}

export default function FaqPage() {
  return (
    <SiteShell>
      <main className="pt-28 sm:pt-32">
        <PageHero
          eyebrow="FAQ"
          title="Typische Fragen aus der Praxis"
          body="Die häufigsten Fragen kommen nicht aus Neugier, sondern aus realen Einwänden, Unsicherheiten und Abwägungen vor einer Entscheidung. Genau dafür ist dieser Bereich da."
        />

        <section className="border-b border-border/70 bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
              <div>
                <SectionEyebrow>Schnelle Orientierung</SectionEyebrow>
                <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-[2.7rem]">
                  Worum es in den häufigsten Fragen eigentlich geht
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {faqGroups.map((group) => (
                    <Link
                      key={group.id}
                      href={`#${group.id}`}
                      className="inline-flex items-center rounded-full border border-border/70 bg-[#fcfbf8] px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/35 hover:text-primary"
                    >
                      {group.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {faqOverview.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-border/70 bg-[#fcfbf8] p-6 shadow-[0_10px_30px_rgba(16,33,43,0.03)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">{item.label}</p>
                    <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
            {faqGroups.map((group, groupIndex) => (
              <section
                key={group.id}
                id={group.id}
                className={`rounded-[30px] border border-border/70 p-6 shadow-[0_12px_35px_rgba(16,33,43,0.04)] sm:p-8 ${groupIndex === 0 ? "bg-[#fcfbf8]" : "bg-white"}`}
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                  <div>
                    <SectionEyebrow>{group.title}</SectionEyebrow>
                    <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted-foreground">{group.body}</p>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((item, itemIndex) => (
                      <details
                        key={item.question}
                        open={groupIndex === 0 && itemIndex === 0}
                        className="group rounded-[26px] border border-border/70 bg-white p-6 open:bg-[#fffdfa] sm:p-7"
                      >
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">
                              Kurzantwort
                            </p>
                            <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-foreground sm:text-[1.85rem]">
                              {item.question}
                            </h3>
                            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-muted-foreground">
                              {item.shortAnswer}
                            </p>
                          </div>
                          <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 text-lg text-primary transition-transform group-open:rotate-45">
                            +
                          </span>
                        </summary>

                        <div className="mt-5 border-t border-border/60 pt-5">
                          <p className="max-w-3xl text-[15px] leading-8 text-muted-foreground">{item.answer}</p>
                          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            {item.links.map((link) => (
                              <Link
                                key={link.href + link.label}
                                href={link.href}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                              >
                                {link.label}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <PageCtaPanel
          eyebrow="Nächster Schritt"
          title="Wenn Ihre Frage hier nicht beantwortet wurde, ist ein kurzes Erstgespräch der beste Weg."
          primaryHref="/kontakt"
          primaryLabel="Erstgespräch anfragen"
          secondaryHref="/praxisbeispiele"
          secondaryLabel="Praxisbeispiele ansehen"
        />
      </main>
    </SiteShell>
  )
}
