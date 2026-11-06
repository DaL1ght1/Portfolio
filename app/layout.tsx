import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import CommandMenu from "@/components/command-menu"
import Backdrop from "@/components/backdrop"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Khalil Krifi | Software Engineer (AI, ML, Backend)",
  description:
    "Software Engineer specializing in Backend Engineering, Scalable Backend Systems, Scala, Spring Boot, Microservices, and Cloud-Native DevOps.",
  keywords: [
    "Khalil Krifi",
    "Software Engineer",
    "Backend Engineer",
    "ENSI Graduate",
    "AI/ML Engineer",
    "Scala",
    "Spring Boot",
    "Kubernetes",
    "Kafka",
    "Tunisia",
  ],
  authors: [{ name: "Khalil Krifi" }],
  openGraph: {
    title: "Khalil Krifi | Software Engineer Portfolio",
    description:
      "Software Engineer specializing in Backend Engineering, Microservices, Scala, Python, Spring Boot, and Cloud-Native DevOps.",
    url: "https://DaL1ght1.github.io/Portfolio",
    siteName: "Khalil Krifi Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/Portfolio/icon.png",
    shortcut: "/Portfolio/icon.png",
    apple: "/Portfolio/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Backdrop />
          <Navbar />
          <CommandMenu />
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
