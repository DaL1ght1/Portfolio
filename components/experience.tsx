import SectionHeading from "@/components/section-heading"
import SpotlightCard from "@/components/spotlight-card"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="container-page py-24 md:py-32">
      <SectionHeading
        index="02"
        label="experience"
        title="Where I've shipped."
        description="Internships spanning LLM platforms, cloud-native microservices, research and enterprise software."
      />

      <ol className="relative space-y-6 md:space-y-8">
        {/* Timeline rail */}
        <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-border md:left-[207px]" />

        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="reveal relative grid gap-3 pl-8 md:grid-cols-[200px_1fr] md:gap-8 md:pl-0">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-2 size-[15px] rounded-full border-2 border-background md:left-[200px] ${
                i === 0 ? "bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.2)]" : "bg-muted-foreground/40"
              }`}
            />
            <div className="pt-1 font-mono text-sm text-muted-foreground md:pr-8 md:text-right">
              <p>{job.period}</p>
              <p className="mt-1 text-xs">{job.location}</p>
            </div>

            <SpotlightCard className="p-6 md:ml-6 md:p-7">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <span className="text-primary">@ {job.company}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{job.project}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 font-mono text-primary">›</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </li>
        ))}
      </ol>
    </section>
  )
}
