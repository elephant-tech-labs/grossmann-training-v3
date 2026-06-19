import type { Metadata } from "next"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const testimonials = [
  {
    title: "Ein Kunde empfiehlt weiter - und schickt die nächsten 25 Techniker",
    quote:
      "Dieses Jahr haben wir rund 25 Techniker zu einem dieser Entwicklungs-Seminare geschickt. Das Ganze mit spürbarem Erfolg. Kommendes Jahr schicken wir die nächsten 25 Kollegen und frischen das Gelernte parallel bei den Kollegen auf, die bereits teilgenommen haben.",
    author: "Dirk Wolfgang Dietrich",
    role: "Teamleiter Wartung & Service",
    company: "R.O.M. Rud. Otto Meyer Technik GmbH & Co. KG, Neu-Isenburg",
  },
  {
    title: "Ich bin sprachlos",
    quote:
      "Ich bin sprachlos. Nach diesem Seminar folgten vier weitere Seminare, mehrere Vertriebstage für Projektleiter und Key Account Manager sowie Führungs- und Verhandlungstrainings für Bauleiter.",
    author: "Stefan Zöller",
    role: "Leitung NL Stuttgart Service & FM",
    company: "R.O.M. Rud. Otto Meyer Technik GmbH & Co. KG, Stuttgart",
  },
  {
    title: "Techniken, die beruflich und privat tragen",
    quote:
      "Deine Techniken kann ich nicht nur beruflich, sondern auch privat anwenden. Besonders die Tipps zur Konfliktlösung, aber auch die Wirkung der eigenen Körpersprache, sind unfassbar hilfreich.",
    author: "Maximilian Sebald",
    role: "Junior Commercial Program Manager",
    company: "RAUMEDIC AG, Helmbrechts",
  },
  {
    title: "Mit Sicherheit die beste Schulung",
    quote:
      "Da ich schon ein paar solcher Schulungen erlebt habe, kann ich mit Sicherheit sagen, dass diese die beste war. Zielsetzung jedes einzelnen Teilnehmers erreicht, informativ und spannend.",
    author: "Magnus Jungel",
    role: "Service-Techniker weltweit",
    company: "Ekato AG, Schopfheim",
  },
  {
    title: "Seit Jahren erfolgreich - auch online",
    quote:
      "Kundendiensttechniker trainiert Herr Grossmann seit mehreren Jahren bei uns - sehr erfolgreich. Für Servicetechniker eines Anlagenbauers ist er ein motivierender Trainer mit viel Erfahrung.",
    author: "Philipp Reimann",
    role: "Teamleiter CSS Central Function",
    company: "Saacke GmbH",
  },
  {
    title: "Ein Serviceleiter über die Wirkung im Team",
    quote:
      "Sehr praxisnahes Coaching für Servicetechniker als Verkäufer. Das Feedback aus dem Team an mich war sehr positiv.",
    author: "Klaus Dieter Nuss",
    role: "Serviceeinsatzleiter",
    company: "Saacke GmbH, Bremen",
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

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] bg-[#102f42] px-8 py-9 text-white shadow-[0_25px_75px_rgba(16,33,43,0.2)] sm:px-10 sm:py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/56">Hervorgehobene Stimme</p>
              <blockquote className="mt-5 max-w-5xl font-display text-[clamp(1.35rem,2.4vw,2.4rem)] font-light italic leading-[1.6] text-white/92">
                „{testimonials[0].quote}“
              </blockquote>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/60">
                {testimonials[0].author} · {testimonials[0].role} · {testimonials[0].company}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.slice(1).map((item) => (
                <article key={item.author} className="soft-card p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {item.author
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">{item.title}</p>
                  </div>
                  <p className="mt-5 font-display text-[1.45rem] font-light italic leading-[1.7] text-foreground/82">
                    „{item.quote}“
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground/78">
                    {item.author} · {item.role}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.company}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] border border-dashed border-border/80 bg-[#faf8f3] p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/72">
                Platzhalter für weitere freigegebene Stimmen
              </p>
              <p className="mt-4 max-w-3xl text-[15px] leading-8 text-muted-foreground">
                Weitere Testimonials mit Porträts, Logos oder Initialen-Avataren können hier strukturgleich ergänzt
                werden, sobald die finalen Freigaben und Bilddateien vorliegen.
              </p>
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
