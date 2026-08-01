"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, Phone, X } from "lucide-react"

const quickNav = [
  { label: "Zielgruppen", href: "/zielgruppen" },
  { label: "Themen & Formate", href: "/themen-formate" },
  { label: "Praxisbeispiele", href: "/praxisbeispiele" },
  { label: "Stimmen", href: "/referenzen-stimmen" },
  { label: "Über Bernd", href: "/ueber-bernd" },
]

const menuSections = [
  {
    step: "01 · Für wen?",
    title: "Zielgruppen",
    href: "/zielgruppen",
    links: [
      { label: "Servicetechniker & Monteure", href: "/zielgruppen#servicetechniker" },
      { label: "Projekt- & Objektleitung", href: "/zielgruppen#projekt-objekt" },
      { label: "Technische Führungskräfte", href: "/zielgruppen#technische-fuehrung" },
      { label: "Teams & Niederlassungen", href: "/zielgruppen#teams-niederlassungen" },
      { label: "Hotline & Telefonkontakt", href: "/zielgruppen#hotline" },
    ],
  },
  {
    step: "02 · Wobei?",
    title: "Themen",
    href: "/themen-formate#themen",
    links: [
      { label: "Kundenkontakt im Service", href: "/themen-formate#kundenkontakt" },
      { label: "Führung im technischen Umfeld", href: "/themen-formate#fuehrung" },
      { label: "Verhandlung & Moderation", href: "/themen-formate#verhandlung" },
      { label: "Mitarbeiterführung", href: "/themen-formate#mitarbeiterfuehrung" },
      { label: "Schnittstellenarbeit", href: "/themen-formate#schnittstellenarbeit" },
    ],
  },
  {
    step: "03 · Wie?",
    title: "Veranstaltungsformen",
    href: "/themen-formate#formate",
    links: [
      { label: "Seminare", href: "/themen-formate#seminare" },
      { label: "Team- & Niederlassungsentwicklung", href: "/themen-formate#team-entwicklung" },
      { label: "Persönliches Coaching", href: "/themen-formate#coaching" },
    ],
  },
  {
    step: "04 · Beweis",
    title: "Praxis & Stimmen",
    href: "/praxisbeispiele",
    links: [
      { label: "Praxisbeispiele", href: "/praxisbeispiele" },
      { label: "Referenzen & Stimmen", href: "/referenzen-stimmen" },
      { label: "Video-Kundenstimme", href: "/referenzen-stimmen#video-kundenstimme" },
    ],
  },
  {
    step: "05 · Wer?",
    title: "Bernd Grossmann",
    href: "/ueber-bernd",
    links: [
      { label: "Erfahrung & Haltung", href: "/ueber-bernd" },
      { label: "Qualifikation", href: "/ueber-bernd#qualifikation" },
      { label: "Grossmann Training & Kollegen", href: "/ueber-bernd#kollegen" },
      { label: "FAQ", href: "/faq" },
    ],
  },
]

export default function HomeV3Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    const route = href.split("#")[0]
    return pathname === route || (route !== "/" && pathname.startsWith(`${route}/`))
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/70 bg-background/96 shadow-[0_10px_35px_rgba(16,33,43,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-background/82 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-[0_8px_22px_rgba(16,33,43,0.05)] transition-colors hover:border-primary/35 hover:text-primary"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Website-Menü schließen" : "Gesamte Website-Struktur öffnen"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link href="/" className="flex items-center" aria-label="Grossmann Training Startseite">
            <Image
              src="/images/brand/grossmann-training-logo.svg"
              alt="Grossmann Training"
              width={216}
              height={48}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-5" aria-label="Direktnavigation">
          {quickNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+49713515764"
            className="hidden items-center gap-2 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span>+49 7135 15764</span>
          </a>
          <Link
            href="/kontakt"
            aria-current={pathname === "/kontakt" ? "page" : undefined}
            className={`whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(14,108,157,0.18)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:px-5 ${
              pathname === "/kontakt" ? "bg-primary-dark ring-1 ring-primary/25" : "bg-primary"
            }`}
          >
            <span className="hidden sm:inline">Erstgespräch</span>
            <span className="sm:hidden">Kontakt</span>
          </Link>
        </div>
      </div>

      {open ? (
        <div id="site-menu" className="fixed inset-x-0 top-[76px] h-[calc(100dvh-76px)] overflow-y-auto border-t border-border/70 bg-[#fffdf9]">
          <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
            <div className="flex flex-col gap-5 border-b border-border/70 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Website-Übersicht</p>
                <h2 className="mt-3 max-w-2xl font-display text-3xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
                  Vom Anliegen zur passenden Zusammenarbeit
                </h2>
              </div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark">
                Startseite <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <nav className="grid gap-x-8 gap-y-9 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" aria-label="Gesamte Website-Struktur">
              {menuSections.map((section) => (
                <section key={section.step} className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{section.step}</p>
                  <Link href={section.href} className="mt-3 block font-display text-2xl font-medium leading-tight text-foreground hover:text-primary">
                    {section.title}
                  </Link>
                  <div className="mt-4 flex flex-col gap-2.5">
                    {section.links.map((item) => (
                      <Link key={item.href} href={item.href} className="text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </nav>

            <div className="grid gap-4 border-t border-border/70 pt-6 sm:grid-cols-2">
              <Link href="/faq" className="flex items-center justify-between rounded-[22px] border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground hover:border-primary/35">
                Häufige Fragen <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
              <Link href="/kontakt" className="flex items-center justify-between rounded-[22px] bg-[#102f42] px-5 py-4 text-sm font-semibold text-white hover:bg-[#12394f]">
                Erstgespräch vereinbaren <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
