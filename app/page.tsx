import Hero from "@/components/hero"
import About from "@/components/about"
import SkillsSection from "@/components/skills-section"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Resume from "@/components/resume"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}
