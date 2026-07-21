import type { ReactNode } from "react"

export default function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex max-w-full items-start gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
      <span className="mt-[0.65em] h-px w-8 shrink-0 bg-primary/28" aria-hidden="true" />
      <span className="min-w-0 [overflow-wrap:anywhere]">{children}</span>
    </p>
  )
}
