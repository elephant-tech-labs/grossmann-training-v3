"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { useState } from "react"

const videoId = "g6xvaUb9eSA"

type VideoTestimonialProps = {
  className?: string
  compact?: boolean
}

export default function VideoTestimonial({ className = "", compact = false }: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div
      className={`relative aspect-video overflow-hidden bg-[#102f42] shadow-[0_24px_70px_rgba(16,33,43,0.16)] ${
        compact ? "rounded-[24px]" : "rounded-[30px]"
      } ${className}`}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Teilnehmerstimme: Training für Techniker im Kundenkontakt"
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 block h-full w-full cursor-pointer overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
          aria-label="Teilnehmerstimme auf YouTube abspielen"
        >
          <Image
            src="/images/grossmann/youtube-testimonial-techniker-kundenkontakt-thumbnail.jpg"
            alt="Teilnehmerstimme zum Training für Techniker im Kundenkontakt"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            sizes={compact ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 64vw"}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#081d2a]/50 via-transparent to-transparent" />
          <span
            className={`absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-full bg-white/96 font-semibold text-[#10212b] shadow-[0_12px_34px_rgba(0,0,0,0.24)] transition-transform duration-200 group-hover:-translate-y-0.5 sm:bottom-6 sm:left-6 ${
              compact ? "py-2 pl-2 pr-4 text-xs sm:text-sm" : "py-2.5 pl-2.5 pr-5 text-sm"
            }`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white sm:h-10 sm:w-10">
              <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
            </span>
            Video abspielen
          </span>
        </button>
      )}
    </div>
  )
}
