/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.datocms-assets.com', 'cdn.pixabay.com'],
  },
  env: {
    KEY: 'f8d319e0ad130ab02b053e07ccbef5',
  },
}

module.exports = nextConfig
