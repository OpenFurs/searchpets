/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  compiler: {
    removeConsole: true,
  },
  webpack: {
    optimizeCSS: true,
  },
  images: {
    domains: ['www.housepetscomic.com']
  },
}

module.exports = nextConfig
