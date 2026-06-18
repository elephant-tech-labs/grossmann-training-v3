import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, BriefcaseBusiness, CirclePlay, Mail, MessageSquareText, Phone, ShieldCheck, Wrench } from "lucide-react"

const audiences = [
  {
    title: "Für Servicetechniker",
    body: "Wenn technische Kompetenz im Kundenkontakt klar, souverän und vertrauensbildend wirken soll.",
    icon: Wrench,
    href: "/servicetechniker",
  },
  {
    title: "Für Führungskräfte im technischen Umfeld",
    body: "Wenn Führung, Feedback und Kommunikation unter hohem Druck wirksam werden müssen.",
    icon: BriefcaseBusiness,
    href: "/trainings",
  },
  {
    title: "Für Unternehmen / Inhouse",
    body: "Wenn Teams, Zusammenarbeit und Transfer im technischen Alltag gezielt entwickelt werden sollen.",
    icon: Building2,
    href: "/formats",
  },
]

const problems = [
  {
    number: "01",
    title: "Kundengespräche mit Wirkung",
    body: "Komplexe technische Inhalte müssen verständlich, professionell und sicher vermittelt werden.",
  },
  {
    number: "02",
    title: "Souveränität in schwierigen Situationen",
    body: "Gerade bei Einwänden, Spannungen oder Zeitdruck entscheidet Kommunikation über Vertrauen und Deeskalation.",
  },
  {
    number: "03",
    title: "Führung im Technikalltag",
    body: "Technische Führung braucht Präsenz, Klarheit und Gespür für Menschen, nicht nur Prozesse.",
  },
]

const focusAreas = [
  {
    title: "Kommunikation im technischen Service",
    body: "Für Servicetechniker und Teams mit direktem Kundenkontakt.",
  },
  {
    title: "Führung im technischen Umfeld",
    body: "Für Teamleitungen, Bereichsverantwortliche und Nachwuchsführungskräfte.",
  },
  {
    title: "Verhandlung, Wirkung und Präsenz",
    body: "Für Situationen, in denen Klarheit, Standing und professionelle Außenwirkung entscheidend sind.",
  },
]

const methodSteps = [
  {
    title: "Analyse",
    body: "Wir klären Ausgangssituation, Zielgruppe und typische Kommunikationssituationen.",
  },
  {
    title: "Training",
    body: "Praxisnahe Formate mit realistischen Situationen, direktem Feedback und hoher Relevanz für den Alltag.",
  },
  {
    title: "Transfer",
    body: "Damit Wirkung nicht im Seminarraum bleibt, sondern im Alltag sichtbar wird.",
  },
]

const clients = ["Siemens", "Bosch", "Continental", "AVL", "DMG MORI", "REHAU"]

const quotes = [
  {
    quote:
      "Ich bin sprachlos. Nach diesem Pilotseminar haben wir sofort vier weitere Trainings beauftragt. Das Feedback der Techniker und des Serviceteams war herausragend.",
    author: "Stefan Zöller",
    role: "Leitung NL Stuttgart Service & FM",
    company: "R.O.M. Technik GmbH & Co. KG",
  },
  {
    quote:
      "Großartiges Seminar. Die Inhalte waren spannend, praxisnah und schon in der nächsten Woche anwendbar. Klare Empfehlung.",
    author: "Magnus Jungel",
    role: "Servicetechniker weltweit",
    company: "Ekato AG",
  },
]

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">{children}</p>
}

export default function HomepageV3() {
  return (
    <main className="bg-background text-foreground">
      <section className="overflow-hidden bg-[#faf8f3] pt-32" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
          <div className="grid gap-10 border-b border-border/70 pb-14 lg:grid-cols-12 lg:gap-12 lg:pb-16">
            <div className="lg:col-span-8">
              <Eyebrow>Für FM/TGA, technischen Service und Führung im technischen Umfeld</Eyebrow>
              <h1
                id="hero-heading"
                className="mt-7 max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.04em] text-foreground"
              >
                Technik funktioniert.
                <span className="block pl-[clamp(0.5rem,4vw,4rem)] italic text-primary">Zusammenarbeit</span>
                <span className="block">entscheidet.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pt-10">
              <p className="max-w-sm text-[15px] leading-8 text-muted-foreground">
                Wenn Servicetechniker, Führungskräfte und technische Teams im Kundenkontakt souverän wirken sollen,
                braucht es mehr als Fachwissen. Grossmann Training stärkt Kommunikation, Wirkung und Zusammenarbeit im
                technischen Alltag.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Erstgespräch vereinbaren
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3.5 text-sm font-medium text-foreground/78 transition-all hover:border-foreground/20 hover:text-foreground"
                >
                  Praxisbeispiele ansehen
                </Link>
              </div>

              <div className="mt-10 border-t border-border/70 pt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/78">
                Seit 1994 · FM/TGA · Technischer Kundendienst · Technische Führung
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-border/70 bg-white shadow-[0_25px_80px_rgba(16,33,43,0.08)]">
            <div className="relative aspect-[4/3] min-h-[240px] sm:aspect-[21/9] sm:min-h-[280px]">
              <Image
                src="/images/photo-placeholder.svg"
                alt="Seminarsituation mit Bernd Grossmann und Teilnehmern in technischem Umfeld"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1.8fr] lg:items-end">
            <div>
              <Eyebrow>Erfahrung seit 1994 in technischen Umfeldern</Eyebrow>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                Ausgewählte Kunden, langjährige Praxiserfahrung und Trainingsarbeit in Service, Projektumfeld,
                Gebäudetechnik und technischer Führung.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex min-h-12 items-center justify-start rounded-2xl border border-border/70 bg-[#fcfbf8] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-foreground/62 sm:justify-center"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="zielgruppen-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Wobei können wir Sie unterstützen?</Eyebrow>
              <h2 id="zielgruppen-heading" className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Je nach Rolle braucht es einen anderen Hebel.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Deshalb ist das Angebot klar nach Zielgruppen aufgebaut. So wird schnell sichtbar, was in Ihrer
                Situation wirklich weiterhilft.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {audiences.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[28px] border border-border/70 bg-[#fcfbf8] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/18 hover:shadow-[0_18px_45px_rgba(16,33,43,0.08)] sm:p-8"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 max-w-xs font-display text-2xl font-medium leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#f3efe6] py-20 sm:py-28" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Die eigentliche Herausforderung</Eyebrow>
              <h2 id="problem-heading" className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Wo technische Kompetenz <span className="italic text-primary">allein nicht reicht</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Viele Herausforderungen in Service, Führung und Zusammenarbeit sind keine Fachprobleme. Sie entstehen
                dort, wo Menschen unter Zeitdruck erklären, abstimmen, führen und Vertrauen sichern müssen.
              </p>
            </div>
          </div>

          <div className="mt-12 divide-y divide-border/70 border-t border-border/70 sm:mt-16">
            {problems.map((item) => (
              <div key={item.number} className="grid gap-4 py-7 md:grid-cols-[72px_minmax(0,0.9fr)_minmax(0,1.2fr)] md:items-start md:gap-8 md:py-8">
                <div className="font-display text-4xl font-light leading-none text-foreground/12 sm:text-5xl">{item.number}</div>
                <h3 className="font-display text-2xl font-medium leading-snug text-foreground">{item.title}</h3>
                <p className="text-[15px] leading-8 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="schwerpunkte-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Schwerpunkte</Eyebrow>
              <h2 id="schwerpunkte-heading" className="mt-5 max-w-4xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Drei Arbeitsfelder, mit denen wir am häufigsten zu tun haben.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {focusAreas.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-border/70 bg-white p-6 shadow-[0_12px_35px_rgba(16,33,43,0.04)] sm:p-8">
                <div className="h-px w-14 bg-accent" />
                <h3 className="mt-8 font-display text-2xl font-medium leading-snug text-foreground">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="praxisbeispiele" className="bg-[#fbfaf6] py-24 sm:py-28" aria-labelledby="case-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Ein Beispiel aus der Praxis</Eyebrow>
              <h2 id="case-heading" className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Siemens
              </h2>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[30px] border border-border/70 bg-white shadow-[0_25px_75px_rgba(16,33,43,0.08)]">
            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className="relative min-h-[320px] lg:min-h-[100%]">
                <Image
                  src="/images/photo-placeholder.svg"
                  alt="Praxisnahe Trainingssituation in technischem Umfeld"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid gap-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/74">Kontext</p>
                    <p className="mt-3 text-[15px] leading-8 text-foreground/82">
                      Training im technischen Umfeld mit hoher Relevanz für Service, Kundenkommunikation und
                      professionelle Wirkung.
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-3 sm:gap-5">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/74">
                        Ausgangslage
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Technische Fachkräfte müssen komplexe Inhalte nicht nur fachlich richtig, sondern auch klar,
                        kundenorientiert und souverän vermitteln.
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/74">
                        Vorgehen
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Praxisnahe Trainings mit realistischen Situationen, direktem Feedback und hoher Nähe zum
                        tatsächlichen Arbeitsalltag der Teilnehmenden.
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/74">
                        Wirkung
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Mehr Klarheit im Auftritt, professionellerer Kundenkontakt und bessere Übertragbarkeit in den
                        Servicealltag.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-dashed border-border/90 bg-[#faf8f3] p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/74">
                      [SIEMENS_TESTIMONIAL_ODER_WIRKUNGSBESCHREIBUNG]
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground/88">
                      Platz für freigegebene Kundenstimme oder präzisere Wirkungsbeschreibung aus dem Siemens-Kontext.
                    </p>
                  </div>

                  <div>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#10212B] transition-colors hover:bg-[#d89c17]"
                    >
                      Praxisbeispiele ansehen
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#0e3348] py-20 text-white sm:py-28" aria-labelledby="methode-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">Methode</p>
              <h2 id="methode-heading" className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                So entsteht nachhaltige Wirkung.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:text-right">
              <span className="font-display text-6xl font-light italic text-white/8 sm:text-8xl">Methode</span>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {methodSteps.map((item, index) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  0{index + 1}
                </p>
                <h3 className="mt-6 font-display text-3xl font-light text-white">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-white/72">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="bernd-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative overflow-hidden rounded-[30px] border border-border/70 bg-[#f7f3eb]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/photo-placeholder.svg"
                  alt="Bernd Grossmann"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Eyebrow>Warum Bernd Grossmann</Eyebrow>
              <h2 id="bernd-heading" className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Seit 1994 arbeitet Bernd Grossmann mit Service- und Führungsteams in technischen Umfeldern.
              </h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted-foreground">
                Sein Fokus liegt auf Kommunikation, Wirkung und Zusammenarbeit dort, wo fachliche Exzellenz allein
                nicht ausreicht. Dabei verbindet er technische Anschlussfähigkeit mit klarer Menschenorientierung,
                Struktur und hoher Praxisnähe.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                <div className="rounded-[24px] border border-border/70 bg-[#faf8f3] p-5">
                  <MessageSquareText className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">Kommunikation, die im Alltag tragfähig bleibt.</p>
                </div>
                <div className="rounded-[24px] border border-border/70 bg-[#faf8f3] p-5">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">Souveränität in Situationen mit Druck, Reibung und Verantwortung.</p>
                </div>
                <div className="rounded-[24px] border border-border/70 bg-[#faf8f3] p-5">
                  <Wrench className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">Praxisnähe für technische Zielgruppen statt allgemeiner Trainerfloskeln.</p>
                </div>
              </div>

              <blockquote className="mt-10 border-l-2 border-accent pl-6">
                <p className="font-display text-2xl font-light italic leading-relaxed text-foreground">
                  Gute Technik braucht gute Gespräche.
                </p>
              </blockquote>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  Mehr über Bernd
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-[#f3efe6] py-20 sm:py-28" aria-labelledby="stimmen-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Stimmen aus der Praxis</Eyebrow>
              <h2 id="stimmen-heading" className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Was Kunden besonders schätzen
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] italic leading-8 text-muted-foreground">
                Praxisnähe, Klarheit und spürbare Relevanz für den Alltag.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[30px] border border-border/70 bg-white p-8 shadow-[0_18px_55px_rgba(16,33,43,0.05)] sm:p-10">
              <p className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-light italic leading-[1.7] text-foreground/78">
                “{quotes[0].quote}”
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-foreground">{quotes[0].author}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                  {quotes[0].role} · {quotes[0].company}
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="border-l border-primary/20 pl-5">
                <p className="text-sm italic leading-7 text-muted-foreground">“{quotes[1].quote}”</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                  {quotes[1].author} · {quotes[1].company}
                </p>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-border/70 bg-white">
                <div className="flex aspect-video flex-col items-center justify-center bg-[#faf7f0] px-6 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm">
                    <CirclePlay className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/75">
                    [HOME_VIDEO_TESTIMONIAL]
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Platz für eine kurze Videostimme aus der Praxis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="erstgespraech" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-border/70 bg-[#102f42] px-8 py-10 text-white shadow-[0_30px_90px_rgba(16,33,43,0.18)] sm:px-10 sm:py-12 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">Erstgespräch</p>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Lassen Sie uns klären, was in Ihrer Situation wirklich weiterhilft.
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/72">
                  In einem ersten Gespräch schauen wir gemeinsam auf Zielgruppe, Ausgangslage und das passende Format.
                  So wird schnell sichtbar, welche Form der Zusammenarbeit für Ihre Situation sinnvoll ist.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href="mailto:info@grossmann-training.de?subject=Anfrage%20Erstgespr%C3%A4ch%20Grossmann%20Training"
                  className="flex items-center justify-between rounded-[26px] border border-white/10 bg-white/[0.05] px-5 py-4 transition-colors hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Erstgespräch per E-Mail anfragen</p>
                      <p className="text-xs text-white/58">info@grossmann-training.de</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/56" />
                </a>

                <a
                  href="tel:+49713515764"
                  className="flex items-center justify-between rounded-[26px] border border-white/10 bg-white/[0.05] px-5 py-4 transition-colors hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Direkt anrufen</p>
                      <p className="text-xs text-white/58">+49 7135 15764</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/56" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
