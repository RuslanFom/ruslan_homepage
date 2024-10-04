const { i18n } = require('./next-i18next.config');
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n,
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
