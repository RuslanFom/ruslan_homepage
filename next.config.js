const { i18n } = require('./next-i18next.config');

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    i18n,
}


const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    org: "simpledev-f3",
    project: "homepage",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
