# K.Krifi - Portfolio

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing projects, skills, and experience. This project features a clean, responsive design with dark/light mode support, powered by Shadcn/UI components.

**Author:** Khalil Krifi

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Shadcn/UI](https://img.shields.io/badge/Shadcn/UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
  
</div>

## 🌐 Live Demo

**[Live demo](https://dal1ght1.github.io/Portfolio/)**

## 📋 Overview

This portfolio serves as a digital resume and a showcase of my work as a Software Engineering student. It includes sections for an introduction (Hero), about me, projects, resume download, and a contact form.

## ✨ Features

- **🖥️ Responsive Design:** Adapts to various screen sizes (mobile, tablet, desktop)
- **🌓 Dark/Light Mode:** Theme switcher for user preference
- **🧩 Interactive UI Components:** Built using Shadcn/UI and Radix UI primitives
- **🚀 Hero Section:** Engaging introduction with call-to-action buttons
- **👨‍💻 About Me Section:** Detailed information about skills, education, and experience
- **🛠️ Projects Showcase:** Dynamically loaded projects with descriptions, technologies, GitHub links, and filtering by category
- **🔧 Skills Display:**
  - Categorized list of technologies
- **📄 Resume Section:** Link to download CV and a summary of technical skills
- **📬 Contact Form:** Functional contact form (front-end only in this version) and direct contact links
- **✨ Smooth Animations:** Subtle animations for an enhanced user experience
- **🧱 Reusable Components:** Modular components for easy maintenance and scalability

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:**
  - Shadcn/UI
  - Radix UI (Accordion, Dialog, DropdownMenu, Popover, Tabs, etc.)
  - Lucide React (Icons)
- **State Management/Forms:**
  - React Hook Form
  - Zod (Schema Validation)
- **Data Visualization:** Recharts
- **Theming:** Next-Themes
- **Animations:** Tailwind CSS Animate, Framer Motion (implied by some Shadcn components)
- **Carousel:** Embla Carousel React
- **Notifications:** Sonner (Toasts)
- **Utilities:** clsx, tailwind-merge
- **Package Manager:** pnpm

## 📂 Project Structure

```
D:\portfolio
├── app/                  # Next.js App Router (pages, layout, global styles)
├── components/           # UI components (reusable, Shadcn/UI, custom)
│   ├── ui/               # Shadcn/UI base components
│   └── *.tsx             # Custom page-level components (Hero, About, etc.)
├── hooks/                # Custom React hooks (e.g., use-toast, use-mobile)
├── lib/                  # Utility functions (e.g., cn for classnames)
├── public/               # Static assets (images, resume.pdf)
├── styles/               # Global styles (legacy, if any, mostly in app/globals.css)
├── next.config.mjs       # Next.js configuration
├── package.json          # Project metadata and dependencies
├── pnpm-lock.yaml        # PNPM lock file
├── tailwind.config.ts    # Tailwind CSS configuration
├── components.json       # Shadcn/UI configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- pnpm (or npm/yarn, though `pnpm-lock.yaml` is provided)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DaL1ght1/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
pnpm build
```

This will create an optimized production build in the `.next` folder.

To run the production build locally:
```bash
pnpm start
```

## 🧩 Key Components Overview

- **`Navbar`**: Responsive navigation bar with smooth scroll links and theme toggle
- **`Hero`**: Full-screen hero section with an introductory message
- **`About`**: Displays personal information, education, experience, and integrates `SkillsSection`
- **`Projects`**: Fetches project data and displays them in cards with expand/collapse functionality and filtering
- **`SkillsChart`**: Visualizes technical skills using Recharts
- **`SkillsSection`**: Categorized display of technologies
- **`Contact`**: Includes a contact form and various ways to get in touch
- **`Resume`**: Provides a download link for the CV

## ⚙️ Configuration

- **Tailwind CSS (`tailwind.config.ts`)**: Defines theme colors, fonts, custom animations, and content paths
- **Shadcn/UI (`components.json`)**: Configures Shadcn/UI style, component paths, and aliases
- **Next.js (`next.config.mjs`)**: Standard Next.js configurations, including image optimization settings (currently unoptimized)

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Khalil Krifi

## 👤 Author & Contact

- **Khalil Krifi**
  - GitHub: [@DaL1ght1](https://github.com/DaL1ght1)
  - LinkedIn: [khalil-krifi](https://www.linkedin.com/in/khalil-krifi)
  - Email: [khalil.krifi@ensi-uma.tn](mailto:khalil.krifi@ensi-uma.tn)

<div align="center">
  <img src="https://img.shields.io/github/last-commit/DaL1ght1/Portfolio" alt="Last Commit"/>
  <img src="https://img.shields.io/github/issues/DaL1ght1/Portfolio" alt="Issues"/>
  <img src="https://img.shields.io/github/repo-size/DaL1ght1/Portfolio" alt="Repo Size"/>
</div>
