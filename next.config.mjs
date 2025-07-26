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
  // Ensure proper handling of static files and API routes
  async rewrites() {
    return [
      {
        source: "/_vercel/:path*",
        destination: "/_vercel/:path*",
      },
    ]
  },
}

export default nextConfig
