"use client"

import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect mb-8 ${mounted ? 'animate-scale-in' : 'opacity-0'}`}>
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold">Available for Internship Opportunities</span>
          </div>

          {/* Name */}
          <h1 className={`text-6xl md:text-8xl font-black mb-6 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              Khalil Krifi
            </span>
          </h1>

          {/* Title */}
          <p className={`text-2xl md:text-3xl font-bold text-foreground/90 mb-4 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Software Engineering Student
          </p>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            Specializing in <span className="text-primary font-semibold">AI/ML</span>, <span className="text-primary font-semibold">Full-Stack Development</span>, and <span className="text-primary font-semibold">DevOps</span>
          </p>

          {/* Contact Info */}
          <div className={`flex flex-wrap justify-center gap-4 mb-10 text-sm ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Boumhal, Ben Arous, Tunisia</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <Phone className="h-4 w-4 text-primary" />
              <span>+216 28 042 451</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all">
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all">
              <Link href="#contact">
                Get In Touch
                <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className={`flex gap-4 justify-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 hover:bg-primary/10 transition-all">
              <Link href="https://github.com/DaL1ght1" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 hover:bg-primary/10 transition-all">
              <Link href="https://linkedin.com/in/khalil-krifi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 hover:bg-primary/10 transition-all">
              <Link href="mailto:khalil.krifi@ensi-uma.tn">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <Button variant="ghost" size="icon" className="rounded-full h-14 w-14">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
