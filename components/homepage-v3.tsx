import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, Building2, MessageSquareText, Phone, ShieldCheck, Wrench } from "lucide-react"
import SectionEyebrow from "@/components/section-eyebrow"

const audiences = [
  {
    title: "Servicetechniker & Monteure",
    body: "Wenn technische Kompetenz im Kundenkontakt klar, souverän und vertrauensbildend wirken soll.",
    icon: Wrench,
    href: "/servicetechniker",
  },
  {
    title: "Projektleiter, Objektleiter & Auftragsleiter",
    body: "Wenn Technik, Kunde, Termine und Wirtschaftlichkeit kommunikativ zusammengeführt werden müssen.",
    icon: MessageSquareText,
    href: "/zielgruppen#projekt-objekt",
  },
  {
    title: "Bauleiter & technische Führungskräfte",
    body: "Wenn Führung, Feedback und Verbindlichkeit im technischen Alltag unter Druck wirksam werden müssen.",
    icon: BriefcaseBusiness,
    href: "/zielgruppen#technische-fuehrung",
  },
  {
    title: "Teams, Niederlassungen & Unternehmen",
    body: "Wenn Zusammenarbeit, gemeinsame Haltung und Wirkung über Rollen und Schnittstellen hinweg gestärkt werden sollen.",
    icon: Building2,
    href: "/zielgruppen#teams-niederlassungen",
  },
]

const problemPoints = [
  {
    number: "01",
    title: "Kundengespräche mit Wirkung",
    body: "Komplexe technische Inhalte müssen verständlich, professionell und sicher vermittelt werden.",
  },
  {
    number: "02",
    title: "Souveränität in schwierigen Situationen",
    body: "Bei Einwänden, Spannungen oder Zeitdruck entscheidet Kommunikation über Vertrauen und Deeskalation.",
  },
  {
    number: "03",
    title: "Führung im Technikalltag",
    body: "Technische Führung braucht Präsenz, Klarheit und Gespür für Menschen, nicht nur Prozesse.",
  },
]

const workAreas = [
  {
    title: "Kommunikation im technischen Service",
    body: "Für Servicetechniker und Teams mit direktem Kundenkontakt.",
  },
  {
    title: "Führung im technischen Umfeld",
    body: "Für Teamleitungen, Bereichsverantwortliche und technische Führungskräfte.",
  },
  {
    title: "Verhandlung, Wirkung und Präsenz",
    body: "Für Situationen, in denen Klarheit, Standing und professionelle Außenwirkung entscheidend sind.",
  },
]

const methodSteps = [
  {
    title: "Analyse",
    body: "Wir klären Ausgangssituation, Zielgruppe und die typischen Gesprächs- und Führungssituationen.",
  },
  {
    title: "Training",
    body: "Praxisnahe Formate mit realistischen Situationen, direktem Feedback und hoher Relevanz für den Alltag.",
  },
  {
    title: "Transfer",
    body: "Die Wirkung soll nicht im Seminarraum bleiben, sondern im Alltag sichtbar, spürbar und wiederholbar werden.",
  },
]

const clientLogos = ["Siemens", "Bosch", "Continental", "AVL", "DMG MORI", "REHAU"]

const testimonials = [
  {
    quote:
      "Dieses Jahr haben wir rund 25 Techniker zu einem dieser Entwicklungs-Seminare geschickt. Kommendes Jahr schicken wir die nächsten 25 Kollegen.",
    author: "Dirk Wolfgang Dietrich",
    role: "Teamleiter Wartung & Service",
    company: "R.O.M. Rud. Otto Meyer Technik GmbH & Co. KG",
  },
  {
    quote:
      "Ich bin sprachlos. Nach diesem Seminar folgten vier weitere Seminare sowie weitere Trainingsformate für Projektleiter, Key Account Manager und Bauleiter.",
    author: "Stefan Zöller",
    role: "Leitung NL Stuttgart Service & FM",
    company: "R.O.M. Rud. Otto Meyer Technik GmbH & Co. KG",
  },
]

export default function HomepageV3() {
  return (
    <main className="bg-background text-foreground">
      <section className="overflow-hidden bg-[#faf8f3] pt-32" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-22">
          <div className="grid gap-10 border-b border-border/70 pb-12 lg:grid-cols-12 lg:gap-12 lg:pb-14">
            <div className="lg:col-span-8">
              <SectionEyebrow>Für FM/TGA, technischen Service und Führung im technischen Umfeld</SectionEyebrow>
              <h1
                id="hero-heading"
                className="mt-7 max-w-5xl font-display text-[clamp(3rem,6.7vw,6.7rem)] font-light leading-[0.9] tracking-[-0.045em] text-foreground"
              >
                Technik funktioniert.
                <span className="block pl-[clamp(0.5rem,4vw,4rem)] italic text-primary">Zusammenarbeit</span>
                <span className="block">entscheidet.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pt-10">
              <div className="soft-card p-6 sm:p-7">
                <p className="max-w-sm text-[15px] leading-8 text-muted-foreground">
                  Grossmann Training unterstützt Menschen und Organisationen dort, wo Technik auf Kunden, Führung und
                  Zusammenarbeit trifft. Technische Kompetenz schafft Leistung. Kommunikation schafft Wirkung.
                </p>

                <div className="mt-7 flex flex-col gap-3">
                  <Link href="/kontakt" className="btn-brand">
                    Erstgespräch vereinbaren
                  </Link>
                  <Link href="/praxisbeispiele" className="btn-brand-outline">
                    Praxisbeispiele ansehen
                  </Link>
                </div>

                <div className="mt-7 border-t border-border/70 pt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/78">
                  Seit 1994 · FM/TGA · Technischer Kundendienst · Technische Führung
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-border/70 bg-white shadow-[0_28px_85px_rgba(16,33,43,0.08)]">
            <div className="relative aspect-[4/3] min-h-[240px] sm:aspect-[21/9] sm:min-h-[300px]">
              <Image
                src="/images/grossmann/home-hero-training-room.jpg"
                alt="Trainingssituation mit Bernd Grossmann und Teilnehmenden im technischen Umfeld"
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="100vw"
              />
            </div>
            <div className="border-t border-border/70 bg-[#fcfbf8] px-5 py-4 text-sm text-muted-foreground sm:px-7">
              Praxisnah. Persönlich. Wirksam im technischen Alltag.
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.45fr_0.8fr] lg:items-center">
            <div>
              <SectionEyebrow>Beweis aus der Praxis</SectionEyebrow>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                Ausgewählte Kunden, langjährige Praxiserfahrung und reale Entwicklungsarbeit in Service,
                Projektumfeld, Gebäudetechnik und technischer Führung.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
              {clientLogos.map((client) => (
                <div
                  key={client}
                  className="flex min-h-12 items-center justify-start rounded-2xl border border-border/70 bg-[#fcfbf8] px-4 py-3 text-sm font-semibold tracking-[0.12em] text-foreground/62 sm:justify-center"
                >
                  {client}
                </div>
              ))}
            </div>

            <div className="soft-card px-5 py-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/74">Wirkung</p>
              <p className="mt-3 text-sm leading-7 text-foreground/82">
                Rund 25 Techniker in einem Jahr trainiert. Weitere 25 Kollegen folgen im nächsten Schritt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24" aria-labelledby="zielgruppen-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionEyebrow>Für wen wir arbeiten</SectionEyebrow>
              <h2
                id="zielgruppen-heading"
                className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl"
              >
                Je nach Rolle braucht es einen anderen Hebel.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Das Angebot ist nach Zielgruppen und typischen Anforderungen aufgebaut. So wird schnell sichtbar, was
                in Ihrer Situation wirklich weiterhilft.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {audiences.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group soft-card flex min-h-[320px] flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/18 hover:shadow-[0_20px_50px_rgba(16,33,43,0.08)] sm:p-8"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 max-w-xs font-display text-2xl font-medium leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-primary">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#f3efe6] py-18 sm:py-24" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionEyebrow>Die eigentliche Herausforderung</SectionEyebrow>
              <h2
                id="problem-heading"
                className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl"
              >
                Wo technische Kompetenz <span className="italic text-primary">allein nicht reicht</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Viele Herausforderungen in Service, Führung und Zusammenarbeit sind keine Fachprobleme. Sie entstehen
                dort, wo Menschen erklären, abstimmen, führen, deeskalieren und Vertrauen sichern müssen.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {problemPoints.map((item) => (
              <div key={item.number} className="rounded-[28px] border border-white/65 bg-white/55 p-6 shadow-[0_12px_35px_rgba(16,33,43,0.03)] backdrop-blur-sm sm:p-7">
                <p className="font-display text-4xl font-light text-primary/40">{item.number}</p>
                <h3 className="mt-4 font-display text-[1.7rem] font-medium leading-snug text-foreground">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24" aria-labelledby="case-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionEyebrow>Ein Beispiel aus der Praxis</SectionEyebrow>
              <h2 id="case-heading" className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Siemens
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Ein Gründungskapitel von Grossmann Training: Wenn technische Exzellenz plötzlich
                Verhandlungskompetenz braucht.
              </p>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[32px] border border-border/70 bg-white shadow-[0_25px_75px_rgba(16,33,43,0.08)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src="/images/grossmann/practice-internal-external-dialogue.jpeg"
                  alt="Diskussions- und Arbeitsszene aus einem technischen Seminarumfeld"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/74">Kontext</p>
                <p className="mt-3 text-[15px] leading-8 text-muted-foreground">
                  Neue Einkaufs- und Wettbewerbsstrukturen machten im technischen Infrastrukturgeschäft deutlich, dass
                  technische Stärke allein nicht mehr automatisch zum Auftrag führt.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-border/70 bg-[#faf8f3] p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Herausforderung</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Technische Kompetenz in Nutzenargumentation, Verhandlung und neue Gesprächssituationen übersetzen.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-border/70 bg-[#faf8f3] p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Vorgehen</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Entwicklungsprogramm zu Verhandlungsführung, Argumentation und kundenorientierter Gesprächslogik.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-border/70 bg-[#faf8f3] p-5 sm:col-span-2">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Wirkung</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Das Projekt zeigt bis heute eine Grundüberzeugung von Grossmann Training: Technik schafft
                      Leistung. Kommunikation schafft Wirkung.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/praxisbeispiele#siemens" className="btn-brand">
                    Praxisbeispiel ansehen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/kontakt" className="btn-brand-outline">
                    Vergleichbare Situation besprechen
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-border/70 bg-[#fcfbf8] px-6 py-4 text-sm text-muted-foreground">
              Neue Marktlogik im technischen Infrastrukturgeschäft: aus technischer Stärke wird Verhandlungskompetenz.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#fbfaf6] py-18 sm:py-24" aria-labelledby="work-areas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionEyebrow>Wobei wir unterstützen</SectionEyebrow>
              <h2
                id="work-areas-heading"
                className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl"
              >
                Drei Arbeitsfelder, mit denen wir am häufigsten zu tun haben.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Vom technischen Service bis zur Führung im Projekt- und Niederlassungsalltag. Die Themen sind
                anschlussfähig an reale Situationen, nicht an Lehrbuchfälle.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {workAreas.map((item) => (
              <div key={item.title} className="white-card p-6 sm:p-8">
                <h3 className="font-display text-2xl font-medium leading-snug text-foreground">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/themen-formate"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Themen & Formate im Überblick
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#102f42] py-18 text-white sm:py-24" aria-labelledby="method-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionEyebrow>Methode</SectionEyebrow>
              <h2 id="method-heading" className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                So entsteht nachhaltige Wirkung.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-white/70">
                Nicht als Theoriepaket, sondern als nachvollziehbare Entwicklung entlang der Praxis.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {methodSteps.map((item, index) => (
              <div key={item.title} className="rounded-[30px] border border-white/10 bg-white/4 p-6 backdrop-blur sm:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-white/52">0{index + 1}</p>
                <h3 className="mt-5 font-display text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-white/68">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:items-center">
          <div className="overflow-hidden rounded-[30px] border border-border/70 bg-white shadow-[0_25px_75px_rgba(16,33,43,0.08)]">
            <div className="relative aspect-[4/5] min-h-[340px]">
              <Image
                src="/images/grossmann/reserve-faq-bernd-speaking.jpeg"
                alt="Bernd Grossmann vor einer Trainingsvisualisierung"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="border-t border-border/70 bg-[#fcfbf8] px-6 py-4 text-sm text-muted-foreground">
              Bernd Grossmann in Trainings- und Praxisumfeldern.
            </div>
          </div>

          <div>
            <SectionEyebrow>Über Bernd Grossmann</SectionEyebrow>
            <h2
              id="about-heading"
              className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl"
            >
              Seit 1994 arbeitet Bernd Grossmann mit Service- und Führungsteams in technischen Umfeldern.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted-foreground">
              Sein Fokus liegt auf Kommunikation, Wirkung und Zusammenarbeit dort, wo technische Exzellenz allein
              nicht ausreicht. Hintergrund und Arbeitsweise verbinden wirtschaftliche Praxis, Sozialpsychologie und
              hohe Nähe zu realen technischen Situationen.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="soft-card p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Grundlage</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">BWL, Sozialpsychologie und langjährige Arbeit mit technischen Zielgruppen.</p>
              </div>
              <div className="soft-card p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Methodik</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Rogers, Transaktionsanalyse und MicroSkills - praxisnah übersetzt.</p>
              </div>
              <div className="soft-card p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/72">Haltung</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Gute Technik braucht gute Gespräche.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/ueber-bernd"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Mehr über Bernd
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#fbfaf6] py-18 sm:py-24" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionEyebrow>Stimmen aus der Praxis</SectionEyebrow>
              <h2
                id="testimonials-heading"
                className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl"
              >
                Was Kunden besonders schätzen
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-8 text-muted-foreground">
                Praktisch, ruhig und anschlussfähig an den Alltag. Die stärksten Stimmen kommen genau von dort, wo
                technische Realität und Kundenkontakt täglich zusammenkommen.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {testimonials.map((item, index) => (
              <blockquote
                key={item.author}
                className={`rounded-[30px] border border-border/70 p-7 sm:p-8 ${
                  index === 0 ? "bg-white shadow-[0_18px_55px_rgba(16,33,43,0.06)]" : "bg-[#faf8f3] lg:mt-10"
                }`}
              >
                <p className="font-display text-[clamp(1.2rem,2vw,1.8rem)] font-light italic leading-[1.65] text-foreground/80">
                  „{item.quote}“
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground/78">
                  {item.author} · {item.role} · {item.company}
                </p>
              </blockquote>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/referenzen-stimmen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Alle Referenzen & Stimmen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-18 sm:pb-24 sm:pt-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="dark-cta-panel">
            <div>
              <SectionEyebrow>Kontaktaufnahme</SectionEyebrow>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Lassen Sie uns klären, was in Ihrer Situation wirklich weiterhilft.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white/72">
                Im ersten Gespräch schauen wir gemeinsam auf Zielgruppe, Ausgangslage und das passende Format. So wird
                schnell sichtbar, welche Form der Zusammenarbeit sinnvoll ist.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:mt-0">
              <Link href="/kontakt" className="btn-dark-primary">
                Erstgespräch per Mail anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+49713515764" className="btn-dark-secondary">
                Direkt anrufen
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
