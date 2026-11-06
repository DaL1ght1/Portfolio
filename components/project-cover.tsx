import { Fragment } from "react"
import type { CSSProperties } from "react"
import type { Project } from "@/lib/data"
import { cn } from "@/lib/utils"

// Generated "terminal + architecture" artwork. Sizes are in container units (see .cover in
// globals.css), so it scales like an image and drops the flow diagram on narrow cards.
export default function ProjectCover({ cover, className }: { cover: Project["cover"]; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("cover", className)}
      style={{ "--len": cover.title.length } as CSSProperties}
    >
      <div className="bg-grid absolute inset-0 [mask-image:none]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_90%_at_50%_0%,hsl(var(--glow)/0.22),transparent)]" />

      <div className="cover-body relative flex w-full flex-col items-center px-[5cqw] text-center">
        <p className="cover-cmd max-w-full truncate font-mono text-primary">{cover.command}</p>
        <p className="cover-title font-bold leading-none tracking-tight text-foreground">{cover.title}</p>
        <p className="cover-tagline max-w-full text-muted-foreground">{cover.tagline}</p>

        <div className="cover-flow items-center">
          {cover.flow.map(([name, sub], i) => (
            <Fragment key={name}>
              {i > 0 && (
                <svg viewBox="0 0 40 10" className="cover-arrow shrink-0 text-primary" fill="none">
                  <path d="M0 5H34" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M33 1.5L39 5L33 8.5z" fill="currentColor" />
                </svg>
              )}
              <div className={cn("cover-node font-mono", i === cover.hot && "cover-node-hot")}>
                <p className="cover-node-name">{name}</p>
                <p className="cover-node-sub text-muted-foreground">{sub}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
