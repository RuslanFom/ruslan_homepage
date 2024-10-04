import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import theme from '../libs/theme'
import { G_TAG } from "../libs/constants"

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </Head>
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main />
      <NextScript />

      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${G_TAG}');
                    `}
      </Script>
      </body>
    </Html>
  )
}

export default Document
