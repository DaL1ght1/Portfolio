"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100

      setScrolled(scrollTop > 50)
      setScrollProgress(progress)

      // Determine active section
      const sections = ["about", "skills", "projects", "resume", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          scrolled ? "glass-effect shadow-lg" : "bg-transparent"
        )}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-300 rounded-full"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 hover:scale-105 transition-transform">
                K.Krifi
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group",
                      activeSection === link.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </Link>
                ))}
                <div className="ml-2">
                  <ModeToggle />
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ModeToggle />
              <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMenu}>
                <span className="sr-only">Toggle menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass-effect border-t animate-fade-in-up">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
