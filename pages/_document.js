import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'
import { G_TAG } from "../libs/constants"

export default class Document extends NextDocument {
  render() {
    const url = "https://www.googletagmanager.com/gtag/js?id=" + `${G_TAG}`
    return (
      <Html lang='en'>
        <Head>
          <script async src={`${url}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${G_TAG}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}