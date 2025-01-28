/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/academic-website/",
  basePath: "/academic-website",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

