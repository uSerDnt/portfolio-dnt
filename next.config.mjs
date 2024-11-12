/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "images.pexels.com", "api.microlink.io"],
    unoptimized: true,
  },
};

export default nextConfig;
