"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Download, Github, Linkedin, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Terminal from "@/components/terminal"
import { marquee, profile } from "@/lib/data"
import { getImagePath } from "@/lib/utils"

function RotatingFocus() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.focus.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <span key={index} className="animate-rise inline-block text-primary">
      {profile.focus[index]}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center pt-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="animate-rise mb-8 inline-flex items-center gap-2 rounded-full border bg-card/60 px-4 py-1.5 text-sm backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </div>

          <h1
            className="animate-rise text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-muted-foreground/60">{profile.name.split(" ").slice(1).join(" ")}.</span>
          </h1>

          <p className="animate-rise mt-8 text-xl font-medium sm:text-2xl" style={{ animationDelay: "160ms" }}>
            {profile.role} building <RotatingFocus />
          </p>

          <p
            className="animate-rise mt-5 max-w-xl text-pretty text-lg text-muted-foreground"
            style={{ animationDelay: "240ms" }}
          >
            {profile.pitch}
          </p>

          <div className="animate-rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
              <a href="#projects">
                View my work
                <ArrowDown />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full bg-transparent px-7 text-base">
              <a href={getImagePath("/resume.pdf")} target="_blank" rel="noopener noreferrer" download>
                <Download />
                Resume
              </a>
            </Button>
            <div className="ml-1 flex items-center gap-1">
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <Github />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>

          <p
            className="animate-rise mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground"
            style={{ animationDelay: "400ms" }}
          >
            <MapPin className="size-3.5" />
            {profile.location}
          </p>
        </div>

        <div className="animate-rise" style={{ animationDelay: "300ms" }}>
          <Terminal />
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y bg-card/30 py-4 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0">
              {marquee.map((tech) => (
                <li key={tech} className="flex items-center gap-10 whitespace-nowrap pr-10 font-mono text-sm text-muted-foreground">
                  {tech}
                  <span className="text-primary">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
