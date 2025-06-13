/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },  // Only use basePath and assetPrefix for production builds
  ...(isDev ? {} : {
    basePath: '/site-demo',
    assetPrefix: '/site-demo/',
  }),
  trailingSlash: true,
}

module.exports = nextConfig