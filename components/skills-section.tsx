"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Globe, Server, Database, Cloud, Cpu, LayoutGrid, BarChart2 } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import SkillsChart from "@/components/skills-chart"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Web & Frontend",
    icon: Globe,
    skills: ["Angular", "React", "Next.js"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      "Spring Boot",
      "FastAPI",
      "GraphQL",
      "REST APIs",
      "Microservices",
      "WebSockets",
      "Scala",
      "Tapir",
      "Pekko HTTP",
      "jOOQ",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "DevOps & Infrastructure",
    icon: Cloud,
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "Apache Kafka",
      "Kustomize",
      "ArgoCD",
      "GitOps",
      "Prometheus",
      "Grafana",
      "Sentry",
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    skills: [
      "PyTorch",
      "LangGraph",
      "vLLM",
      "Qwen2.5-Coder",
      "Optuna",
      "Albumentations",
      "SHAP",
      "LIME",
      "Grad-CAM",
    ],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    title: "Databases & Data",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "OpenSearch",
      "Apache Spark",
      "Hadoop",
      "HBase",
      "Power BI",
    ],
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10",
  },
]

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeView, setActiveView] = useState<"grid" | "charts">("grid")

  return (
      <section id="skills" className="section-container bg-muted/30">
        <h2 className="section-title">Technical Skills</h2>

        {/* View Toggle Buttons */}
        <div className="flex justify-center items-center gap-3 mb-10">
          <Button
              variant={activeView === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveView("grid")}
              className="rounded-full px-5"
          >
            <LayoutGrid className="mr-2 h-4 w-4" />
            Skill Categories
          </Button>
          <Button
              variant={activeView === "charts" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveView("charts")}
              className="rounded-full px-5"
          >
            <BarChart2 className="mr-2 h-4 w-4" />
            Interactive Analytics
          </Button>
        </div>

        {activeView === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => {
                const Icon = category.icon
                return (
                    <Card
                        key={category.title}
                        className={cn(
                            "transition-all duration-500 hover:shadow-2xl cursor-default gradient-border overflow-hidden",
                            hoveredIndex === index && "scale-105 animate-glow"
                        )}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                    >
                      <div className={cn("h-2 bg-gradient-to-r", category.color)} />
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={cn("p-3 rounded-xl", category.bgColor)}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="font-bold text-lg">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                              <Badge
                                  key={skill}
                                  variant="secondary"
                                  className={cn(
                                      "transition-all duration-300",
                                      hoveredIndex === index && "scale-105 shadow-sm"
                                  )}
                                  style={{
                                    animationDelay: `${skillIndex * 0.05}s`,
                                  }}
                              >
                                {skill}
                              </Badge>
                          ))}
                        </div>

                        <div className="mt-4 text-sm text-muted-foreground">
                          {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                        </div>
                      </CardContent>
                    </Card>
                )
              })}
            </div>
        ) : (
            <div className="max-w-5xl mx-auto">
              <SkillsChart />
            </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuously expanding my technical expertise through hands-on projects, internships, and self-learning.
            Passionate about staying current with emerging technologies and best practices in software development.
          </p>
        </div>
      </section>
  )
}