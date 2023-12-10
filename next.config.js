/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
