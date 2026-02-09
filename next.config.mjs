/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],   // High compression automatic
    minimumCacheTTL: 31536000,              // Cache 1 year
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/games',
        permanent: true,
      },
    ];
  },

  turbopack: {}, // 👈 IMPORTANT (silences error)
};

export default nextConfig;
