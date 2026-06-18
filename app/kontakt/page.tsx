import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import HomeV3Footer from "@/components/home-v3-footer"
import HomeV3Header from "@/components/home-v3-header"

export const metadata: Metadata = {
  title: "Kontakt | Grossmann Training",
  description:
    "Erstgespräch mit Grossmann Training anfragen. Kontakt für Servicetechniker, Führungskräfte und Unternehmen im technischen Umfeld.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeV3Header />
      <main className="pt-32">
        <section className="bg-[#faf8f3] py-18 border-b border-border/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Kontakt</p>
                <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Lassen Sie uns über Ihre Situation sprechen.
                </h1>
                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted-foreground">
                  Wenn Sie klären möchten, welches Training, welches Format oder welcher nächste Schritt in Ihrem
                  technischen Umfeld sinnvoll ist, ist ein kurzes Erstgespräch der beste Einstieg.
                </p>
              </div>

              <div className="rounded-[30px] border border-border/70 bg-white p-7 shadow-[0_18px_55px_rgba(16,33,43,0.05)] sm:p-8">
                <h2 className="font-display text-2xl font-medium text-foreground">Direkte Kontaktwege</h2>
                <div className="mt-6 grid gap-4">
                  <a
                    href="mailto:info@grossmann-training.de?subject=Anfrage%20Grossmann%20Training"
                    className="flex items-center justify-between rounded-[22px] border border-border/70 bg-[#faf8f3] px-5 py-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Per E-Mail anfragen</p>
                        <p className="text-xs text-muted-foreground">info@grossmann-training.de</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+49713515764"
                    className="flex items-center justify-between rounded-[22px] border border-border/70 bg-[#faf8f3] px-5 py-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Direkt anrufen</p>
                        <p className="text-xs text-muted-foreground">+49 7135 15764</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">Erstgespräch</p>
                <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl">
                  Worum es im ersten Gespräch geht
                </h2>
                <ul className="mt-6 space-y-4 text-[15px] leading-8 text-muted-foreground">
                  <li>Wir schauen auf Zielgruppe, Kontext und typische Kommunikationssituationen.</li>
                  <li>Wir klären, ob eher Training, Workshop, Führungsthema oder Inhouse-Format passt.</li>
                  <li>Wir sortieren, was sinnvoll sofort angegangen werden sollte und was später folgen kann.</li>
                </ul>
              </div>

              <div className="rounded-[30px] border border-dashed border-border/80 bg-[#faf8f3] p-8 sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/72">
                  [ZOHO_FORM_EMBED]
                </p>
                <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted-foreground">
                  Hier kann die Zoho-Form eingebunden werden. Empfohlene Felder: Name, Unternehmen, Rolle, E-Mail,
                  Telefon optional, Anliegen, Zielgruppe, kurze Beschreibung und Datenschutz-Einwilligung.
                </p>
                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    Zur Startseite
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomeV3Footer />
    </div>
  )
}
