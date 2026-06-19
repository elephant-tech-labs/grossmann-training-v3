import type { Metadata } from "next"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SiteShell from "@/components/site-shell"

const faqs = [
  {
    question: "Warum ein Training für Kundenkontakt, wenn unsere Techniker fachlich sehr gut sind?",
    answer:
      "Technische Kompetenz ist die Grundlage - sie entscheidet aber nicht allein über die Wirkung beim Kunden. Das Training ergänzt Fachkompetenz um Verständlichkeit, Gesprächsführung, professionelle Wirkung und souveränen Umgang mit schwierigen Situationen.",
  },
  {
    question: "Wir wollen keine Verkäufer aus unseren Technikern machen. Passt das trotzdem?",
    answer:
      "Ja. Es geht nicht um Verkaufstechniken im klassischen Sinn, sondern um Kundenorientierung, positive Argumentation, professionelles Auftreten und einen sicheren Umgang mit Reklamationen, Spannungen und Nutzenkommunikation.",
  },
  {
    question: "Ist das ein Kommunikationstraining oder eher theoretische Psychologie?",
    answer:
      "Praxis steht im Mittelpunkt. Gearbeitet wird mit echten Kundensituationen, Übungen, Simulationen und konkreten Werkzeugen für den nächsten Arbeitstag. Methodische Grundlagen fließen ein, bleiben aber immer verständlich und alltagsnah.",
  },
  {
    question: "Funktioniert das auch bei erfahrenen Servicetechnikern?",
    answer:
      "Gerade dort oft besonders gut. Viele erfahrene Techniker verfügen bereits über enormes Wissen. Häufig geht es nicht um mehr Wissen, sondern um Wirkung, Feinsteuerung, schwierige Gespräche, Kundenbindung und Vorbildrolle.",
  },
  {
    question: "Wie praxisnah sind die Trainings?",
    answer:
      "Sehr praxisnah. Ausgangspunkt sind reale Situationen der Teilnehmenden: Kundenfälle, Reklamationen, Übergaben, Konfliktsituationen und Abstimmungen zwischen Service, Projektleitung und Kunde.",
  },
  {
    question: "Wie groß sind die Gruppen?",
    answer:
      "Bevorzugt wird mit überschaubaren Gruppen gearbeitet, damit Raum für echte Situationen, Beteiligung, Reflexion und individuelle Rückmeldung bleibt. Gerade bei sensiblen Kunden- und Führungsthemen ist das ein wichtiger Qualitätsfaktor.",
  },
  {
    question: "Gibt es auch Follow-ups, Coaching oder längere Entwicklungsformate?",
    answer:
      "Ja. Je nach Situation kann die Zusammenarbeit über ein Basisseminar hinausgehen: mit Follow-ups, persönlichem Coaching, Teamtagen, Niederlassungsworkshops oder mehrstufigen Entwicklungsprogrammen.",
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

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="group rounded-[28px] border border-border/70 bg-[#fcfbf8] p-6 open:bg-white sm:p-7">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-2xl font-medium leading-snug text-foreground sm:text-[1.85rem]">
                    <span>{item.question}</span>
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 text-lg text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-3xl text-[15px] leading-8 text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCtaPanel
          eyebrow="Nächster Schritt"
          title="Wenn Ihre Frage hier nicht beantwortet wurde, ist ein kurzes Erstgespräch der beste Weg."
          primaryHref="/kontakt"
          primaryLabel="Erstgespräch anfragen"
          secondaryHref="/zielgruppen"
          secondaryLabel="Zielgruppen ansehen"
        />
      </main>
    </SiteShell>
  )
}
