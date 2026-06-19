import type { ReactNode } from "react"

export default function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/72">
      <span className="h-px w-8 bg-primary/28" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
