const { i18n } = require('./next-i18next.config');
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  i18n,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'react-icons'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 100, 128, 256],
  },
  async redirects() {
    return [
      /** Старый URL деплоя Vercel → основной домен (без дублей в поиске). */
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ruslan-homepage.vercel.app' }],
        destination: 'https://ruslanfomin.com/:path*',
        permanent: true,
      },
      {
        source: "/movies",
        destination: "https://movies.ruslanfomin.com",
        permanent: false,
      },
    ];
  },
};

module.exports = withSentryConfig(nextConfig, {
    org: 'simpledev-f3',
    project: 'homepage',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
});
