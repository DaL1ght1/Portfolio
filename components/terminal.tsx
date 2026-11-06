"use client"

import { useEffect, useState } from "react"

type Line = { kind: "cmd" | "out"; text: string }

const script: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "khalil krifi — software engineer @ tunis" },
  { kind: "cmd", text: "cat stack.yml" },
  { kind: "out", text: "backend: [java, spring-boot, Go, scala]" },
  { kind: "out", text: "ai:      [langgraph, vllm, pytorch]" },
  { kind: "out", text: "infra:   [kafka, kubernetes, argocd]" },
  { kind: "cmd", text: "kubectl get pods -n nlq-platform" },
  { kind: "out", text: "query-api-7d9f   1/1   Running" },
  { kind: "out", text: "ai-worker-5c2b   1/1   Running" },
  { kind: "out", text: "web-bff-81ae     1/1   Running" },
  { kind: "cmd", text: "echo $STATUS" },
  { kind: "out", text: "open to new opportunities ✓" },
]

export default function Terminal() {
  const [line, setLine] = useState(0)
  const [chars, setChars] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setLine(script.length)
  }, [])

  useEffect(() => {
    if (line >= script.length) return
    const current = script[line]
    const next = () => {
      setLine((l) => l + 1)
      setChars(0)
    }

    if (current.kind === "out") {
      const t = setTimeout(next, 120)
      return () => clearTimeout(t)
    }
    if (chars < current.text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 45 + Math.random() * 40)
      return () => clearTimeout(t)
    }
    const t = setTimeout(next, 450)
    return () => clearTimeout(t)
  }, [line, chars])

  const done = line >= script.length

  return (
    <div aria-hidden="true" className="overflow-hidden rounded-2xl border bg-card/80 shadow-2xl shadow-primary/5 backdrop-blur-md">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="size-3 rounded-full bg-red-500/80" />
        <span className="size-3 rounded-full bg-yellow-500/80" />
        <span className="size-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">khalil@portfolio: ~</span>
      </div>
      {/* Fixed height so the hero doesn't shift while typing. */}
      <div className="h-[340px] overflow-hidden p-5 font-mono text-[13px] leading-6">
        {script.slice(0, done ? script.length : line + 1).map((l, i) => {
          const text = i === line && l.kind === "cmd" ? l.text.slice(0, chars) : l.text
          return l.kind === "cmd" ? (
            <div key={i} className="whitespace-pre">
              <span className="text-primary">❯</span> {text}
              {i === line && <span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary" />}
            </div>
          ) : (
            <div key={i} className="whitespace-pre text-muted-foreground">
              {text}
            </div>
          )
        })}
        {done && (
          <div>
            <span className="text-primary">❯</span>{" "}
            <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-primary" />
          </div>
        )}
      </div>
    </div>
  )
}
