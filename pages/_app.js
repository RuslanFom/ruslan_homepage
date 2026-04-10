import { useEffect, useCallback } from 'react';
import '../i18n';
import { AnimatePresence, motion } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const Chakra = dynamic(() => import('../components/Chakra'), { ssr: true });
const Layout = dynamic(() => import('../components/layouts/Main'), { ssr: true });

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

function Website({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, handleRouteChange]);

  const cookies = pageProps.cookies ?? '';

  return (
    <Chakra cookies={cookies}>
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <motion.div
            key={`${router.locale}-${router.asPath}`}
            variants={pageVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <SpeedInsights />
      </Layout>
    </Chakra>
  );
}

export default appWithTranslation(Website);
