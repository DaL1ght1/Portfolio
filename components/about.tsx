import { Award, GraduationCap, Users } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import SpotlightCard from "@/components/spotlight-card"
import { education, experience, highlights, leadership, profile, projects } from "@/lib/data"

const stats = [
  { value: `${experience.length}`, label: "internships across Tunisia & Canada" },
  { value: `${projects.length}+`, label: "projects shipped, from compilers to LLM platforms" },
  { value: "'26", label: "ENSI engineering graduate with Highest Honors" },
]

function ListCard({ icon: Icon, title, items }: { icon: typeof Award; title: string; items: string[] }) {
  return (
    <SpotlightCard className="reveal p-7">
      <div className="mb-5 flex items-center gap-3">
        <Icon className="size-5 text-primary" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  )
}

export default function About() {
  return (
    <section id="about" className="container-page py-24 md:py-32">
      <SectionHeading index="01" label="about" title="Engineering reliable systems, end to end." />

      <div className="grid gap-4 lg:grid-cols-3">
        <SpotlightCard className="reveal p-8 lg:col-span-2 lg:p-10">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {profile.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </SpotlightCard>

        <div className="grid gap-4">
          {stats.map((stat) => (
            <SpotlightCard key={stat.label} className="reveal flex items-center gap-5 p-6">
              <span className="text-4xl font-bold tracking-tight text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </SpotlightCard>
          ))}
        </div>

        <SpotlightCard className="reveal p-7">
          <div className="mb-5 flex items-center gap-3">
            <GraduationCap className="size-5 text-primary" />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.degree} className="border-l-2 border-primary/40 pl-4">
                <p className="font-semibold">{e.degree}</p>
                <p className="text-sm text-primary">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{e.period}</p>
                <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
              </div>
            ))}
          </div>
        </SpotlightCard>

        <ListCard icon={Award} title="Highlights" items={highlights} />
        <ListCard icon={Users} title="Leadership" items={leadership} />
      </div>
    </section>
  )
}
