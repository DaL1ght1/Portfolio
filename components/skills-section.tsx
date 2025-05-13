import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Server, Database, Braces, BookOpen } from "lucide-react"

// Define skill categories
const skills = {
  languages: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL", "Shell"],
  frontend: ["HTML", "CSS", "React", "Angular", "Bootstrap", "Tailwind CSS"],
  backend: ["Spring Boot","Java", "RESTful API"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  aiml: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "SHAP", "Lime", "Grad-Cam"],
  tools: ["Git", "Github","Docker", "Kafka", "Jupyter Notebooks","Zipkin"],
}

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-center">Technologies I've Worked With</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          title="Programming Languages"
          skills={skills.languages}
          icon={<Code className="h-5 w-5" />}
          color="bg-blue-100 dark:bg-blue-900/20"
          textColor="text-blue-600 dark:text-blue-400"
        />

        <SkillCard
          title="Frontend Development"
          skills={skills.frontend}
          icon={<Globe className="h-5 w-5" />}
          color="bg-purple-100 dark:bg-purple-900/20"
          textColor="text-purple-600 dark:text-purple-400"
        />

        <SkillCard
          title="Backend Development"
          skills={skills.backend}
          icon={<Server className="h-5 w-5" />}
          color="bg-green-100 dark:bg-green-900/20"
          textColor="text-green-600 dark:text-green-400"
        />

        <SkillCard
          title="Databases"
          skills={skills.databases}
          icon={<Database className="h-5 w-5" />}
          color="bg-yellow-100 dark:bg-yellow-900/20"
          textColor="text-yellow-600 dark:text-yellow-400"
        />

        <SkillCard
          title="AI & Machine Learning"
          skills={skills.aiml}
          icon={<Braces className="h-5 w-5" />}
          color="bg-red-100 dark:bg-red-900/20"
          textColor="text-red-600 dark:text-red-400"
        />

        <SkillCard
          title="Tools & Technologies"
          skills={skills.tools}
          icon={<BookOpen className="h-5 w-5" />}
          color="bg-indigo-100 dark:bg-indigo-900/20"
          textColor="text-indigo-600 dark:text-indigo-400"
        />
      </div>

      <p className="text-center text-muted-foreground mt-6">
        I'm continuously learning and expanding my skills in software development, with a focus on AI and ML
        technologies.
      </p>
    </div>
  )
}

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  color: string
  textColor: string
}

function SkillCard({ title, skills, icon, color, textColor }: SkillCardProps) {
  return (
    <Card className="overflow-hidden border-t-4" style={{ borderTopColor: `var(--${textColor.split("-")[1]})` }}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-md ${color}`}>
            <span className={textColor}>{icon}</span>
          </div>
          <h4 className="font-medium text-lg">{title}</h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="font-normal">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
