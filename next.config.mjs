/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode to catch potential issues
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
    unoptimized: true, // Allow local image imports without optimization issues
  },
  assetPrefix: '', // Ensure assets are served from the root
};

export default nextConfig;
