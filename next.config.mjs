import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js"

const basePath = "/Portfolio"

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    // Static export is only needed for the GitHub Pages build; in dev it would disable redirects.
    output: isDev ? undefined : "export",
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
      loader: "custom",
      loaderFile: "./lib/image-loader.ts",
    },
    basePath,
    assetPrefix: basePath,
    // `bun dev` prints http://localhost:3000, which would 404 because of the basePath.
    ...(isDev && {
      redirects: async () => [{ source: "/", destination: basePath, basePath: false, permanent: false }],
    }),
  }
}
