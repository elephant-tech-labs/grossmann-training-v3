"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"

const navItems = [
  { label: "Zielgruppen", href: "/zielgruppen" },
  { label: "Themen & Formate", href: "/themen-formate" },
  { label: "Praxisbeispiele", href: "/praxisbeispiele" },
  { label: "Stimmen", href: "/referenzen-stimmen" },
  { label: "FAQ", href: "/faq" },
  { label: "Über Bernd", href: "/ueber-bernd" },
]

export default function HomeV3Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/92 shadow-[0_10px_35px_rgba(16,33,43,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-background/78 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Grossmann Training Startseite">
          <Image src="/images/logo2.svg" alt="Grossmann Training" width={190} height={44} className="h-10 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+49713515764"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span>+49 7135 15764</span>
          </a>
          <a
            href="/kontakt"
            aria-current={pathname === "/kontakt" ? "page" : undefined}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(14,108,157,0.18)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark ${
              pathname === "/kontakt" ? "bg-primary-dark ring-1 ring-primary/25" : "bg-primary"
            }`}
          >
            Erstgespräch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`mobile-nav-link ${isActive(item.href) ? "mobile-nav-link-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/kontakt"
              className={`mt-3 rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white ${
                pathname === "/kontakt" ? "bg-primary-dark" : "bg-primary"
              }`}
              onClick={() => setOpen(false)}
            >
              Erstgespräch vereinbaren
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
