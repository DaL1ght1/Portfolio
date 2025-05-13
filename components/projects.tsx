"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronDown, ChevronUp, Code, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

// This would typically come from an API or data file
const projects = [
  {
    id: 1,
    title: "Falsified Image Detection for Judicial Procedures",
    description:
      "An AI-based solution using Transfer Learning to detect falsified images, implementing multiple deep learning models achieving high accuracy in distinguishing authentic vs. forged images.",
    longDescription:
      "Developed an AI-based solution using Transfer Learning to detect falsified images. The system implements multiple deep learning models (e.g., MobileNetV3, EfficientNetV2) achieving high accuracy in distinguishing authentic vs. forged images. The project includes a comprehensive backend built with Spring Boot and a user-friendly frontend developed with Angular. The system uses Kafka for event streaming and Docker for containerization, making it scalable and robust for judicial procedures.",
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Albumentations",
      "Optuna",
      "timm",
      "SHAP",
      "LIME",
      "Grad-CAM",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "ZooKeeper",
      "ZipKin",
      "MongoDB",
      "JWT Authentication",
    ],
    github: "https://github.com/DaL1ght1/PCD-2025-40d",
    demo: null,
    period: "Feb 2025 - May 2025",
    image: "/FIDS.jpg?height=400&width=600",
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Enterprise Content Management (ECM)",
    description:
      "Developed an Enterprise Content Management web application during internship at BFI Group, implementing document management, content search, and user permissions.",
    longDescription:
      "Developed a comprehensive Enterprise Content Management (ECM) web application during my internship at BFI Group. The system features robust document management capabilities, advanced content search and indexing, and granular user permission management. Built with Spring Boot for the backend, Angular for the frontend, and PostgreSQL for data storage, the application provides businesses with a secure and efficient way to manage their digital content and workflows.",
    technologies: [
      "Spring Boot",
      "Angular",
      "TypeScript",
      "HTML",
      "SCSS",
      "PostgreSQL",
      "RESTful API",
      "JWT Authentication",
      "Docker",
    ],
    github: "https://github.com/DaL1ght1/ECM",
    demo: null,
    period: "June 2024 - Aug 2024",
    image: "/ECM.jpg?height=400&width=600",
    category: "Web Development",
  },
    {
    id: 3,
    title: "Rouli - Your Ultimate Mobility Solution",
    description: "A web application for seamless vehicle rentals including cars, motorbikes, and scooters.",
    longDescription:
      "Welcome to Rouli, the premier platform for seamless vehicle rentals! Whether you're looking for a car, a motorbike, or a scooter, we have a diverse fleet to meet your needs. This project includes a user-friendly web application that allows customers to rent vehicles effortlessly. Features include user registration and authentication, vehicle browsing and filtering, booking management, and an admin dashboard for inventory control.",
    technologies: ["PHP", "CSS", "JavaScript", "HTML", "MySQL", "User Authentication", "Responsive Design"],
    github: "https://github.com/DaL1ght1/Rouli",
    demo: null,
    period: "Jan 2024 - Mar 2024",
    image: "/Rooli.jpg?height=400&width=600",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Compiler Project",
    description:
      "A compiler implementation for a simple programming language, including lexical analysis, parsing, and code generation.",
    longDescription:
      "Developed a compiler for a simple programming language as part of a university project. The compiler includes all major components: lexical analyzer (scanner), syntax analyzer (parser), semantic analyzer, intermediate code generator, and code optimizer. The implementation demonstrates understanding of formal language theory, parsing techniques, symbol tables, type checking, and code generation strategies. The compiler successfully translates source code into executable machine code or bytecode.",
    technologies: ["C++", "Compiler Design", "Parsing Algorithms", "Code Generation"],
    github: "https://github.com/DaL1ght1/CompilerProject",
    demo: null,
    period: "Sep 2023 - Dec 2023",
    image: "/Compiler.jpg?height=400&width=600",
    category: "Software Development",
  },

  {
    id: 5,
    title: "Responsive Navbar and Footer Components",
    description: "Reusable and customizable navbar and footer components for web applications with responsive design.",
    longDescription:
      "Created highly reusable and customizable navbar and footer components for web applications. These components feature responsive design that adapts seamlessly to different screen sizes, from mobile to desktop. The navbar includes features such as dropdown menus, mobile hamburger menu, and smooth transitions. The footer component includes sections for links, social media, contact information, and newsletter signup. Both components are built with accessibility in mind and follow modern design principles.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Accessibility", "UI/UX"],
    github: "https://github.com/DaL1ght1/Navbar-footer",
    demo: null,
    period: "Oct 2023 - Nov 2023",
    image: "/Nav.jpg?height=400&width=600",
    category: "Web Development",
  },
  
    {
    id: 6,
    title: "Finance Application",
    description:
      "A financial management application with features for tracking expenses, managing investments, and financial planning.",
    longDescription:
      "Developed a comprehensive financial management application that helps users track expenses, manage investments, and plan their financial future. The application includes features such as expense categorization, budget planning, investment portfolio tracking, and financial goal setting. The system provides insightful visualizations and reports to help users understand their financial health and make informed decisions.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DaL1ght1/finance",
    demo: null,
    period: "Nov 2023 - Jan 2024",
    image: "/Finance.jpg?height=400&width=600",
    category: "Web Development",
  },

]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  const filteredProjects = filter ? projects.filter((project) => project.category === filter) : projects

  const categories = Array.from(new Set(projects.map((project) => project.category)))

  return (
    <section id="projects" className="section-container bg-muted/50">
      <h2 className="section-title">Projects</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Button
          variant={filter === null ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter(null)}
          className="rounded-full"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className={cn(
              "flex flex-col h-full transition-all duration-300 relative group overflow-hidden border-2",
              hoveredProject === project.id ? "border-primary shadow-lg scale-[1.02]" : "border-border",
            )}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project image (visible when not hovered) */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="secondary" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-bold text-white drop-shadow-md">{project.title}</h3>
              </div>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{project.title}</CardTitle>
                <span className="text-xs text-muted-foreground">{project.period}</span>
              </div>
              <CardDescription className="mt-2">
                {expandedProject === project.id ? project.longDescription : project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mt-2">
                {(expandedProject === project.id ? project.technologies : project.technologies.slice(0, 5)).map(
                  (tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ),
                )}
                {expandedProject !== project.id && project.technologies.length > 5 && (
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary"
                    onClick={() => toggleProject(project.id)}
                  >
                    +{project.technologies.length - 5} more
                  </Badge>
                )}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <div className="flex gap-2">
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild size="sm">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={() => toggleProject(project.id)} className="ml-auto">
                {expandedProject === project.id ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-1" />
                    Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-1" />
                    More
                  </>
                )}
              </Button>
            </CardFooter>

            {/* Hover overlay with additional details for desktop */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none md:pointer-events-auto hidden md:flex"
              style={{
                opacity: hoveredProject === project.id ? 1 : 0,
                transform: hoveredProject === project.id ? "translateY(0)" : "translateY(10px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-background/95 backdrop-blur-sm"></div>
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div>
                  <Badge variant="outline" className="bg-background/20 text-white mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="font-bold text-2xl mb-3 text-white">{project.title}</h3>
                  <p className="mb-4 text-white/90 line-clamp-6">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 8).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 8 && (
                      <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                        +{project.technologies.length - 8} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-3 mt-4 pointer-events-auto">
                  {project.github && (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm" className="bg-white text-primary hover:bg-white/90">
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                  {!project.github && !project.demo && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      <Code className="mr-2 h-4 w-4" />
                      Private Project
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
