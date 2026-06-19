import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionEyebrow from "@/components/section-eyebrow"

type PageCtaPanelProps = {
  eyebrow: string
  title: string
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
}

export default function PageCtaPanel({
  eyebrow,
  title,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageCtaPanelProps) {
  return (
    <section className="border-t border-border/70 bg-[#102f42] py-18 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="dark-cta-panel">
          <div>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              {title}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 lg:mt-0">
            <Link href={primaryHref} className="btn-dark-primary">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={secondaryHref} className="btn-dark-secondary">
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
