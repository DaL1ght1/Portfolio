/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/DaL1ght1/Portfolio',
  assetPrefix: '/DaL1ght1/Portfolio',
}

export default nextConfig