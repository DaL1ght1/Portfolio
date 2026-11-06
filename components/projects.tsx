"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Building2, Calendar, ExternalLink, Github, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import SectionHeading from "@/components/section-heading"
import SpotlightCard from "@/components/spotlight-card"
import ProjectCover from "@/components/project-cover"
import { projects, type Project } from "@/lib/data"
import { cn } from "@/lib/utils"

function projectYear(period: string) {
  if (/now|ongoing/i.test(period)) return "Now"
  const years = period.match(/\d{4}/g)
  return years ? years[years.length - 1] : ""
}

function FeaturedCard({
  project,
  wide,
  full,
  onOpen,
}: {
  project: Project
  wide: boolean
  full: boolean
  onOpen: () => void
}) {
  wide = wide || full
  return (
    <SpotlightCard className={cn("reveal group flex flex-col", wide && "md:col-span-2", full && "md:col-span-3")}>
      <button onClick={onOpen} className="flex h-full flex-col text-left focus-visible:outline-none">
        <div className={cn("relative overflow-hidden border-b", wide ? "h-56 md:h-72" : "h-48")}>
          <ProjectCover
            cover={project.cover}
            className="h-full w-full transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full border bg-background/80 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            {project.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
          {project.company && <p className="mt-1 text-sm text-primary">{project.company}</p>}
          <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.technologies.slice(0, wide ? 6 : 4).map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </button>
    </SpotlightCard>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [query, setQuery] = useState("")

  const featured = projects.filter((p) => p.featured)
  const categories = useMemo(() => Array.from(new Set(projects.map((p) => p.category))), [])

  const archive = projects.filter((p) => {
    const q = query.toLowerCase().trim()
    const matchesCategory = !filter || p.category === filter
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.company?.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q))
    return matchesCategory && matchesQuery
  })

  return (
    <section id="projects" className="container-page py-24 md:py-32">
      <SectionHeading
        index="04"
        label="projects"
        title="Selected work."
        description="A few things I've built recently — click any project for the full story."
      />

      {/* Bento: two cards per row, the wide one alternating sides; an odd last card fills its row. */}
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((project, i) => (
          <FeaturedCard
            key={project.id}
            project={project}
            wide={i % 4 === 0 || i % 4 === 3}
            full={i === featured.length - 1 && featured.length % 2 === 1}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      <div className="reveal mt-24">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Archive</h3>
            <p className="mt-1 text-sm text-muted-foreground">Everything, searchable by name or technology.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search — e.g. Scala, Kafka, vLLM"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-10 rounded-full bg-card/60 pl-10"
              aria-label="Search projects"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {[null, ...categories].map((category) => (
            <button
              key={category ?? "all"}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-xs transition-colors",
                filter === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {category ?? "All"}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border bg-card/40">
          {archive.length === 0 ? (
            <div className="px-6 py-12 text-center text-muted-foreground">
              <p>No projects match “{query}”.</p>
              <Button
                variant="link"
                onClick={() => {
                  setQuery("")
                  setFilter(null)
                }}
              >
                Clear search & filters
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {archive.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => setSelected(project)}
                    className="group grid w-full grid-cols-[3.5rem_1fr_auto] items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/50 md:grid-cols-[4rem_1.4fr_1fr_1.4fr_auto] md:px-6"
                  >
                    <span className="font-mono text-xs text-muted-foreground">{projectYear(project.period)}</span>
                    <span className="font-medium transition-colors group-hover:text-primary">{project.title}</span>
                    <span className="hidden text-sm text-muted-foreground md:block">{project.company ?? "Personal"}</span>
                    <span className="hidden truncate font-mono text-xs text-muted-foreground md:block">
                      {project.technologies.slice(0, 4).join(" · ")}
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl p-0">
          {selected && (
            <>
              <ProjectCover cover={selected.cover} className="h-56 border-b sm:h-72" />
              <div className="space-y-6 p-6 sm:p-8">
                <DialogHeader className="space-y-3 text-left">
                  <span className="font-mono text-xs text-primary">{selected.category}</span>
                  <DialogTitle className="text-3xl font-bold leading-tight tracking-tight">{selected.title}</DialogTitle>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    {selected.company && (
                      <span className="flex items-center gap-1.5">
                        <Building2 className="size-4" />
                        {selected.company}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-4" />
                      {selected.period}
                    </span>
                  </div>
                </DialogHeader>

                <DialogDescription className="text-base leading-relaxed">{selected.longDescription}</DialogDescription>

                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {(selected.github || selected.demo) && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {selected.github && (
                      <Button asChild className="rounded-full">
                        <a href={selected.github} target="_blank" rel="noopener noreferrer">
                          <Github />
                          View source
                        </a>
                      </Button>
                    )}
                    {selected.demo && (
                      <Button asChild variant="outline" className="rounded-full">
                        <a href={selected.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink />
                          Live demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
