import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const proofSignals = [
  {
    label: "R.O.M. Technik",
    value: "25 weitere Techniker folgen",
    body: "Ein Entwicklungsseminar wurde direkt in einen weiteren Rollout überführt.",
  },
  {
    label: "Pilot mit Wirkung",
    value: "4 weitere Seminare",
    body: "Aus einem ersten Seminar entstanden zusätzliche Trainings für Führung, Vertrieb und Verhandlung.",
  },
  {
    label: "Langfristige Zusammenarbeit",
    value: "Seit Jahren erfolgreich",
    body: "Mehrjährige Zusammenarbeit und positives Teamfeedback statt einmaliger Einzelstimme.",
  },
]

const featuredTestimonials = [
  {
    eyebrow: "Hervorgehobene Stimme",
    title: "Ein Kunde empfiehlt weiter und schickt die nächsten 25 Techniker",
    quote:
      "Dieses Jahr haben wir rund 25 Techniker zu einem dieser Entwicklungs-Seminare geschickt. Das Ganze mit spürbarem Erfolg. Kommendes Jahr schicken wir die nächsten 25 Kollegen und frischen das Gelernte parallel bei den Kollegen auf, die bereits teilgenommen haben.",
    author: "Dirk Wolfgang Dietrich",
    role: "Teamleiter Wartung & Service",
    company: "R.O.M. Rud. Otto Meyer Technik GmbH & Co. KG, Neu-Isenburg",
    summary: "Repeat rollout und Auffrischung im Bestand statt einmaligem Seminar-Effekt.",
    imageSrc: "/images/grossmann/service-seminar-team-photo.png",
    imageAlt: "Teilnehmende eines Service-Seminars im technischen Umfeld",
    ctaHref: "/praxisbeispiele#service",
    ctaLabel: "Passendes Praxisbeispiel ansehen",
  },
  {
    eyebrow: "Folgewirkung",
    title: "Aus einem Pilotseminar wurden weitere Trainings und Folgeschritte",
    quote:
      "Ich bin sprachlos. Nach diesem Seminar folgten vier weitere Seminare, mehrere Vertriebstage für Projektleiter und Key Account Manager sowie Führungs- und Verhandlungstrainings für Bauleiter.",
    author: "Stefan Zöller",
    role: "Leitung NL Stuttgart Service & FM",
    company: "R.O.M. Rud. Otto Meyer Technik GmbH & Co. KG, Stuttgart",
    summary: "Ein starker Hinweis darauf, dass die Wirkung intern sichtbar und anschlussfähig war.",
    imageSrc: "/images/grossmann/home-case-technical-discussion.jpg",
    imageAlt: "Workshop- und Gesprächsszene aus einem technischen Trainingsumfeld",
    ctaHref: "/praxisbeispiele#siemens",
    ctaLabel: "Projekt- und Verhandlungskontext ansehen",
  },
]

const testimonialGroups = [
  {
    id: "service-und-wirkung",
    title: "Service, Kundenkontakt und sichtbare Wirkung",
    body: "Diese Stimmen sind besonders stark, wenn Serviceeinsätze, Kundenkontakt und unmittelbare Alltagstauglichkeit im Vordergrund stehen.",
    items: [
      {
        category: "Servicepraxis",
        title: "Mit Sicherheit die beste Schulung",
        quote:
          "Da ich schon ein paar solcher Schulungen erlebt habe, kann ich mit Sicherheit sagen, dass diese die beste war. Zielsetzung jedes einzelnen Teilnehmers erreicht, informativ und spannend.",
        author: "Magnus Jungel",
        role: "Service-Techniker weltweit",
        company: "Ekato AG, Schopfheim",
        proof: "Starker Qualitätsvergleich aus Teilnehmerperspektive.",
        href: "/zielgruppen#servicetechniker",
        hrefLabel: "Zielgruppe Service ansehen",
      },
      {
        category: "Langfristige Zusammenarbeit",
        title: "Seit Jahren erfolgreich - auch online",
        quote:
          "Kundendiensttechniker trainiert Herr Grossmann seit mehreren Jahren bei uns - sehr erfolgreich. Für Servicetechniker eines Anlagenbauers ist er ein motivierender Trainer mit viel Erfahrung.",
        author: "Philipp Reimann",
        role: "Teamleiter CSS Central Function",
        company: "Saacke GmbH",
        proof: "Mehrjährige Zusammenarbeit statt einmaliger Momentaufnahme.",
        href: "/praxisbeispiele#service",
        hrefLabel: "Service-Praxisbeispiel ansehen",
      },
    ],
  },
  {
    id: "transfer-und-fuehrung",
    title: "Transfer, Führung und persönliche Tragfähigkeit",
    body: "Hier wird sichtbar, dass die Arbeit nicht nur im Seminarraum gut klingt, sondern in Führungs-, Konflikt- und Alltagssituationen weiterträgt.",
    items: [
      {
        category: "Transferwirkung",
        title: "Techniken, die beruflich und privat tragen",
        quote:
          "Deine Techniken kann ich nicht nur beruflich, sondern auch privat anwenden. Besonders die Tipps zur Konfliktlösung, aber auch die Wirkung der eigenen Körpersprache, sind unfassbar hilfreich.",
        author: "Maximilian Sebald",
        role: "Junior Commercial Program Manager",
        company: "RAUMEDIC AG, Helmbrechts",
        proof: "Zeigt, dass Wirkung nicht theoretisch bleibt, sondern in Verhalten übergeht.",
        href: "/themen-formate",
        hrefLabel: "Passende Formate ansehen",
      },
      {
        category: "Teamfeedback",
        title: "Ein Serviceleiter über die Wirkung im Team",
        quote:
          "Sehr praxisnahes Coaching für Servicetechniker als Verkäufer. Das Feedback aus dem Team an mich war sehr positiv.",
        author: "Klaus Dieter Nuss",
        role: "Serviceeinsatzleiter",
        company: "Saacke GmbH, Bremen",
        proof: "Knapp, aber stark: Praxisnähe und Resonanz im Team werden direkt bestätigt.",
        href: "/zielgruppen#teams-niederlassungen",
        hrefLabel: "Teams & Niederlassungen ansehen",
      },
    ],
  },
]

const nextSteps = [
  {
    title: "Praxisbeispiele ansehen",
    body: "Wer die Aussagen mit konkreten Situationen verbinden will, findet dort nachvollziehbare Ausgangslagen, Vorgehen und Wirkung.",
    href: "/praxisbeispiele",
    label: "Zu Praxisbeispielen",
  },
  {
    title: "Passende Zielgruppe finden",
    body: "Wenn noch nicht klar ist, welcher Hebel in Ihrer Rolle zählt, führt der Zielgruppenblick oft am schnellsten weiter.",
    href: "/zielgruppen",
    label: "Zu Zielgruppen",
  },
]

export const metadata: Metadata = {
  title: "Referenzen & Stimmen | Grossmann Training",
  description:
    "Ausgewählte Testimonials, Kundenstimmen und Referenzen aus technischen Service-, Führungs- und Projektumfeldern.",
}

export default function ReferenzenStimmenPage() {
  return (
    <SiteShell>
      <main className="pt-28 sm:pt-32">
        <PageHero
          eyebrow="Referenzen & Stimmen"
          title="Was Kunden über die Zusammenarbeit sagen"
          body="Die Stimmen stammen aus technischen Service-, Führungs- und Projektkontexten. Sie zeigen, wie die Arbeit in der Praxis erlebt wird - ruhig, konkret und mit Wirkung im Alltag."
        />

        <section className="border-b border-border/70 bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {proofSignals.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-border/70 bg-[#fcfbf8] p-6 shadow-[0_10px_30px_rgba(16,33,43,0.03)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">{item.label}</p>
                  <h2 className="mt-4 font-display text-[1.95rem] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
                    {item.value}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            {featuredTestimonials.map((item, index) => (
              <section
                key={item.title}
                className={`overflow-hidden rounded-[32px] shadow-[0_25px_75px_rgba(16,33,43,0.12)] ${index === 0 ? "bg-[#102f42] text-white" : "border border-border/70 bg-[#fcfbf8]"}`}
              >
                <div className={`grid gap-0 lg:grid-cols-[1.12fr_0.88fr] ${index === 1 ? "lg:grid-cols-[0.88fr_1.12fr]" : ""}`}>
                  <div className={`p-8 sm:p-10 lg:p-12 ${index === 1 ? "lg:order-2" : ""}`}>
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${index === 0 ? "text-white/56" : "text-primary/72"}`}>
                      {item.eyebrow}
                    </p>
                    <h2 className={`mt-5 max-w-3xl font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-[2.55rem] ${index === 0 ? "text-white" : "text-foreground"}`}>
                      {item.title}
                    </h2>
                    <blockquote
                      className={`mt-6 max-w-4xl font-display text-[1.5rem] font-light italic leading-[1.7] sm:text-[1.9rem] ${index === 0 ? "text-white/90" : "text-foreground/84"}`}
                    >
                      „{item.quote}“
                    </blockquote>
                    <p className={`mt-6 text-xs uppercase tracking-[0.18em] ${index === 0 ? "text-white/62" : "text-muted-foreground/78"}`}>
                      {item.author} · {item.role} · {item.company}
                    </p>
                    <p className={`mt-5 max-w-2xl text-sm leading-7 ${index === 0 ? "text-white/72" : "text-muted-foreground"}`}>
                      {item.summary}
                    </p>
                    <Link
                      href={item.ctaHref}
                      className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${index === 0 ? "text-white hover:text-white/82" : "text-primary hover:text-primary-dark"}`}
                    >
                      {item.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className={`relative min-h-[300px] ${index === 1 ? "lg:order-1" : ""}`}>
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-border/70 bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <div>
                <SectionEyebrow>Weitere Stimmen</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-[2.8rem]">
                  Stimmen nach Kontext geordnet statt als lose Sammlung
                </h2>
              </div>
              <p className="max-w-2xl text-[15px] leading-8 text-muted-foreground">
                Nicht jede Stimme beweist dasselbe. Manche zeigen nachhaltige Zusammenarbeit, andere direkte
                Alltagstauglichkeit, Wiederbeauftragung oder starke Resonanz im Team.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {testimonialGroups.map((group) => (
                <section key={group.id} className="rounded-[30px] border border-border/70 bg-[#fcfbf8] p-6 sm:p-8 shadow-[0_12px_35px_rgba(16,33,43,0.04)]">
                  <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">Kontext</p>
                      <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.03em] text-foreground">
                        {group.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted-foreground">{group.body}</p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      {group.items.map((item) => (
                        <article key={item.author} className="white-card p-6 sm:p-7">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                              {item.author
                                .split(" ")
                                .slice(0, 2)
                                .map((part) => part[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">{item.category}</p>
                              <p className="mt-1 text-sm font-semibold text-foreground">{item.title}</p>
                            </div>
                          </div>

                          <blockquote className="mt-5 font-display text-[1.3rem] font-light italic leading-[1.75] text-foreground/84">
                            „{item.quote}“
                          </blockquote>

                          <div className="mt-6 rounded-[18px] border border-border/70 bg-[#faf8f3] p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/72">Was das belegt</p>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.proof}</p>
                          </div>

                          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground/78">
                            {item.author} · {item.role}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.company}</p>
                          <Link
                            href={item.href}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                          >
                            {item.hrefLabel}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/70 bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[30px] border border-border/70 bg-[#fcfbf8] p-6 sm:p-8 shadow-[0_12px_35px_rgba(16,33,43,0.04)]">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                <div>
                  <SectionEyebrow>Wie es weitergeht</SectionEyebrow>
                  <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-[2.65rem]">
                    Von der Stimme zum passenden nächsten Blick
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted-foreground">
                    Stimmen schaffen Vertrauen. Für die nächste Entscheidung helfen meist entweder die Praxisbeispiele
                    oder der Blick auf die passende Zielgruppe.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {nextSteps.map((item) => (
                    <div key={item.title} className="rounded-[22px] border border-border/70 bg-white p-5 sm:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/72">Nächster Schritt</p>
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
            </div>
          </div>
        </section>

        <PageCtaPanel
          eyebrow="Weitergehen"
          title="Wer Wirkung nachvollziehen will, sollte auch die Praxisbeispiele sehen."
          primaryHref="/praxisbeispiele"
          primaryLabel="Praxisbeispiele ansehen"
          secondaryHref="/kontakt"
          secondaryLabel="Erstgespräch anfragen"
        />
      </main>
    </SiteShell>
  )
}
