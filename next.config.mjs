/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'back.sbd.gov.mn',
      },
    ],
  },
};

export default nextConfig;
