import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MessageSquareText, ShieldCheck, Users, Wrench } from "lucide-react"

const situations = [
  "Technische Inhalte müssen verständlich erklärt werden, obwohl Zeit und Aufmerksamkeit knapp sind.",
  "Servicetechniker geraten in Beschwerden, Einwände oder Spannungen, obwohl fachlich alles stimmt.",
  "Kundenkontakt ist häufig entscheidend für Folgeaufträge, Vertrauen und das Gesamtbild des Unternehmens.",
]

const focusAreas = [
  {
    title: "Klar erklären",
    body: "Komplexe technische Inhalte verständlich, ruhig und professionell vermitteln.",
    icon: MessageSquareText,
  },
  {
    title: "Souverän reagieren",
    body: "Mit Einwänden, Verärgerung und Zeitdruck sicher und deeskalierend umgehen.",
    icon: ShieldCheck,
  },
  {
    title: "Wirkung im Kundenkontakt",
    body: "Als Servicetechniker kompetent, zugewandt und markenstärkend auftreten.",
    icon: Wrench,
  },
]

const participantBenefits = [
  "Mehr Sicherheit in schwierigen Kundengesprächen",
  "Klarere Erklärungen ohne unnötige Reibung",
  "Mehr Souveränität bei Beschwerden und Einwänden",
  "Direkt übertragbare Kommunikationstechniken für den Alltag",
]

const businessBenefits = [
  "Stärkere Kundenbindung durch professionellen Servicekontakt",
  "Weniger Eskalationen und weniger unnötiger Reibungsverlust",
  "Einheitlicherer Außenauftritt im technischen Service",
  "Höhere Wirkung dort, wo Kunden das Unternehmen direkt erleben",
]

const formats = [
  {
    label: "Inhouse-Training",
    body: "1 bis 2 Tage, praxisnah auf typische Kundensituationen Ihres technischen Alltags zugeschnitten.",
  },
  {
    label: "Praxis mit Feedback",
    body: "Realistische Situationen, direkte Rückmeldung, auf Wunsch mit Video-Feedback oder Transferimpulsen.",
  },
  {
    label: "Transfer in den Alltag",
    body: "Nachhaltige Anwendung durch klare Kommunikationsmuster, Reflexion und weiterführende Impulse.",
  },
]

const faqs = [
  {
    question: "Ist das eher Soft-Skill-Training oder wirklich technisch anschlussfähig?",
    answer:
      "Das Training ist auf technische Zielgruppen zugeschnitten. Es geht nicht um allgemeine Floskeln, sondern um Kommunikation in realen Service- und Kundensituationen.",
  },
  {
    question: "Passt das auch für erfahrene Servicetechniker?",
    answer:
      "Ja. Gerade erfahrene Fachkräfte profitieren davon, wenn sie ihre Wirkung im Kundenkontakt bewusster steuern und schwierige Situationen klarer lösen können.",
  },
  {
    question: "Wie praxisnah ist das Format?",
    answer:
      "Sehr praxisnah. Ausgangspunkt sind typische Situationen aus dem Alltag der Teilnehmenden, nicht theoretische Beispiele ohne Bezug.",
  },
  {
    question: "Ist das nur für FM/TGA geeignet?",
    answer:
      "FM/TGA ist ein wichtiger Schwerpunkt, aber das Format passt auch für technische Serviceorganisationen in angrenzenden industriellen oder projektbezogenen Umfeldern.",
  },
]

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">{children}</p>
}

export default function ServiceTechPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="overflow-hidden bg-[#faf8f3] pt-32" aria-labelledby="servicetechniker-hero-heading">
        <div className="mx-auto max-w-7xl px-4 pb-18 sm:px-6 lg:px-8 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Für Servicetechniker</Eyebrow>
              <h1
                id="servicetechniker-hero-heading"
                className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.6rem)] font-light leading-[0.95] tracking-[-0.04em]"
              >
                Wenn fachliche Stärke im Kundenkontakt
                <span className="block italic text-primary">klar und souverän</span>
                wirken soll.
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Servicetechniker prägen oft den entscheidenden Moment beim Kunden. Dieses Training stärkt Erklären,
                Auftreten, Deeskalation und kommunikative Sicherheit in genau diesen Situationen.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Erstgespräch anfragen
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3.5 text-sm font-medium text-foreground/78 transition-all hover:border-foreground/20 hover:text-foreground"
                >
                  Praxisbeispiele ansehen
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[30px] border border-border/70 bg-white shadow-[0_25px_80px_rgba(16,33,43,0.08)]">
              <div className="relative aspect-[4/3] min-h-[260px] sm:aspect-[16/10]">
                <Image
                  src="/images/photo-placeholder.svg"
                  alt="Servicetechniker im Training mit Bernd Grossmann"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
            <div className="rounded-[30px] border border-border/70 bg-white p-7 sm:p-8">
              <Eyebrow>Typische Situationen</Eyebrow>
              <div className="mt-6 space-y-5">
                {situations.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-[15px] leading-8 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[22px] border border-border/70 bg-[#faf8f3] px-5 py-4">
                <p className="text-sm italic leading-7 text-foreground/82">
                  „Der Vertrieb verkauft die erste Maschine. Der Service verkauft die zweite.“
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-white py-20 sm:py-28" aria-labelledby="problem-tech-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Worum es wirklich geht</Eyebrow>
              <h2 id="problem-tech-heading" className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Im technischen Service ist Kommunikation kein Zusatz.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Kunden erleben Kompetenz nicht nur über fachlich richtige Lösungen. Sie erleben sie auch über Klarheit,
                Haltung, Gesprächsführung und den Umgang mit schwierigen Situationen.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {focusAreas.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[28px] border border-border/70 bg-[#fcfbf8] p-6 sm:p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-medium leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3efe6] py-20 sm:py-28" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Eyebrow>Nutzen und Wirkung</Eyebrow>
              <h2 id="benefits-heading" className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Was sich für Teilnehmende und Unternehmen verändern soll.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-border/70 bg-white p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Für Teilnehmende</p>
                <ul className="mt-6 space-y-4">
                  {participantBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-8 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4.5 w-4.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] border border-border/70 bg-white p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Für Unternehmen</p>
                <ul className="mt-6 space-y-4">
                  {businessBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-8 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4.5 w-4.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="formats-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Geeignete Formate</Eyebrow>
              <h2 id="formats-heading" className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                So kann die Zusammenarbeit aussehen.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Inhouse-Trainings, kompakte Impulse oder Transfer-Bausteine lassen sich an Zielgruppe, Kontext und
                gewünschte Tiefe anpassen.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {formats.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-border/70 bg-[#fcfbf8] p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">{item.label}</p>
                <p className="mt-6 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf6] py-20 sm:py-28" aria-labelledby="proof-tech-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Praxis und Vertrauen</Eyebrow>
              <h2 id="proof-tech-heading" className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Ein Beispiel aus dem Serviceumfeld.
              </h2>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[30px] border border-border/70 bg-white shadow-[0_25px_75px_rgba(16,33,43,0.08)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src="/images/photo-placeholder.svg"
                  alt="Servicetechniker im Trainingskontext"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/74">
                  Kundenstimme aus dem Servicekontext
                </p>
                <blockquote className="mt-5 font-display text-[clamp(1.2rem,2vw,1.7rem)] font-light italic leading-[1.7] text-foreground/80">
                  „Ich bin sprachlos. Nach diesem Pilotseminar haben wir sofort vier weitere Trainings beauftragt. Das
                  Feedback der Techniker und des Serviceteams war herausragend.“
                </blockquote>
                <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                  Stefan Zöller · Leitung NL Stuttgart Service & FM · R.O.M. Technik GmbH & Co. KG
                </p>

                <div className="mt-8 rounded-[24px] border border-dashed border-border/90 bg-[#faf8f3] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/74">
                    [WEITERE_TESTIMONIALS_ODER_SERVICE_CASE]
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground/88">
                    Platz für zusätzliche Kundenstimme, Auszug aus Service-Fallbeispiel oder kurze dokumentierte
                    Wirkung aus dem technischen Alltag.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#10212B] transition-colors hover:bg-[#d89c17]"
                  >
                    Praxisbeispiele ansehen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground/78 transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    Über Format sprechen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="faq-tech-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Häufige Fragen</Eyebrow>
              <h2 id="faq-tech-heading" className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Was oft vor einem ersten Gespräch geklärt werden möchte.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-5">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-[26px] border border-border/70 bg-[#fcfbf8] p-6 sm:p-8">
                <h3 className="font-display text-2xl font-medium leading-snug text-foreground">{item.question}</h3>
                <p className="mt-4 max-w-4xl text-[15px] leading-8 text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102f42] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] px-8 py-10 sm:px-10 sm:py-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">Nächster Schritt</p>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Wenn Sie Servicetechniker im Kundenkontakt gezielt stärken möchten.
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/72">
                  In einem ersten Gespräch klären wir Zielgruppe, typische Situationen und welches Format zu Ihrem
                  technischen Alltag passt.
                </p>
              </div>

              <div className="grid gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-between rounded-[26px] border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                      <Users className="h-4 w-4" />
                    </span>
                    Erstgespräch anfragen
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/56" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-between rounded-[26px] border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    Weitere Praxisbeispiele ansehen
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/56" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
