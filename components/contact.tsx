"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { ArrowUpRight, Copy, Download, Eye, Github, Linkedin, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import SectionHeading from "@/components/section-heading"
import SpotlightCard from "@/components/spotlight-card"
import { profile } from "@/lib/data"
import { getImagePath } from "@/lib/utils"

const FORMSPREE_URL = "https://formspree.io/f/mwpojrqj"

const links = [
  { icon: Linkedin, label: "LinkedIn", value: "in/khalil-krifi", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "DaL1ght1", href: profile.github },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const resumePath = getImagePath("/resume.pdf")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Thank you! Your message has been sent successfully.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error(`Something went wrong. Please email me directly at ${profile.email}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("There was a problem submitting your message. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    toast.success("Email copied to clipboard")
  }

  return (
    <section id="contact" className="container-page py-24 md:py-32">
      <SectionHeading
        index="05"
        label="contact"
        title="Let's build something together."
        description="Looking for a backend or AI engineer, have a question, or just want to connect? My inbox is open."
      />

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <SpotlightCard className="reveal p-7">
            <p className="font-mono text-xs text-muted-foreground">email</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <a href={`mailto:${profile.email}`} className="break-all text-lg font-semibold hover:text-primary sm:text-xl">
                {profile.email}
              </a>
              <Button variant="ghost" size="icon" className="shrink-0 rounded-full" onClick={copyEmail}>
                <Copy />
                <span className="sr-only">Copy email</span>
              </Button>
            </div>
          </SpotlightCard>

          <SpotlightCard className="reveal divide-y">
            {links.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <Icon className="size-4 text-primary" />
                  <span className="w-20 font-mono text-xs text-muted-foreground">{label}</span>
                  <span className="flex-1 truncate text-sm">{value}</span>
                  {href && <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />}
                </>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-7 py-4 transition-colors hover:bg-secondary/40"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 px-7 py-4">
                  {content}
                </div>
              )
            })}
          </SpotlightCard>

          <SpotlightCard id="resume" className="reveal p-7">
            <p className="font-mono text-xs text-muted-foreground">resume.pdf</p>
            <p className="mt-2 text-lg font-semibold">Grab the full CV</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm" className="rounded-full">
                <a href={resumePath} target="_blank" rel="noopener noreferrer" download>
                  <Download />
                  Download
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                    <Eye />
                    Preview
                  </Button>
                </DialogTrigger>
                <DialogContent className="flex h-[85vh] max-w-4xl flex-col rounded-2xl p-4">
                  <DialogHeader>
                    <DialogTitle>Curriculum Vitae</DialogTitle>
                  </DialogHeader>
                  <iframe src={resumePath} className="h-full w-full rounded-lg border" title="Khalil Krifi Resume" />
                </DialogContent>
              </Dialog>
            </div>
          </SpotlightCard>
        </div>

        <SpotlightCard className="reveal p-7 md:p-9 lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-xs text-muted-foreground">
                  name
                </label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ada Lovelace"
                  required
                  disabled={isSubmitting}
                  className="h-11 bg-background/60"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs text-muted-foreground">
                  email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ada@example.com"
                  required
                  disabled={isSubmitting}
                  className="h-11 bg-background/60"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
                message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, team or idea…"
                rows={8}
                required
                disabled={isSubmitting}
                className="resize-none bg-background/60"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 w-full rounded-full text-base" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send message"}
              <Send />
            </Button>
          </form>
        </SpotlightCard>
      </div>
    </section>
  )
}
