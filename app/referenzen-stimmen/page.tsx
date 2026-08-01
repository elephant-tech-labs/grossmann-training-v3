import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageCtaPanel from "@/components/page-cta-panel"
import PageHero from "@/components/page-hero"
import SectionEyebrow from "@/components/section-eyebrow"
import SiteShell from "@/components/site-shell"
import VideoTestimonial from "@/components/video-testimonial"

const clientReferences = [
  "AVL",
  "Bosch Thermotechnik",
  "Caverion",
  "Continental",
  "DMG MORI",
  "EnBW",
  "Enercity",
  "FESTO Lernzentrum",
  "R.O.M. Technik",
  "SAACKE",
  "Siemens",
  "SPIE",
  "Viessmann",
]

const proofSignals = [
  {
    label: "Weiterbeauftragung",
    value: "Weitere 25 Kollegen",
    body: "Nach dem ersten Rollout plant der Auftraggeber die Fortsetzung und eine parallele Auffrischung.",
  },
  {
    label: "Pilot mit Folgewirkung",
    value: "4 weitere Seminare",
    body: "Aus einem ersten Seminar entstanden zusätzliche Formate für Projekt, Führung und Verhandlung.",
  },
  {
    label: "Langfristige Zusammenarbeit",
    value: "Seit Jahren erfolgreich",
    body: "Mehrjährige Zusammenarbeit belegt Anschlussfähigkeit über einzelne Maßnahmen hinaus.",
  },
]

const featuredTestimonials = [
  {
    number: "01",
    eyebrow: "Ein Kunde empfiehlt weiter",
    title: "Die nächsten 25 Techniker sind bereits vorgesehen",
    quote:
      "Dieses Jahr haben wir rund 25 Techniker zu einem dieser Entwicklungs-Seminare geschickt. Das Ganze mit spürbarem Erfolg, was Einsatzbereitschaft, Verstehen von Situationen und Erkennen der positiven Absicht angeht - auch wenn es heikel wird. Kommendes Jahr schicken wir die nächsten 25 Kollegen und frischen das Gelernte parallel bei den Kollegen auf, die bereits teilgenommen haben.",
    author: "Dirk Wolfgang Dietrich",
    role: "Teamleiter Wartung & Service",
    company: "Rud. Otto Meyer Technik GmbH & Co. KG, Neu-Isenburg",
    initials: "DD",
    context: "Kundenstimme eines Auftraggebers und Teamleiters, nicht die Aussage eines Seminarteilnehmers.",
    href: "/praxisbeispiele#service",
    hrefLabel: "Passendes Praxisbeispiel ansehen",
  },
  {
    number: "02",
    eyebrow: "Pilotseminar mit Folgewirkung",
    title: "Aus einem ersten Seminar entstand ein breiter Entwicklungsbogen",
    quote: "Ich bin ... sprachlos!",
    author: "Stefan Zöller",
    role: "Leitung NL Stuttgart Service & FM",
    company: "R.O.M. Rud. Otto Meyer Technik GmbH & Co. KG, Stuttgart",
    initials: "SZ",
    context:
      "Das war der erste Satz des Serviceleiters am Ende des Pilotseminars. Danach folgten vier weitere Seminare, mehrere Vertriebstage sowie Führungs- und Verhandlungstrainings. Dieser Ablauf ist redaktioneller Kontext und kein längeres wörtliches Zitat.",
    href: "/praxisbeispiele#service",
    hrefLabel: "Service-Praxisbeispiel ansehen",
  },
]

const testimonialGroups = [
  {
    id: "service",
    title: "Service, Kundenkontakt und langfristige Wirkung",
    body: "Diese Stimmen zeigen direkte Alltagstauglichkeit, Qualität im Training und tragfähige Zusammenarbeit im technischen Service.",
    items: [
      {
        number: "05",
        title: "Mit Sicherheit die beste Schulung",
        quote:
          "Bernd hat bei uns eine 2-tägige Schulung gehalten über das Thema Kommunikation. Da ich schon ein paar solcher Schulungen erlebt habe, kann ich mit Sicherheit sagen, dass diese die Beste war. Zielsetzung jedes einzelnen Teilnehmers erreicht, informativ und spannend. Das Gelernte kann nächste Woche gleich umgesetzt werden. Klare Empfehlung.",
        author: "Magnus Jungel",
        role: "Service-Techniker weltweit",
        company: "Ekato AG, Schopfheim",
        href: "/zielgruppen#servicetechniker",
        hrefLabel: "Zielgruppe Service ansehen",
      },
      {
        number: "06",
        title: "Seit Jahren erfolgreich - auch online",
        quote:
          "Kundendiensttechniker trainiert Herr Grossmann seit mehreren Jahren bei uns - sehr erfolgreich. Seine freundlich formulierten Rückmeldungen gaben unseren Teilnehmern etwas zum Nachdenken, wie diese selbst sagten. Dem Trainer gelang es, trotz didaktisch einschränkender Online-Bedingungen, unsere jungen Männer bestens zu motivieren. Für Servicetechniker eines Anlagenbauers ist er ein motivierender Trainer - mit viel Erfahrung.",
        author: "Philipp Reimann",
        role: "Teamleiter CSS Central Function",
        company: "Saacke GmbH",
        href: "/praxisbeispiele#service",
        hrefLabel: "Service-Praxisbeispiel ansehen",
      },
      {
        number: "08",
        title: "Ein Serviceleiter über die Wirkung im Team",
        quote:
          "Sehr praxisnahes Coaching für Servicetechniker als 'Verkäufer'. Mit vielen Rollenspielen und Beispielen aus dem täglichen Leben sowie guten Lösungsansätzen, um Situationen im Kundenkontakt besser zu meistern. Als Leiter eines regionalen Serviceteams habe ich selber viele Situationen wiedererkannt, die ich bereits intuitiv genutzt habe, nach dem Gelernten aber viel gezielter einsetzen kann. Das Feedback aus dem Team an mich war sehr positiv.",
        author: "Klaus Dieter Nuss",
        role: "Serviceeinsatzleiter",
        company: "Saacke GmbH, Bremen",
        href: "/zielgruppen#teams-niederlassungen",
        hrefLabel: "Teams & Niederlassungen ansehen",
      },
    ],
  },
  {
    id: "fuehrung-transfer",
    title: "Transfer, Führung und persönliche Entwicklung",
    body: "Hier wird sichtbar, wie die Arbeit in Konflikten, Führungssituationen, Coaching und Gruppendynamik weiterträgt.",
    items: [
      {
        number: "03",
        title: "Techniken, die beruflich und privat tragen",
        quote:
          "Ich wollte mich noch einmal für die drei Tage bedanken, die du bei uns dein Konfliktlösungs-Training abgehalten hast. Deine Techniken kann ich nicht nur beruflich, sondern auch privat anwenden. Schon während der einzelnen Lektionen sind mir unzählige Situationen eingefallen, in denen ich das Gelernte umsetzen könnte. Besonders die Tipps zur Konfliktlösung, aber auch generell die Wirkung der eigenen (Körper-)Sprache, sind unfassbar hilfreich.",
        author: "Maximilian Sebald",
        role: "Junior Commercial Program Manager",
        company: "RAUMEDIC AG, Helmbrechts",
        href: "/themen-formate#fuehrung",
        hrefLabel: "Themen & Formate ansehen",
      },
      {
        number: "04",
        title: "Lockerheit, die Gruppen öffnet",
        quote:
          "Wir sind uns alle einig, dass wir viel mitnehmen konnten und auch im Alltag einiges umsetzen können. Ich finde es großartig, wie du mit Menschen umgehst und sie einzuschätzen weißt. Du hast solch eine Lockerheit in die Gruppe gebracht, dass man sich auch als 'Neuling' unter all den anderen wohlgefühlt und sich getraut hat, aus sich herauszukommen.",
        author: "Nina Pollak",
        role: "Human Resources",
        company: "Treofan Germany GmbH & Co. KG, Neunkirchen",
        href: "/zielgruppen#teams-niederlassungen",
        hrefLabel: "Teams & Niederlassungen ansehen",
      },
      {
        number: "07",
        title: "Viel gelernt - auch über mich selbst",
        quote:
          "Das Kommunikationscoaching bei Bernd hat mir gezeigt, welche Komplexität in verschiedenen Gesprächssituationen stecken kann. Die Teilnehmer wurden über den kompletten Zeitraum aktiv eingebunden, sodass zu keinem Zeitpunkt Langeweile aufzukommen drohte. In diesem Coaching habe ich viel gelernt, auch über mich selbst. Bernd schafft es, sein Wissen auf sehr lebhafte Weise weiterzugeben, und man erkennt, dass er große Freude an der Lehrtätigkeit hat. Ich würde jederzeit wieder teilnehmen!",
        author: "Fabian Rittweg",
        role: "Product Manager Application Technology",
        company: "RAUMEDIC AG",
        href: "/themen-formate#coaching",
        hrefLabel: "Persönliches Coaching ansehen",
      },
      {
        number: "09",
        title: "Vom Mitarbeiter zum Vorgesetzten",
        quote:
          "'Vom Mitarbeiter zum Vorgesetzten' - das Seminar ist sehr praxisnah gestaltet, individuelle Fragen wurden beantwortet und in den geplanten Ablauf integriert. Außerdem war das Seminar sehr kurzweilig gestaltet, auch bedingt durch den Trainer Bernd Grossmann. Tolles Seminar, was ich sehr empfehlen kann, für angehende Führungskräfte!",
        author: "Ariane Wode",
        role: "Prokuristin - stellv. Leitung Logistik",
        company: "Bioscientia Logistik GmbH",
        href: "/zielgruppen#technische-fuehrung",
        hrefLabel: "Technische Führung ansehen",
      },
    ],
  },
]

const boschRecommendation = {
  number: "10",
  title: "Empfohlen im Hause Bosch",
  quote:
    "Als Folge seiner langjährigen und erfolgreichen Zusammenarbeit mit einigen Werken der Robert Bosch Gruppe, bei denen er sich durch ein hohes Maß an Professionalität ausgezeichnet hat, möchte ich Sie bitten, sofern ein Bedarf für die von ihm angebotenen Trainingsleistungen besteht, auch Herrn Grossmann bei der Angebotsanforderung zu berücksichtigen.",
  author: "Dieter Heins Kron",
  role: "Bosch Service Solutions SRL / Robert Bosch GmbH",
  company: "Timisoara",
}

export const metadata: Metadata = {
  title: "Referenzen & Stimmen | Grossmann Training",
  description:
    "Zehn ausgewählte Kundenstimmen und Referenzen aus technischen Service-, Führungs- und Projektumfeldern.",
}

export default function ReferenzenStimmenPage() {
  return (
    <SiteShell>
      <main className="pt-28 sm:pt-32">
        <PageHero
          eyebrow="Referenzen & Stimmen"
          title="Was Kunden über die Zusammenarbeit sagen"
          body="Die Stimmen stammen aus technischen Service-, Führungs- und Projektkontexten. Sie zeigen Wiederbeauftragung, Alltagstauglichkeit und Wirkung in realen Situationen."
        />

        <section className="border-b border-border/70 bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {proofSignals.map((item) => (
                <div key={item.label} className="soft-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{item.label}</p>
                  <h2 className="mt-4 font-display text-[1.95rem] font-medium leading-[1.08] tracking-[-0.03em]">{item.value}</h2>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="video-kundenstimme" className="border-b border-border/70 bg-[#fbfaf6] py-18 sm:py-24" aria-labelledby="video-testimonial-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14 lg:px-8">
            <div>
              <SectionEyebrow>Kundenstimme im Video</SectionEyebrow>
              <h2 id="video-testimonial-heading" className="mt-5 max-w-xl font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                Ein Service Manager berichtet aus Auftraggebersicht
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                Als Kunde und Auftraggeber schildert er seine Erfahrung mit dem Training für Techniker im
                Kundenkontakt. Er ist Service Manager und kein Teilnehmer des Seminars.
              </p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">Mit dem Abspielen wird eine Verbindung zu YouTube hergestellt.</p>
            </div>
            <VideoTestimonial />
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-7 px-4 sm:px-6 lg:px-8">
            {featuredTestimonials.map((item, index) => (
              <article key={item.number} className={`overflow-hidden rounded-[32px] border border-border/70 ${index === 0 ? "bg-[#102f42] text-white" : "bg-[#fcfbf8]"}`}>
                <div className="grid lg:grid-cols-[1fr_18rem]">
                  <div className="p-8 sm:p-10 lg:p-12">
                    <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${index === 0 ? "text-white/75" : "text-primary"}`}>{item.number} · {item.eyebrow}</p>
                    <h2 className={`mt-5 max-w-3xl font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-[2.55rem] ${index === 0 ? "text-white" : "text-foreground"}`}>{item.title}</h2>
                    <blockquote className={`mt-6 max-w-4xl font-display text-[1.45rem] font-light italic leading-[1.65] sm:text-[1.8rem] ${index === 0 ? "text-white/92" : "text-foreground/86"}`}>
                      „{item.quote}“
                    </blockquote>
                    <p className={`mt-6 text-base leading-8 ${index === 0 ? "text-white/82" : "text-muted-foreground"}`}>{item.context}</p>
                    <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.18em] ${index === 0 ? "text-white/78" : "text-muted-foreground"}`}>
                      {item.author} · {item.role}
                    </p>
                    <p className={`mt-2 text-sm leading-7 ${index === 0 ? "text-white/78" : "text-muted-foreground"}`}>{item.company}</p>
                    <Link href={item.href} className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${index === 0 ? "text-white" : "text-primary"}`}>
                      {item.hrefLabel} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className={`flex min-h-[240px] items-center justify-center border-t p-8 lg:min-h-full lg:border-l lg:border-t-0 ${index === 0 ? "border-white/10 bg-white/5" : "border-border/70 bg-white"}`}>
                    <div className={`flex h-32 w-32 items-center justify-center rounded-full border font-display text-4xl ${index === 0 ? "border-white/20 bg-white/8 text-white" : "border-primary/15 bg-primary/8 text-primary"}`} aria-label={`Initialen von ${item.author}`}>
                      {item.initials}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border/70 bg-[#fbfaf6] py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionEyebrow>Weitere Stimmen</SectionEyebrow>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <h2 className="font-display text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">Nach Kontext geordnet, vollständig aus dem Arbeitsdokument</h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">Die Reihenfolge und Zuordnung folgen dem Top-10-Dokument. Wo kein freigegebenes Porträt vorliegt, wird bewusst mit Initialen statt mit einer fremden Person gearbeitet.</p>
            </div>

            <div className="mt-12 space-y-8">
              {testimonialGroups.map((group) => (
                <section key={group.id} className="rounded-[30px] border border-border/70 bg-white p-6 shadow-[0_12px_35px_rgba(16,33,43,0.04)] sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Kontext</p>
                      <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.03em]">{group.title}</h3>
                      <p className="mt-4 text-base leading-8 text-muted-foreground">{group.body}</p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                      {group.items.map((item) => (
                        <article key={item.number} className="soft-card p-6 sm:p-7">
                          <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">{item.number}</span>
                            <h4 className="font-display text-xl font-medium leading-snug">{item.title}</h4>
                          </div>
                          <blockquote className="mt-5 font-display text-[1.24rem] font-light italic leading-[1.7] text-foreground/86">„{item.quote}“</blockquote>
                          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.author} · {item.role}</p>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.company}</p>
                          <Link href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark">
                            {item.hrefLabel} <ArrowRight className="h-4 w-4" />
                          </Link>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <article className="mt-8 rounded-[30px] border border-border/70 bg-[#102f42] p-8 text-white shadow-[0_20px_60px_rgba(16,33,43,0.12)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72">{boschRecommendation.number} · Referenz & Erfahrung</p>
              <h3 className="mt-5 font-display text-3xl font-light leading-tight sm:text-4xl">{boschRecommendation.title}</h3>
              <blockquote className="mt-6 max-w-5xl font-display text-[1.45rem] font-light italic leading-[1.7] text-white/90">„{boschRecommendation.quote}“</blockquote>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/78">{boschRecommendation.author} · {boschRecommendation.role} · {boschRecommendation.company}</p>
            </article>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <div>
                <SectionEyebrow>Referenzerfahrung</SectionEyebrow>
                <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-[-0.03em]">Ausgewählte technische Unternehmen</h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground">Die Namen dokumentieren Arbeitskontexte. Sie sind kein Ersatz für die konkreten Stimmen und Praxisbeispiele.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {clientReferences.map((client) => (
                  <span key={client} className="rounded-full border border-border bg-[#fcfbf8] px-5 py-3 text-sm font-semibold text-foreground/80">{client}</span>
                ))}
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
