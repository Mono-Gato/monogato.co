/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
