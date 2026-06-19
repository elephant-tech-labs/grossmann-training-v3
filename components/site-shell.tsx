import type { ReactNode } from "react"
import HomeV3Footer from "@/components/home-v3-footer"
import HomeV3Header from "@/components/home-v3-header"

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeV3Header />
      {children}
      <HomeV3Footer />
    </div>
  )
}
