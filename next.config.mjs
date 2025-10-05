/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
  },
  // GitHub Pages uses a subdirectory, so we need to set basePath
  // Comment out these lines if deploying to custom domain or root
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
}

export default nextConfig