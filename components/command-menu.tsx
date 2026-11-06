"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import { ArrowRight, Copy, FileText, Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { DialogTitle } from "@/components/ui/dialog"
import { navLinks, profile } from "@/lib/data"
import { getImagePath } from "@/lib/utils"

export const OPEN_COMMAND_MENU = "open-command-menu"

export function openCommandMenu() {
  window.dispatchEvent(new Event(OPEN_COMMAND_MENU))
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    const onOpen = () => setOpen(true)

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener(OPEN_COMMAND_MENU, onOpen)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener(OPEN_COMMAND_MENU, onOpen)
    }
  }, [])

  const run = (action: () => void) => {
    setOpen(false)
    action()
  }

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  const openUrl = (url: string) => window.open(url, "_blank", "noopener,noreferrer")

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Command menu</DialogTitle>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {navLinks.map((link) => (
            <CommandItem key={link.id} onSelect={() => run(() => goTo(link.id))}>
              <ArrowRight />
              {link.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem onSelect={() => run(() => openUrl(profile.github))}>
            <Github />
            GitHub
          </CommandItem>
          <CommandItem onSelect={() => run(() => openUrl(profile.linkedin))}>
            <Linkedin />
            LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => run(() => openUrl(getImagePath("/resume.pdf")))}>
            <FileText />
            Open resume
          </CommandItem>
          <CommandItem onSelect={() => run(() => (window.location.href = `mailto:${profile.email}`))}>
            <Mail />
            Send an email
          </CommandItem>
          <CommandItem
            onSelect={() =>
              run(() => {
                navigator.clipboard.writeText(profile.email)
                toast.success("Email copied to clipboard")
              })
            }
          >
            <Copy />
            Copy email address
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Preferences">
          <CommandItem onSelect={() => run(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))}>
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
            Switch to {resolvedTheme === "dark" ? "light" : "dark"} theme
            <CommandShortcut>theme</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
