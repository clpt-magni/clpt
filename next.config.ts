import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/how-to-select-a-good-pharmacy-or-m-pharmacy-college',
        destination: '/how-to-select-a-good-pharmacy-college',
        permanent: true,
      },
      {
        source: '/b-pharm-vs-m-pharm',
        destination: '/b-pharmacy-vs-m-pharmacy',
        permanent: true,
      },
      {
        source: '/b-pharmacy-vs-m-pharmacy-which-is-right-for-you',
        destination: '/b-pharmacy-vs-m-pharmacy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
