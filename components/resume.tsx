"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, Eye, FileText } from "lucide-react"
import { getImagePath } from "@/lib/utils"

export default function Resume() {
  const resumePath = getImagePath("/resume.pdf")

  return (
      <section id="resume" className="section-container">
        <h2 className="section-title">Resume</h2>
        <div className="max-w-3xl mx-auto text-center">
          <Card className="gradient-border">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-2xl mb-4">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Curriculum Vitae</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Download my complete CV or preview it directly inside your browser.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-6">
                  <a href={resumePath} target="_blank" rel="noopener noreferrer" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="rounded-full px-6">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview CV
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[85vh] p-4 flex flex-col">
                    <DialogHeader className="mb-2">
                      <DialogTitle>Curriculum Vitae Preview</DialogTitle>
                    </DialogHeader>
                    <iframe
                        src={resumePath}
                        className="w-full h-full rounded-md border"
                        title="Khalil Krifi Resume"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Technical Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-1">Languages</h4>
                  <p className="text-sm text-muted-foreground">Scala, Java, Python, TypeScript, C, C++, SQL, Shell</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-1">Backend & Cloud</h4>
                  <p className="text-sm text-muted-foreground">Spring Boot, Pekko HTTP, FastAPI, GraphQL, Kafka, Kubernetes, ArgoCD</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-1">AI & Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">vLLM, LangGraph, PyTorch, Optuna, Explainable AI </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-1">Databases & Observability</h4>
                  <p className="text-sm text-muted-foreground">PostgreSQL, OpenSearch, Redis, Elasticsearch, Prometheus, Grafana</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}