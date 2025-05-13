import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  return (
    <section id="resume" className="section-container">
      <h2 className="section-title">Resume</h2>
      <div className="max-w-3xl mx-auto text-center">
        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <FileText className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">My Curriculum Vitae</h3>
            <p className="text-muted-foreground mb-6">
              Download my resume to learn more about my education, experience, and skills.
            </p>
            <Button asChild>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12">
          <h3 className="section-subtitle">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-medium mb-2">Programming Languages</h4>
              <p>C, C++, Java, Python, Shell</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Database Technologies</h4>
              <p>SQL, PL/SQL</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Web Development</h4>
              <p>JavaScript, TypeScript, HTML, CSS, React, PHP, Spring Boot, Angular</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Other Skills</h4>
              <p>Problem Solving, Ai, Xai, Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
