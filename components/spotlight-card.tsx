"use client"

import type React from "react"
import { cn } from "@/lib/utils"

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement>

export default function SpotlightCard({ className, onMouseMove, ...props }: SpotlightCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`)
    onMouseMove?.(e)
  }

  return <div className={cn("spotlight", className)} onMouseMove={handleMouseMove} {...props} />
}
