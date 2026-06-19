import SectionEyebrow from "@/components/section-eyebrow"

type PageHeroProps = {
  eyebrow: string
  title: string
  body: string
}

export default function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="page-hero-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="page-hero-grid">
          <div>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h1 className="page-title">{title}</h1>
          </div>
          <div className="lg:pb-2 lg:border-l lg:border-border/70 lg:pl-8">
            <p className="page-copy max-w-md">{body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
