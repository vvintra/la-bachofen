/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comenta o elimina esta línea para permitir APIs dinámicas
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Otras configuraciones que puedas tener...
}

export default nextConfig
