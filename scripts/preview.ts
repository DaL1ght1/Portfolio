// Serves the static export under the same /Portfolio base path GitHub Pages uses.
import { join, normalize } from "node:path"

const BASE = "/Portfolio"
const ROOT = join(import.meta.dir, "..", "out")
const port = Number(process.env.PORT ?? 3000)

Bun.serve({
  port,
  async fetch(req) {
    const { pathname } = new URL(req.url)
    if (pathname === "/" || !pathname.startsWith(BASE)) return Response.redirect(`${BASE}/`, 302)

    const rel = normalize(decodeURIComponent(pathname.slice(BASE.length))).replace(/^([/\\]|\.\.)+/, "")
    for (const candidate of [rel, join(rel, "index.html"), `${rel}.html`]) {
      const file = Bun.file(join(ROOT, candidate))
      if (candidate && (await file.exists())) return new Response(file)
    }
    return new Response(Bun.file(join(ROOT, "404.html")), { status: 404 })
  },
})

console.log(`Previewing ./out at http://localhost:${port}${BASE}/`)
