/** @type {import('next').NextConfig} */const nextConfig = {
  reactStrictMode: true,
  images: {
  remotePatterns: [
  {
  protocol: 'https',
  hostname: '**.giphy.com',
  },
  ],
  experimental: {
    appDir: true,
  },
  },
  }
  module.exports = nextConfig