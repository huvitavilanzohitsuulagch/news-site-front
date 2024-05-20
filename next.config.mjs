/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'back.sbd.gov.mn',
      },
      {
        protocol: 'https',
        hostname: 'gerege.mn',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'chingeltei.gov.mn',
      },
    ],
  },
};

export default nextConfig;
