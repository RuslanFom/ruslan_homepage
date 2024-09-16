import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://218d809b44816c309c17484c62bb8ba4@o4507729899814912.ingest.de.sentry.io/4507815062667344",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
