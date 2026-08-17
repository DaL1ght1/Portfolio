"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Calendar, Building2, Search } from "lucide-react"
import { cn, getImagePath } from "@/lib/utils"

const projects = [
    {
        id: 1,
        title: "Natural Language Query Interface for Logs & Metrics",
        company: "Cognira",
        description: "AI-powered platform for querying logs and metrics using natural language",
        longDescription:
            "Built an event-driven 3-service platform that translates natural language into OpenSearch DSL and PromQL queries. Developed a Scala backend with Tapir, Pekko HTTP, and jOOQ, a Python AI worker using FastAPI and LangGraph, and a Next.js 14 frontend, decoupled through Apache Kafka. Implemented a schema-aware LLM pipeline with a self-correction loop, semantic caching with Redis, DSL security validation, multi-tenant RBAC, TOTP MFA, encrypted API keys, and JWT-based authentication. Deployed the platform on Kubernetes using Kustomize and ArgoCD GitOps, with Prometheus and Grafana observability and load testing using Locust and K6.",
        technologies:["Scala", "Python", "FastAPI", "LangGraph", "Next.js", "OpenSearch", "PromQL", "Apache Kafka", "Redis", "Kubernetes", "Kustomize", "ArgoCD", "Prometheus", "Grafana", "vLLM", "Qwen2.5-Coder"],
        github: "https://github.com/DaL1ght1/nlq-platform-case-study",
        demo: null,
        period: "Feb 2026 - Jun 2026",
        image: "/e2e-cache-hit.jpg",
        category: "Agentic AI, Backend & Cloud",
        featured: true,
    },
    {
        id: 2,
        title: "Fleet Management System",
        company: "Omnilink",
        description: "Scalable fleet management solution with microservices architecture",
        longDescription: "Built a comprehensive fleet management system using modern cloud-native technologies. Implemented containerized services with Docker, deployed on Kubernetes cluster, and established robust CI/CD pipelines using GitHub Actions. The system features event-driven architecture with Kafka for real-time messaging and Keycloak for enterprise-grade SSO authentication.",
        technologies: ["Docker", "Kubernetes", "GitHub Actions", "Kafka", "Keycloak", "GraphQL", "Apollo Federation", "Spring Boot", "Angular", "Microservices"],
        github: "https://github.com/DaL1ght1/Fleet-Management",
        demo: null,
        period: "Jul 2025 - Sep 2025",
        image: "/interactive-map-screenshot.jpg",
        category: "DevOps & Cloud",
        featured: true,
    },
    {
        id: 3,
        title: "Falsified Image Detection",
        company: "Laval University",
        description: "AI-powered image forensics with explainable AI techniques",
        longDescription: "Developed an advanced image forensics system using deep learning models (MobileNetV3) optimized with Optuna for hyperparameter tuning. Implemented explainable AI techniques including SHAP, LIME, and Grad-CAM to provide interpretable results. The system uses Albumentations for data augmentation and is deployed as a full-stack web application with Spring Boot backend and Angular frontend, containerized with Docker.",
        technologies: ["Python", "PyTorch", "MobileNetV3", "Optuna", "Albumentations", "SHAP", "LIME", "Grad-CAM", "Spring Boot", "Angular", "Docker"],
        github: "https://github.com/DaL1ght1/Falsified-Image-Detection-System-FIDS",
        demo: null,
        period: "Feb 2025 - May 2025",
        image: "/FIDS.jpg",
        category: "AI/ML",
        featured: true,
    },
    {
        id: 4,
        title: "Oracle Analytics Dashboards",
        company: "BFI Group",
        description: "Business intelligence dashboards for financial supervision",
        longDescription: "Delivered comprehensive Oracle Analytics Server dashboards for a central bank client, focusing on financial supervision and regulatory compliance. Created bilingual (French/English) user and technical documentation. Validated complex financial formulas and ensured data confidentiality while maintaining usability of BI reports for stakeholders.",
        technologies: ["Oracle Analytics Server", "BI", "Data Visualization", "Financial Analysis", "Documentation"],
        github: null,
        demo: null,
        period: "Jul 2025 - Aug 2025",
        image: "/oas.jpg",
        category: "Business Intelligence",
        featured: false,
    },
    {
        id: 5,
        title: "Enterprise Content Management",
        company: "BFI Group",
        description: "Full-featured ECM system with advanced search capabilities",
        longDescription: "Implemented a comprehensive Enterprise Content Management web application using Spring Boot and Angular. Features include advanced document search and indexing powered by Elasticsearch, role-based access control for security, and PostgreSQL for reliable data storage. The system enables organizations to efficiently manage, search, and secure their digital content.",
        technologies: ["Spring Boot", "Angular", "Elasticsearch", "PostgreSQL", "RESTful API", "JWT", "Role-Based Access Control"],
        github: "https://github.com/DaL1ght1/ECM",
        demo: null,
        period: "Jun 2024 - Aug 2024",
        image: "/ECM.jpg",
        category: "Web Development",
        featured: true,
    },
    {
        id: 6,
        title: "Rouli - Vehicle Rental Platform",
        description: "Full-stack vehicle rental web application",
        longDescription: "Developed a complete vehicle rental platform allowing users to browse, book, and manage rentals for cars, motorbikes, and scooters. Features include user authentication, vehicle inventory management, booking system, and admin dashboard. Built with a focus on user experience and responsive design.",
        technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "User Authentication", "Responsive Design"],
        github: "https://github.com/DaL1ght1/Rouli",
        demo: null,
        period: "Jan 2024 - Mar 2024",
        image: "/Rooli.jpg",
        category: "Web Development",
        featured: false,
    },
    {
        id: 7,
        title: "Discord Profanity Banner",
        description: "Moderation bot for Tunisian Discord communities",
        longDescription: "Created a Discord moderation bot specifically designed to filter profanity and inappropriate content in Tunisian dialect. The bot uses natural language processing to detect and moderate content in real-time, helping maintain healthy community environments. Features automated warnings, user reporting, and customizable filter settings.",
        technologies: ["Python", "Discord.py", "NLP", "Bot Development", "API Integration", "Real-time Processing"],
        github: "https://github.com/DaL1ght1/BadTN",
        demo: null,
        period: "Dec 2023 - Feb 2024",
        image: "/Discord.jpg",
        category: "Tools & Utilities",
        featured: false,
    },
    {
        id: 8,
        title: "Compiler Project",
        description: "Educational compiler with lexical and syntax analysis",
        longDescription: "Developed a compiler for a simple programming language as part of academic coursework. Implemented all major compiler phases including lexical analysis, syntax analysis, semantic analysis, and code generation. The project demonstrates understanding of formal language theory, parsing algorithms, and compiler design principles.",
        technologies: ["C", "Compiler Design", "Lexical Analysis", "Parsing", "Code Generation", "Data Structures"],
        github: "https://github.com/DaL1ght1/CompilerProject",
        demo: null,
        period: "Sep 2023 - Dec 2023",
        image: "/Compiler.jpg",
        category: "Software Development",
        featured: false,
    },
    {
        id: 9,
        title: "Directory Content Collector",
        description: "Python utility for directory analysis and organization",
        longDescription: "Built a powerful Python utility tool for collecting, analyzing, and organizing directory contents. Features include recursive directory traversal, advanced filtering options, file type categorization, and multiple export formats. Particularly useful for developers analyzing project structures and generating documentation.",
        technologies: ["Python", "File System Operations", "CLI", "Data Processing", "Automation"],
        github: "https://github.com/DaL1ght1/Directory-Content-Collector",
        demo: null,
        period: "Aug 2023 - Sep 2023",
        image: "/DCC.jpg",
        category: "Tools & Utilities",
        featured: false,
    },
    {
        id: 10,
        title: "E-Cars Rental System",
        description: "Command-line car rental management application",
        longDescription: "Developed a CLI-based car rental management system in C. The application handles vehicle inventory, customer information, booking management, and rental history. Features include availability checking, pricing calculation, customer registration, and booking confirmation. Demonstrates proficiency in C programming and data structures.",
        technologies: ["C", "Data Structures", "File I/O", "CLI Development", "Algorithm Design"],
        github: "https://github.com/DaL1ght1/E-cars",
        demo: null,
        period: "May 2023 - Jun 2023",
        image: "/Ecars.jpg",
        category: "Software Development",
        featured: false,
    },
    {
        id: 11,
        title: "ML-Analytics",
        description: "Comprehensive Machine Learning Analysis for Any Dataset",
        longDescription: "A comprehensive, production-ready machine learning web application that works with ANY dataset for both classification and regression tasks. Originally built for student dropout prediction, now evolved into a universal ML platform with automatic problem detection, advanced model training, and full interpretability features.",
        technologies: ["Jupiter Notebook", "python", "streamlit", "CSS"],
        github: "https://github.com/DaL1ght1/ML-Analytics",
        demo: null,
        period: "October 2025",
        image: "/ML.jpg",
        category: "AI/ML",
        featured: true,
    },
    {
        id: 12,
        title: "WikiTrends",
        description: "A production-ready streaming analytics system tracking trending Wikipedia pages in real-time",
        longDescription: "This project implements a Kappa Architecture streaming pipeline that processes live Wikipedia edit events from Wikimedia's event stream, computes real-time trending scores using windowed aggregations, and visualizes the results through interactive dashboards.",
        technologies: ["Python", "Shell", "Dockerfile", "Grafana"],
        github: "https://github.com/DaL1ght1/wikiTrends",
        demo: null,
        period: "October 2025",
        image: "/wikiTrends.jpg",
        category: "Tools & Utilities",
        featured: true,
    },
    {
        id: 13,
        title: "Portfolio Website",
        description: "Personal portfolio showcasing projects and skills",
        longDescription: "Designed and developed a modern, responsive portfolio website using Next.js and React. Features include dark mode support, smooth animations, project showcases, and contact forms. Built with performance and accessibility in mind, utilizing Tailwind CSS for styling and shadcn/ui for components.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Responsive Design"],
        github: "https://github.com/DaL1ght1/Portfolio",
        demo: null,
        period: "Ongoing",
        image: "/portfolio.jpg",
        category: "Web Development",
        featured: false,
    },
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
    const [filter, setFilter] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    const categories = Array.from(new Set(projects.map((p) => p.category)))

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = filter ? project.category === filter : true
        const query = searchQuery.toLowerCase().trim()
        const matchesSearch =
            !query ||
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
            (project.company && project.company.toLowerCase().includes(query))

        return matchesCategory && matchesSearch
    })

    return (
        <section id="projects" className="section-container">
            <h2 className="section-title">Featured Projects</h2>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search by technology or keyword (e.g. Scala, Kafka, vLLM)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-full border-muted-foreground/30 focus-visible:ring-primary"
                />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Button
                    variant={filter === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(null)}
                    className="rounded-full px-6"
                >
                    All Projects
                </Button>
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={filter === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilter(category)}
                        className="rounded-full px-6"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                    <p className="text-lg">No projects found matching "{searchQuery}".</p>
                    <Button variant="link" onClick={() => { setSearchQuery(""); setFilter(null); }}>
                        Clear search & filters
                    </Button>
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <Card
                            key={project.id}
                            className={cn(
                                "group cursor-pointer transition-all duration-500 hover:shadow-2xl overflow-hidden gradient-border",
                                hoveredId === project.id && "scale-105",
                                project.featured && "ring-2 ring-primary/50"
                            )}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setSelectedProject(project)}
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                                <Image
                                    src={getImagePath(project.image)}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Dark overlay gradient for high contrast title text in both Light & Dark modes */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                                {project.featured && (
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                                    </div>
                                )}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <Badge variant="secondary" className="mb-2 bg-background/80 backdrop-blur-sm text-foreground">
                                        {project.category}
                                    </Badge>
                                    <h3 className="text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                {project.company && (
                                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                                        <Building2 className="h-4 w-4"/>
                                        <span className="font-semibold">{project.company}</span>
                                    </div>
                                )}
                                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <Badge key={tech} variant="outline" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <Badge variant="outline" className="text-xs">
                                            +{project.technologies.length - 3}
                                        </Badge>
                                    )}
                                </div>

                                <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4"/>
                                        <span>{project.period}</span>
                                    </div>
                                    <span className="text-primary font-semibold group-hover:underline">View Details →</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            {/* Project Detail Modal */}
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    {selectedProject && (
                        <>
                            <DialogHeader>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <DialogTitle className="text-3xl mb-2">{selectedProject.title}</DialogTitle>
                                        {selectedProject.company && (
                                            <div className="flex items-center gap-2 text-primary mb-2">
                                                <Building2 className="h-5 w-5"/>
                                                <span className="font-semibold text-lg">{selectedProject.company}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4"/>
                                                <span>{selectedProject.period}</span>
                                            </div>
                                            <Badge>{selectedProject.category}</Badge>
                                        </div>
                                    </div>
                                </div>
                            </DialogHeader>

                            <div className="space-y-6">
                                {/* Project Image */}
                                <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                                    <Image
                                        src={getImagePath(selectedProject.image)}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Description */}
                                <DialogDescription className="text-base leading-relaxed">
                                    {selectedProject.longDescription}
                                </DialogDescription>

                                {/* Technologies */}
                                <div>
                                    <h4 className="font-semibold text-lg mb-3">Technologies & Skills</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="px-3 py-1">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 pt-4">
                                    {selectedProject.github && (
                                        <Button asChild className="flex-1">
                                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4"/>
                                                View on GitHub
                                            </a>
                                        </Button>
                                    )}
                                    {selectedProject.demo && (
                                        <Button asChild variant="outline" className="flex-1">
                                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4"/>
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}