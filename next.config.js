/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-yyz1-1.cdninstagram.com',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/our-story',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
