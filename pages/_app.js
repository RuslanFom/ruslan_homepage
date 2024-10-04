import { useEffect, useCallback, useMemo } from 'react';
import '../i18n';
import { AnimatePresence } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React from 'react';
import { Inter, M_PLUS_Rounded_1c } from '@next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin', 'cyrillic'] })
const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['300', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Chakra = dynamic(() => import('../components/Chakra'), { ssr: true });
const Layout = dynamic(() => import('../components/layouts/Main'), { ssr: true });

function Website({ Component, pageProps }) {
  const router = useRouter();
  const MemoizedLayout = useMemo(() => React.memo(Layout), []);

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

  const memoizedPageProps = useMemo(() => pageProps, [pageProps]);

  const AnimatePresenceWrapper = useMemo(() => (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 });
        }
      }}
    />
  ), []);

  return (
    <Chakra cookies={memoizedPageProps.cookies}>
      <style jsx global>{`
                :root {
                    --font-inter: ${inter.style.fontFamily};
                    --font-m-plus-rounded-1c: ${mPlusRounded1c.style.fontFamily};
                }
            `}</style>
      <MemoizedLayout router={router}>
        {AnimatePresenceWrapper}
        <Component {...memoizedPageProps} key={router.route} />
        <SpeedInsights />
        {AnimatePresenceWrapper}
      </MemoizedLayout>
    </Chakra>
  );
}

export default appWithTranslation(Website);
