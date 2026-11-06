"use client"

import { useEffect, useState } from "react"
import { Command, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { openCommandMenu } from "@/components/command-menu"
import { navLinks, profile } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    // A section is "active" when it crosses the vertical middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    for (const link of navLinks) {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-all duration-300",
          scrolled
            ? "border-border bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-sm font-semibold">
          <span className="size-2 rounded-full bg-primary" />
          {profile.shortName}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  activeSection === link.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={openCommandMenu}
            className="hidden h-9 gap-1.5 rounded-full bg-transparent px-3 font-mono text-xs text-muted-foreground md:inline-flex"
          >
            <Command />K
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="rounded-full md:hidden" onClick={openCommandMenu}>
            <Menu />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}
