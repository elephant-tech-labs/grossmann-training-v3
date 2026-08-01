import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"

const reasons = [
  "Sie möchten einschätzen, welche Zielgruppe und welches Format sinnvoll sind.",
  "Sie haben konkrete Situationen im Service, in Projekten oder in der Führung, die bearbeitet werden sollen.",
  "Sie wollen klären, ob eher ein kompaktes Training, ein Inhouse-Format oder ein mehrstufiger Aufbau passt.",
]

const formFields = [
  "Name und Unternehmen",
  "Rolle oder Zielgruppe",
  "E-Mail und Telefon optional",
  "Kurze Beschreibung der Situation",
  "Datenschutz-Einwilligung",
]

export const metadata: Metadata = {
  title: "Kontakt | Grossmann Training",
  description:
    "Erstgespräch mit Grossmann Training anfragen. Kontakt für Servicetechniker, Führungskräfte und Unternehmen im technischen Umfeld.",
}

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="pt-28 sm:pt-32">
        <PageHero
          eyebrow="Kontakt"
          title="Lassen Sie uns über Ihre Situation sprechen."
          body="Wenn Sie klären möchten, welches Training, welches Format oder welcher nächste Schritt in Ihrem technischen Umfeld sinnvoll ist, ist ein kurzes Erstgespräch der beste Einstieg."
        />

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="white-card p-7 sm:p-8">
                <SectionEyebrow>Direkte Kontaktwege</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl">
                  Schnell und unkompliziert zum Erstgespräch
                </h2>
                <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
                  Wenn Sie lieber direkt schreiben oder anrufen möchten, können Sie genau das tun. Der Kontakt soll so
                  einfach sein wie das erste Sortieren Ihrer Situation.
                </p>

                <figure className="mt-8 overflow-hidden rounded-[24px] border border-border/70 bg-white">
                  <div className="relative aspect-[16/10] min-h-[260px]">
                    <Image
                      src="/images/grossmann-v4/bernd-brand-portrait.png"
                      alt="Bernd Grossmann vor dem Grossmann Training Firmenbanner"
                      fill
                      className="object-cover object-[42%_center]"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                  <figcaption className="border-t border-border/70 bg-[#fcfbf8] px-5 py-4 text-sm leading-6 text-muted-foreground">
                    Ihr Ansprechpartner: Bernd Grossmann.
                  </figcaption>
                </figure>

                <div className="mt-8 grid gap-4">
                  <a
                    href="mailto:info@grossmann-training.de?subject=Anfrage%20Grossmann%20Training"
                    className="flex items-center justify-between rounded-[22px] border border-border/70 bg-[#faf8f3] px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Per E-Mail anfragen</p>
                        <p className="text-xs text-muted-foreground">info@grossmann-training.de</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary/54" />
                  </a>

                  <a
                    href="tel:+49713515764"
                    className="flex items-center justify-between rounded-[22px] border border-border/70 bg-[#faf8f3] px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Direkt anrufen</p>
                        <p className="text-xs text-muted-foreground">+49 7135 15764</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary/54" />
                  </a>
                </div>

                <div className="mt-8 rounded-[24px] border border-border/70 bg-[#fcfbf8] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    Worum es im ersten Gespräch geht
                  </p>
                  <ul className="mt-5 space-y-4">
                    {reasons.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-8 text-muted-foreground">
                        <CheckCircle2 className="mt-1 h-4.5 w-4.5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="white-card p-7 sm:p-8 lg:p-10">
                <SectionEyebrow>Anfrage vorbereiten</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl">
                  Diese Angaben helfen beim ersten Sortieren
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                  Für eine gezielte erste Einschätzung können Sie diese Informationen einfach per E-Mail senden. Ein
                  fertiges Briefing ist nicht nötig - eine kurze Beschreibung Ihrer Situation reicht aus.
                </p>

                <div className="mt-8 rounded-[28px] border border-border/80 bg-[#faf8f3] p-7 sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {formFields.map((item) => (
                      <div key={item} className="rounded-[20px] border border-border/70 bg-white px-4 py-4 text-sm text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href="mailto:info@grossmann-training.de?subject=Anfrage%20Grossmann%20Training"
                    className="btn-brand mt-7 w-full sm:w-auto"
                  >
                    Anfrage per E-Mail senden
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/praxisbeispiele" className="btn-brand-outline">
                    Erst Praxisbeispiele ansehen
                  </Link>
                  <Link href="/zielgruppen" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
                    Zielgruppen ansehen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageCtaPanel
          eyebrow="Nächster Schritt"
          title="Wenn die Situation schon konkret ist, reicht oft ein kurzer erster Austausch, um Richtung zu gewinnen."
          primaryHref="/praxisbeispiele"
          primaryLabel="Praxisbeispiele ansehen"
          secondaryHref="/zielgruppen"
          secondaryLabel="Zielgruppen ansehen"
        />
      </main>
    </SiteShell>
  )
}
