import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"
import SkillsSection from "./skills-section"

export default function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-lg mb-6">
            I'm a second-year Software Engineer Student at the National School of Computer Science (ENSI) with a strong
            interest in Artificial Intelligence, Machine Learning, and MLOps. I'm currently seeking a summer internship
            to apply and expand my skills in these areas.
          </p>
          <p className="text-lg mb-6">
            My academic background has provided me with a solid foundation in computer science principles, and I've
            developed practical skills through various projects and coursework. I'm passionate about leveraging AI and
            ML technologies to solve real-world problems and am eager to contribute to innovative projects in these
            fields.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Python",
              "Java",
              "C/C++",
              "JavaScript",
              "TypeScript",
              "React",
              "Spring Boot",
              "Angular",
              "SQL",
              "PyTorch",
              "TensorFlow",
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <div className="mt-2 space-y-3">
                    <div>
                      <p className="font-medium">National School of Computer Science (ENSI)</p>
                      <p className="text-sm text-muted-foreground">Computer Science Engineering Diploma</p>
                      <p className="text-sm text-muted-foreground">Sept 2023 – June 2026</p>
                    </div>
                    <div>
                      <p className="font-medium">Preparatory Institute for Engineering Studies in Nabeul (IPEIN)</p>
                      <p className="text-sm text-muted-foreground">Engineering preparatory school diploma</p>
                      <p className="text-sm text-muted-foreground">Sept 2021 – June 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Experience</h3>
                  <div className="mt-2">
                    <p className="font-medium">BFI Group, Software Engineer Intern</p>
                    <p className="text-sm text-muted-foreground">June 2024 – Aug 2024 | Tunis, Tunisia</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      <li>Developed an Enterprise Content Management (ECM) web application</li>
                      <li>
                        Implemented document management, content search and indexing, and user permission management
                      </li>
                      <li>Utilized Spring Boot, Angular, and PostgreSQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <SkillsSection />
      </div>
    </section>
  )
}
