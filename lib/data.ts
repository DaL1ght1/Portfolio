// All portfolio content lives here so sections stay purely presentational.

export const profile = {
  name: "Khalil Krifi",
  shortName: "K.Krifi",
  role: "Software Engineer",
  location: "Boumhal, Ben Arous, Tunisia",
  email: "khalil.krifi@ensi-uma.tn",
  phone: "+216 28 042 451",
  github: "https://github.com/DaL1ght1",
  linkedin: "https://www.linkedin.com/in/khalil-krifi",
  availability: "Open to on-site, remote & hybrid roles",
  focus: ["backend systems", "agentic AI", "distributed platforms", "cloud-native DevOps"],
  pitch:
    "Backend engineer and ENSI graduate building scalable microservices, event-driven platforms and LLM-powered systems — from Scala and Spring Boot services to Kubernetes GitOps deployments.",
  bio: [
    "I'm a Backend Software Engineer and recent ENSI graduate (Highest Honors), focused on building scalable backend systems, microservices, and distributed applications.",
    "I work hands-on with Java, Go, Scala, Spring Boot, Python, GraphQL, Kafka and Kubernetes, and I've spent the last year shipping AI-powered systems on cloud-native architectures. I care about reliable systems, clean interfaces and solving hard problems.",
  ],
}

export const education = [
  {
    degree: "Computer Science Engineering",
    school: "ENSI, University of Manouba",
    period: "Sept 2023 – Jun 2026",
    note: "Graduated with Highest Honors — software development, artificial intelligence and modern computing.",
  },
  {
    degree: "Engineering Preparatory Studies",
    school: "IPEIN, Nabeul",
    period: "Sept 2021 – Jun 2023",
    note: "Intensive two-year program in mathematics, physics and computer science fundamentals.",
  },
]

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Cognira",
    project: "Natural Language Query Interface for Logs & Metrics",
    period: "Feb 2026 – Jun 2026",
    location: "Tunis, Tunisia",
    bullets: [
      "Built an event-driven 3-service platform converting natural language to OpenSearch DSL & PromQL (Scala, Python, Next.js 14) over Kafka",
      "Engineered a schema-aware LLM pipeline on self-hosted vLLM (Qwen2.5-Coder) with a LangGraph self-correction loop",
      "Implemented semantic caching (Redis), a DSL security guard whitelist, multi-tenant RBAC and a BFF auth proxy",
      "Deployed to Kubernetes via Kustomize & ArgoCD GitOps with Prometheus/Grafana observability",
    ],
    stack: ["Scala", "Python", "LangGraph", "vLLM", "Kafka", "Redis", "Kubernetes", "ArgoCD"],
  },
  {
    role: "Software Engineer Intern",
    company: "Omnilink",
    project: "Fleet Management System",
    period: "Jul 2025 – Sep 2025",
    location: "Tunis, Tunisia · Remote",
    bullets: [
      "Built a scalable fleet management solution with Docker & Kubernetes",
      "Implemented CI/CD pipelines with GitHub Actions",
      "Added Kafka for event-driven messaging and Keycloak for SSO",
      "Developed GraphQL microservices with Spring Boot & Angular",
    ],
    stack: ["Spring Boot", "GraphQL", "Kafka", "Keycloak", "Kubernetes", "Angular"],
  },
  {
    role: "Business Intelligence Intern",
    company: "BFI Group",
    project: "Oracle Analytics Server",
    period: "Jul 2025 – Aug 2025",
    location: "Tunis, Tunisia · On-site",
    bullets: [
      "Delivered Oracle Analytics dashboards for a central bank client",
      "Produced bilingual user and technical guides (FR/EN)",
      "Validated financial supervision formulas",
    ],
    stack: ["Oracle Analytics", "BI", "SQL"],
  },
  {
    role: "Research / Engineering Intern",
    company: "Laval University",
    project: "Falsified Image Detection",
    period: "Feb 2025 – May 2025",
    location: "Quebec City, Canada · Remote",
    bullets: [
      "Trained explainable image-forensics models (MobileNetV3, Optuna)",
      "Applied SHAP, LIME and Grad-CAM for interpretable outputs",
      "Integrated the model into a Spring Boot + Angular web app",
    ],
    stack: ["PyTorch", "Optuna", "SHAP", "Grad-CAM", "Spring Boot"],
  },
  {
    role: "Software Engineer Intern",
    company: "BFI Group",
    project: "Enterprise Content Management",
    period: "Jun 2024 – Aug 2024",
    location: "Tunis, Tunisia · On-site",
    bullets: [
      "Implemented an ECM web app (Spring Boot + Angular)",
      "Added search and indexing with Elasticsearch",
      "Built role-based access control on PostgreSQL",
    ],
    stack: ["Spring Boot", "Angular", "Elasticsearch", "PostgreSQL"],
  },
]

export const leadership = [
  "Lead academic project teams (design, CI/CD, deployment)",
  "Treasurer of the IEEE ENSI Student Branch",
  "Active contributor to ENSI social life and technical communities",
  "Write technical notes and documentation for team projects",
]

export const highlights = [
  "Architected a schema-aware LLM pipeline with vLLM & a LangGraph self-correction loop",
  "Engineered event-driven microservices with Pekko HTTP, Spring Cloud, FastAPI & Kafka",
  "Trained computer vision models to 94% accuracy with Optuna & XAI (SHAP, Grad-CAM)",
  "Orchestrated GitOps deployments via Kubernetes, Kustomize & ArgoCD",
]

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Scala", "Java", "Python", "Go", "TypeScript", "C", "C++", "SQL", "Shell"],
  },
  {
    title: "Backend & APIs",
    skills: ["Spring Boot", "Pekko HTTP", "Tapir", "jOOQ", "FastAPI", "GraphQL", "REST", "WebSockets", "Microservices"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["LangGraph", "vLLM", "Qwen2.5-Coder", "PyTorch", "Optuna", "Albumentations", "SHAP", "LIME", "Grad-CAM"],
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "Apache Kafka", "Kustomize", "ArgoCD", "GitOps", "GitHub Actions", "Prometheus", "Grafana", "Sentry"],
  },
  {
    title: "Data & Storage",
    skills: ["PostgreSQL", "Redis", "OpenSearch", "Elasticsearch", "Apache Spark", "Hadoop", "HBase", "Power BI"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Angular", "Tailwind CSS"],
  },
]

export type Project = {
  id: number
  title: string
  company?: string
  description: string
  longDescription: string
  technologies: string[]
  github: string | null
  demo: string | null
  period: string
  cover: {
    command: string
    title: string
    tagline: string
    /** Architecture flow nodes as [name, subtitle]; `hot` marks the highlighted one. */
    flow: [string, string][]
    hot: number
  }
  category: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 16,
    title: "DevForge — Internal Developer Platform",
    description: "Turns a few choices into a ready-to-run GitHub repository with code, CI and a Dockerfile",
    longDescription:
      "An internal developer platform: pick a stack, database, broker and extras, preview every generated file, and DevForge pushes a private GitHub repository with working code, CI and a Dockerfile — or a multi-service application in one repository with a shared compose.yaml. A Spring Boot API owns business rules and data, while a Go provisioner renders templates and does all Git work asynchronously over Kafka. Provisioning is reliable by design, with a transactional outbox, idempotent workers and rate-limit retries, and built for concurrency with partitioned consumers, per-tenant limits and in-memory Git. It ships 13 composable templates, multi-tenant workspaces with roles, Keycloak login with Google and GitHub, httpOnly cookie sessions and GitHub App integration, and CI that builds generated projects and boots a four-service application with Docker Compose.",
    technologies: ["Java 25", "Spring Boot 4", "Go", "Next.js 16", "Apache Kafka", "PostgreSQL", "Keycloak", "GitHub Apps", "Docker Compose"],
    github: "https://github.com/DaL1ght1/DevForge",
    demo: null,
    period: "Sep 2026 - now",
    cover: {
      command: "$ devforge create --stack spring-boot --db postgres --broker kafka",
      title: "DevForge",
      tagline: "A few choices in. A ready-to-run GitHub repository out.",
      flow: [["Next.js", "frontend"], ["Spring API", "rules · postgres"], ["Kafka", "outbox · jobs"], ["Go worker", "render · git"], ["GitHub", "push repo"]],
      hot: 2,
    },
    category: "Platform Engineering",
    featured: true,
  },
  {
    id: 1,
    title: "Natural Language Query Interface for Logs & Metrics",
    company: "Cognira",
    description: "AI-powered platform for querying logs and metrics using natural language",
    longDescription:
      "Built an event-driven 3-service platform that translates natural language into OpenSearch DSL and PromQL queries. Developed a Scala backend with Tapir, Pekko HTTP, and jOOQ, a Python AI worker using FastAPI and LangGraph, and a Next.js 14 frontend, decoupled through Apache Kafka. Implemented a schema-aware LLM pipeline with a self-correction loop, semantic caching with Redis, DSL security validation, multi-tenant RBAC, TOTP MFA, encrypted API keys, and JWT-based authentication. Deployed the platform on Kubernetes using Kustomize and ArgoCD GitOps, with Prometheus and Grafana observability and load testing using Locust and K6.",
    technologies: ["Scala", "Python", "FastAPI", "LangGraph", "Next.js", "OpenSearch", "PromQL", "Apache Kafka", "Redis", "Kubernetes", "Kustomize", "ArgoCD", "Prometheus", "Grafana", "vLLM", "Qwen2.5-Coder"],
    github: "https://github.com/DaL1ght1/nlq-platform-case-study",
    demo: null,
    period: "Feb 2026 - Jun 2026",
    cover: {
      command: "$ nlq ask \"5xx errors on checkout in the last hour\"",
      title: "NLQ Platform",
      tagline: "Plain English in. OpenSearch DSL and PromQL out.",
      flow: [["Next.js", "bff · auth"], ["Scala API", "tapir · pekko"], ["Kafka", "requests"], ["LangGraph", "vllm · self-correct"], ["OpenSearch", "dsl · promql"]],
      hot: 2,
    },
    category: "Agentic AI & Backend",
    featured: true,
  },
  {
    id: 2,
    title: "Fleet Management System",
    company: "Omnilink",
    description: "Scalable fleet management solution with a microservices architecture",
    longDescription:
      "Built a comprehensive fleet management system using modern cloud-native technologies. Implemented containerized services with Docker, deployed on a Kubernetes cluster, and established robust CI/CD pipelines using GitHub Actions. The system features an event-driven architecture with Kafka for real-time messaging and Keycloak for enterprise-grade SSO authentication.",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Kafka", "Keycloak", "GraphQL", "Apollo Federation", "Spring Boot", "Angular", "Microservices"],
    github: "https://github.com/DaL1ght1/Fleet-Management",
    demo: null,
    period: "Jul 2025 - Sep 2025",
    cover: {
      command: "$ kubectl apply -k fleet/overlays/prod",
      title: "Fleet Management",
      tagline: "Event-driven microservices tracking vehicles in real time.",
      flow: [["Angular", "map ui"], ["Apollo", "federation"], ["Spring Boot", "graphql services"], ["Kafka", "events"], ["Keycloak", "sso"]],
      hot: 3,
    },
    category: "DevOps & Cloud",
    featured: true,
  },
  {
    id: 3,
    title: "Falsified Image Detection",
    company: "Laval University",
    description: "AI-powered image forensics with explainable AI techniques",
    longDescription:
      "Developed an advanced image forensics system using deep learning models (MobileNetV3) optimized with Optuna for hyperparameter tuning. Implemented explainable AI techniques including SHAP, LIME, and Grad-CAM to provide interpretable results. The system uses Albumentations for data augmentation and is deployed as a full-stack web application with a Spring Boot backend and Angular frontend, containerized with Docker.",
    technologies: ["Python", "PyTorch", "MobileNetV3", "Optuna", "Albumentations", "SHAP", "LIME", "Grad-CAM", "Spring Boot", "Angular", "Docker"],
    github: "https://github.com/DaL1ght1/Falsified-Image-Detection-System-FIDS",
    demo: null,
    period: "Feb 2025 - May 2025",
    cover: {
      command: "$ fids analyze evidence.jpg --explain grad-cam",
      title: "FIDS",
      tagline: "Detecting falsified images, and explaining why.",
      flow: [["Angular", "upload"], ["Spring Boot", "api"], ["MobileNetV3", "optuna-tuned"], ["XAI", "shap · lime · grad-cam"]],
      hot: 2,
    },
    category: "AI/ML",
    featured: true,
  },
  {
    id: 6,
    title: "Etude.AI",
    description: "An AI-powered learning assistant that streamlines study workflows and content synthesis",
    longDescription:
      "An intelligent platform that leverages artificial intelligence to assist students and professionals in analyzing, summarizing, and synthesizing complex educational materials for improved study efficiency.",
    technologies: ["Spring Boot", "FastAPI", "React", "Keycloak"],
    github: "https://github.com/NadhemBenhadjali/Etude.AI",
    demo: null,
    period: "Dec 2025 - now",
    cover: {
      command: "$ etude summarize lecture-05.pdf",
      title: "Etude.AI",
      tagline: "An AI study assistant that turns material into understanding.",
      flow: [["React", "frontend"], ["Keycloak", "auth"], ["Spring Boot", "core api"], ["FastAPI", "ai service"]],
      hot: 3,
    },
    category: "AI/ML",
    featured: true,
  },
  {
    id: 7,
    title: "URL Shortening Service",
    description: "A high-performance RESTful URL shortener built with Go and PostgreSQL",
    longDescription:
      "A backend service designed to create and manage shortened URLs efficiently. It features persistent storage using PostgreSQL, custom short-code generation, URL redirection, and full OpenAPI documentation managed via Swagger UI.",
    technologies: ["Go", "PostgreSQL", "Swagger", "Docker"],
    github: "https://github.com/DaL1ght1/URL-Shortening-Service",
    demo: null,
    period: "Sep 2026",
    cover: {
      command: "$ curl -X POST /shorten -d '{\"url\": \"…\"}'",
      title: "URL Shortener",
      tagline: "Short codes, fast redirects, documented with OpenAPI.",
      flow: [["Client", "POST /shorten"], ["Go API", "code generation"], ["PostgreSQL", "storage"], ["Redirect", "GET /:code"]],
      hot: 1,
    },
    category: "Tools & Utilities",
    featured: true,
  },
  {
    id: 14,
    title: "WikiTrends",
    description: "Streaming analytics system tracking trending Wikipedia pages in real time",
    longDescription:
      "Implements a Kappa Architecture streaming pipeline that processes live Wikipedia edit events from Wikimedia's event stream, computes real-time trending scores using windowed aggregations, and visualizes the results through interactive dashboards.",
    technologies: ["Python", "Shell", "Docker", "Grafana"],
    github: "https://github.com/DaL1ght1/wikiTrends",
    demo: null,
    period: "Oct 2025",
    cover: {
      command: "$ docker compose up wikitrends",
      title: "WikiTrends",
      tagline: "Live Wikipedia edits, ranked into trends in real time.",
      flow: [["Wikimedia", "event stream"], ["Pipeline", "kappa architecture"], ["Windows", "trend scores"], ["Grafana", "dashboards"]],
      hot: 1,
    },
    category: "Data Engineering",
    featured: false,
  },
  {
    id: 13,
    title: "ML-Analytics",
    description: "Comprehensive machine learning analysis for any dataset",
    longDescription:
      "A production-ready machine learning web application that works with any dataset for both classification and regression tasks. Originally built for student dropout prediction, it evolved into a universal ML platform with automatic problem detection, advanced model training, and full interpretability features.",
    technologies: ["Python", "Jupyter Notebook", "Streamlit", "CSS"],
    github: "https://github.com/DaL1ght1/ML-Analytics",
    demo: null,
    period: "Oct 2025",
    cover: {
      command: "$ streamlit run app.py --dataset any.csv",
      title: "ML-Analytics",
      tagline: "Upload any dataset. Get trained, explained models.",
      flow: [["Dataset", "csv"], ["Detect", "task type"], ["Train", "models"], ["Explain", "interpretability"]],
      hot: 2,
    },
    category: "AI/ML",
    featured: false,
  },
  {
    id: 4,
    title: "Oracle Analytics Dashboards",
    company: "BFI Group",
    description: "Business intelligence dashboards for financial supervision",
    longDescription:
      "Delivered comprehensive Oracle Analytics Server dashboards for a central bank client, focusing on financial supervision and regulatory compliance. Created bilingual (French/English) user and technical documentation. Validated complex financial formulas and ensured data confidentiality while maintaining usability of BI reports for stakeholders.",
    technologies: ["Oracle Analytics Server", "BI", "Data Visualization", "Financial Analysis", "Documentation"],
    github: null,
    demo: null,
    period: "Jul 2025 - Aug 2025",
    cover: {
      command: "> SELECT * FROM supervision.kpis",
      title: "OAS Dashboards",
      tagline: "Financial supervision dashboards for a central bank.",
      flow: [["Sources", "bank data"], ["Oracle", "analytics server"], ["Dashboards", "kpis"], ["Guides", "fr · en"]],
      hot: 1,
    },
    category: "Business Intelligence",
    featured: false,
  },
  {
    id: 5,
    title: "Enterprise Content Management",
    company: "BFI Group",
    description: "Full-featured ECM system with advanced search capabilities",
    longDescription:
      "Implemented a comprehensive Enterprise Content Management web application using Spring Boot and Angular. Features include advanced document search and indexing powered by Elasticsearch, role-based access control, and PostgreSQL for reliable data storage. The system enables organizations to efficiently manage, search, and secure their digital content.",
    technologies: ["Spring Boot", "Angular", "Elasticsearch", "PostgreSQL", "REST API", "JWT", "RBAC"],
    github: "https://github.com/DaL1ght1/ECM",
    demo: null,
    period: "Jun 2024 - Aug 2024",
    cover: {
      command: "$ ecm search \"contract 2024\" --role auditor",
      title: "ECM",
      tagline: "Store, search and secure enterprise documents.",
      flow: [["Angular", "ui"], ["Spring Boot", "rbac · jwt"], ["Elasticsearch", "search"], ["PostgreSQL", "storage"]],
      hot: 1,
    },
    category: "Web Development",
    featured: false,
  },
  {
    id: 8,
    title: "Rouli — Vehicle Rental Platform",
    description: "Full-stack vehicle rental web application",
    longDescription:
      "Developed a complete vehicle rental platform allowing users to browse, book, and manage rentals for cars, motorbikes, and scooters. Features include user authentication, vehicle inventory management, a booking system, and an admin dashboard. Built with a focus on user experience and responsive design.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    github: "https://github.com/DaL1ght1/Rouli",
    demo: null,
    period: "Jan 2024 - Mar 2024",
    cover: {
      command: "$ rouli book --vehicle scooter --days 3",
      title: "Rouli",
      tagline: "Browse, book and manage car, motorbike and scooter rentals.",
      flow: [["Catalog", "browse"], ["Booking", "reservations"], ["PHP", "backend"], ["MySQL", "storage"]],
      hot: 1,
    },
    category: "Web Development",
    featured: false,
  },
  {
    id: 9,
    title: "Discord Profanity Banner",
    description: "Moderation bot for Tunisian Discord communities",
    longDescription:
      "A Discord moderation bot designed to filter profanity and inappropriate content in Tunisian dialect. The bot uses natural language processing to detect and moderate content in real time, helping maintain healthy community environments. Features automated warnings, user reporting, and customizable filter settings.",
    technologies: ["Python", "Discord.py", "NLP", "Bot Development"],
    github: "https://github.com/DaL1ght1/BadTN",
    demo: null,
    period: "Dec 2023 - Feb 2024",
    cover: {
      command: "$ python bot.py --guild tunisia",
      title: "BadTN",
      tagline: "Keeping Tunisian Discord communities clean.",
      flow: [["Discord", "messages"], ["NLP", "tunisian dialect"], ["Moderation", "warn · report"]],
      hot: 1,
    },
    category: "Tools & Utilities",
    featured: false,
  },
  {
    id: 10,
    title: "Compiler Project",
    description: "Educational compiler with lexical and syntax analysis",
    longDescription:
      "A compiler for a simple programming language built as part of academic coursework. Implements all major compiler phases including lexical analysis, syntax analysis, semantic analysis, and code generation, demonstrating formal language theory, parsing algorithms, and compiler design principles.",
    technologies: ["C", "Compiler Design", "Lexical Analysis", "Parsing", "Code Generation"],
    github: "https://github.com/DaL1ght1/CompilerProject",
    demo: null,
    period: "Sep 2023 - Dec 2023",
    cover: {
      command: "$ ./compiler program.src -o program",
      title: "Compiler",
      tagline: "From source text to generated code, phase by phase.",
      flow: [["Lexer", "tokens"], ["Parser", "syntax tree"], ["Semantic", "checks"], ["Codegen", "output"]],
      hot: 2,
    },
    category: "Systems",
    featured: false,
  },
  {
    id: 11,
    title: "Directory Content Collector",
    description: "Python utility for directory analysis and organization",
    longDescription:
      "A Python utility for collecting, analyzing, and organizing directory contents. Features recursive traversal, advanced filtering, file type categorization, and multiple export formats — useful for analyzing project structures and generating documentation.",
    technologies: ["Python", "CLI", "File System", "Automation"],
    github: "https://github.com/DaL1ght1/Directory-Content-Collector",
    demo: null,
    period: "Aug 2023 - Sep 2023",
    cover: {
      command: "$ python dcc.py ./project --export md",
      title: "DCC",
      tagline: "Collect, filter and export any directory's contents.",
      flow: [["Traverse", "recursive"], ["Filter", "rules"], ["Categorize", "file types"], ["Export", "md · json"]],
      hot: 1,
    },
    category: "Tools & Utilities",
    featured: false,
  },
  {
    id: 12,
    title: "E-Cars Rental System",
    description: "Command-line car rental management application",
    longDescription:
      "A CLI-based car rental management system in C handling vehicle inventory, customer information, booking management, and rental history, with availability checks, pricing calculation, and booking confirmation.",
    technologies: ["C", "Data Structures", "File I/O", "CLI"],
    github: "https://github.com/DaL1ght1/E-cars",
    demo: null,
    period: "May 2023 - Jun 2023",
    cover: {
      command: "$ ./ecars --rent --car 42",
      title: "E-Cars",
      tagline: "A command-line car rental system written in C.",
      flow: [["CLI", "menu"], ["Inventory", "vehicles"], ["Bookings", "pricing"], ["Files", "persistence"]],
      hot: 2,
    },
    category: "Systems",
    featured: false,
  },
  {
    id: 15,
    title: "Portfolio Website",
    description: "This site — a static Next.js portfolio built with Bun",
    longDescription:
      "A statically exported Next.js portfolio with a dark-first design, command palette navigation, scroll-driven animations and a GitHub Pages deployment pipeline powered by Bun.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Bun"],
    github: "https://github.com/DaL1ght1/Portfolio",
    demo: "https://dal1ght1.github.io/Portfolio/",
    period: "Ongoing",
    cover: {
      command: "$ bun run build",
      title: "Portfolio",
      tagline: "This site: static Next.js, built and shipped with Bun.",
      flow: [["data.ts", "content"], ["Next.js", "static export"], ["Actions", "bun build"], ["Pages", "deploy"]],
      hot: 1,
    },
    category: "Web Development",
    featured: false,
  },
]

export const marquee = [
  "Scala", "Java", "Spring Boot","Go", "Pekko HTTP", "Python", "FastAPI", "LangGraph", "vLLM",
  "Apache Kafka", "Kubernetes", "ArgoCD", "Redis", "PostgreSQL", "OpenSearch", "GraphQL",
  "Docker", "Prometheus", "Grafana", "Next.js",
]

export const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]
