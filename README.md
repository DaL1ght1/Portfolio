# K.Krifi - Portfolio

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing projects, skills, and experience. It features a dark-first, terminal-inspired design, a command palette and scroll-driven animations, built and deployed with Bun.

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

This portfolio serves as a digital resume and a showcase of my work as a Software Engineer. It includes sections for an introduction (Hero), about me, projects, resume download, and a contact form.

## ✨ Features

- **🌑 Dark-first design** with a light theme toggle, grid backdrop and cursor-following spotlight cards
- **⌨️ Command palette** (`Ctrl/⌘ + K`) for navigation, links, copying the email and switching theme — doubles as the mobile menu
- **💻 Animated terminal hero** with a rotating focus line and a tech-stack marquee
- **🧱 Bento About section**, experience timeline and categorized skills
- **🛠️ Projects**: featured bento grid plus a searchable, filterable archive with detail dialogs
- **📬 Contact form** via Formspree, plus resume download/preview
- **🎞️ Scroll-driven animations** (CSS `animation-timeline`) with `prefers-reduced-motion` support
- **📦 Single content file** — edit `lib/data.ts` to update everything

## 🛠️ Tech Stack

- **Runtime / package manager:** [Bun](https://bun.sh)
- **Framework:** Next.js 15 (static export) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Space Grotesk & JetBrains Mono
- **UI:** shadcn/ui primitives (Radix Dialog, cmdk), Lucide icons, Sonner toasts
- **Theming:** next-themes
- **Hosting:** GitHub Pages via GitHub Actions

## 📂 Project Structure

```
├── app/                  # App Router layout, page and global styles
├── components/           # Page sections (hero, about, experience, skills, projects, contact…)
│   └── ui/               # shadcn/ui primitives
├── lib/
│   ├── data.ts           # All portfolio content
│   └── utils.ts          # cn() and basePath-aware asset helper
├── public/               # Images and resume.pdf
├── scripts/preview.ts    # Bun server that previews ./out under /Portfolio
└── .github/workflows/    # GitHub Pages deployment (Bun)
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) 1.3+

### Installation

```bash
git clone https://github.com/DaL1ght1/Portfolio.git
cd Portfolio
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:3000/Portfolio](http://localhost:3000/Portfolio).

### Production build & preview

```bash
bun run build     # static export to ./out
bun run start     # serves ./out at http://localhost:3000/Portfolio/
```

Pushing to `main` builds with Bun and deploys to GitHub Pages automatically.

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
