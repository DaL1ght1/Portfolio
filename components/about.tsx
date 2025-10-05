"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Users } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="about" className="section-container bg-muted/30">
      <h2 className="section-title">About Me</h2>

      <div className="max-w-4xl mx-auto mb-16 text-center">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          I'm a passionate Software Engineering student at <span className="text-primary font-semibold">ENSI (National School of Computer Science)</span>,
          specializing in AI/ML, Full-Stack Development, and DevOps. With hands-on experience in building scalable applications
          and working with cutting-edge technologies, I'm eager to contribute to innovative projects and continue growing as a developer.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Education Card */}
        <Card
          className={cn(
            "transition-all duration-500 hover:shadow-2xl cursor-default gradient-border",
            hoveredCard === "education" && "scale-105 animate-glow"
          )}
          onMouseEnter={() => setHoveredCard("education")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/50">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary animate-pulse" />
                <div className="mb-2">
                  <p className="font-bold text-lg">Computer Science Engineering</p>
                  <p className="text-primary font-semibold">ENSI, University of Manouba</p>
                  <p className="text-sm text-muted-foreground">Sept 2023 – Jun 2026</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pursuing a comprehensive engineering degree with focus on software development,
                  artificial intelligence, and modern computing technologies.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary/70" />
                <div className="mb-2">
                  <p className="font-bold text-lg">Engineering Preparatory Studies</p>
                  <p className="text-primary font-semibold">IPEIN, Nabeul</p>
                  <p className="text-sm text-muted-foreground">Sept 2021 – Jun 2023</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Intensive two-year program covering mathematics, physics, and computer science fundamentals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience Card */}
        <Card
          className={cn(
            "transition-all duration-500 hover:shadow-2xl cursor-default gradient-border",
            hoveredCard === "experience" && "scale-105 animate-glow"
          )}
          onMouseEnter={() => setHoveredCard("experience")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl">Experience</h3>
            </div>

            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
              {/* Fleet Management */}
              <div className="relative pl-6 border-l-2 border-primary/50">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary animate-pulse" />
                <div className="mb-2">
                  <p className="font-bold text-lg">Software Engineer Intern</p>
                  <p className="text-primary font-semibold">Omnilink - Fleet Management System</p>
                  <p className="text-sm text-muted-foreground">Jul 2025 – Sep 2025 | Tunis, Tunisia (Remote)</p>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Built scalable Fleet Management solution with Docker & Kubernetes</li>
                  <li>Implemented CI/CD pipelines with GitHub Actions</li>
                  <li>Added Kafka for event-driven messaging & Keycloak for SSO</li>
                  <li>Developed GraphQL microservices with Spring Boot & Angular</li>
                </ul>
              </div>

              {/* BI Intern */}
              <div className="relative pl-6 border-l-2 border-primary/40">
                <div className="absolute -left-[8px] top-2 w-3.5 h-3.5 rounded-full bg-primary/80" />
                <div className="mb-2">
                  <p className="font-bold text-lg">Business Intelligence Intern</p>
                  <p className="text-primary font-semibold">BFI Group - Oracle Analytics Server</p>
                  <p className="text-sm text-muted-foreground">Jul 2025 – Aug 2025 | Tunis, Tunisia (On-site)</p>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Delivered Oracle Analytics dashboards for central bank client</li>
                  <li>Produced bilingual user/technical guides (FR/EN)</li>
                  <li>Validated financial supervision formulas</li>
                </ul>
              </div>

              {/* Research Intern */}
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary/70" />
                <div className="mb-2">
                  <p className="font-bold text-lg">Research/Engineering Intern</p>
                  <p className="text-primary font-semibold">Laval University - Falsified Image Detection</p>
                  <p className="text-sm text-muted-foreground">Feb 2025 – May 2025 | Quebec City, Canada (Remote)</p>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Trained explainable image-forensics models (MobileNetV3, Optuna)</li>
                  <li>Applied SHAP, LIME, Grad-CAM for interpretable outputs</li>
                  <li>Integrated model into Spring Boot + Angular web app</li>
                </ul>
              </div>

              {/* ECM Intern */}
              <div className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full bg-primary/60" />
                <div className="mb-2">
                  <p className="font-bold text-lg">Software Engineer Intern</p>
                  <p className="text-primary font-semibold">BFI Group - Enterprise Content Management</p>
                  <p className="text-sm text-muted-foreground">Jun 2024 – Aug 2024 | Tunis, Tunisia (On-site)</p>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Implemented ECM web app (Spring Boot + Angular)</li>
                  <li>Added search/indexing with Elasticsearch</li>
                  <li>Built role-based access control with PostgreSQL</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leadership & Extra-curricular */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card
          className={cn(
            "transition-all duration-500 hover:shadow-2xl cursor-default gradient-border",
            hoveredCard === "leadership" && "scale-105"
          )}
          onMouseEnter={() => setHoveredCard("leadership")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl">Leadership</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Lead academic project teams (design, CI/CD, deployment)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Treasurer of IEEE ENSI Student Branch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Active contributor to ENSI social life and technical communities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Write technical notes and documentation for team projects</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className={cn(
            "transition-all duration-500 hover:shadow-2xl cursor-default gradient-border",
            hoveredCard === "achievements" && "scale-105"
          )}
          onMouseEnter={() => setHoveredCard("achievements")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-2xl">Highlights</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Developed AI-powered image forensics system with explainable AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Built production-ready microservices with Kubernetes & Docker</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Delivered BI dashboards for financial institutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Contributed to multiple open-source projects on GitHub</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
