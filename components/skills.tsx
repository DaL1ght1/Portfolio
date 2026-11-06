import SectionHeading from "@/components/section-heading"
import SpotlightCard from "@/components/spotlight-card"
import { skillGroups } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="container-page py-24 md:py-32">
      <SectionHeading
        index="03"
        label="skills"
        title="The toolbox."
        description="Always expanding through hands-on projects, internships and self-learning."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <SpotlightCard key={group.title} className="reveal group p-7">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {group.skills.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="chip hover:border-primary/50 hover:text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
