import Image from "next/image"
import Link from "next/link"

const footerLinks = [
  { label: "Servicetechniker", href: "/servicetechniker" },
  { label: "Führungskräfte", href: "/trainings" },
  { label: "Unternehmen", href: "/formats" },
  { label: "Praxisbeispiele", href: "/case-studies" },
  { label: "Über Bernd", href: "/about" },
  { label: "Kontakt", href: "/kontakt" },
]

export default function HomeV3Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#102f42] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <div className="max-w-md">
          <Image src="/images/logo_white.svg" alt="Grossmann Training" width={190} height={40} className="h-10 w-auto" />
          <p className="mt-6 text-sm leading-7 text-white/70">
            Kommunikation, Führung und Wirkung in technischen Serviceumfeldern. Ruhig, praxisnah und mit Blick auf das,
            was im Alltag wirklich trägt.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/52">Navigation</h2>
          <nav className="mt-5 flex flex-col gap-3" aria-label="Footer Navigation">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/74 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/52">Kontakt</h2>
          <div className="mt-5 space-y-3 text-sm text-white/74">
            <p>Brackenheim, Deutschland</p>
            <a href="tel:+49713515764" className="block transition-colors hover:text-white">
              +49 7135 15764
            </a>
            <a href="mailto:info@grossmann-training.de" className="block transition-colors hover:text-white">
              info@grossmann-training.de
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs text-white/52 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} Grossmann Training</p>
          <div className="flex gap-5">
            <Link href="/imprint" className="transition-colors hover:text-white">
              Impressum
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
