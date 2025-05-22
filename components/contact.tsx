"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionMessage("")

    try {
      const response = await fetch("https://formspree.io/f/mwpojrqj", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", 
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmissionMessage("Thank you for your message! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmissionMessage("Oops! Something went wrong. Please try again later or email me directly.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionMessage("There was a problem submitting your form. Please check your connection or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container bg-muted/50 py-16 md:py-24">
      <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto px-4">
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-6 text-muted-foreground">
            Feel free to reach out if you're looking for a software engineer, have a question, or just want to connect.
          </p>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:khalil.krifi@ensi-uma.tn" className="text-sm text-primary hover:underline">
                    khalil.krifi@ensi-uma.tn
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Boumhal Bassatine, Ben Arous, Tunisia</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/khalil-krifi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    linkedin.com/in/khalil-krifi
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a
                    href="https://github.com/DaL1ght1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    github.com/DaL1ght1
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email" 
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                required
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {submissionMessage && (
              <p className={`mt-2 text-sm ${submissionMessage.includes("Oops") || submissionMessage.includes("problem") ? "text-red-500" : "text-green-500"}`}>
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}