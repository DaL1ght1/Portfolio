import Hero from "@/components/hero"
import About from "@/components/about"
import SkillsSection from "@/components/skills-section"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Resume from "@/components/resume"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <Hero />
            <About />
            <SkillsSection />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
            <BackToTop />
        </main>
    )
}