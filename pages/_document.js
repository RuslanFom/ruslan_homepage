import {ColorModeScript} from '@chakra-ui/react'
import {Html, Head, Main, NextScript} from 'next/document'
import theme from '../libs/theme'
import {G_TAG} from "../libs/constants"
import { SpeedInsights } from "@vercel/speed-insights/next"

const Document = () => {
    const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${G_TAG}`

    return (
        <Html lang='en'>
            <Head>
                {/* Google Analytics Script */}
                <script async src={gtagUrl}></script>
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
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <Main/>
            <NextScript/>
            <SpeedInsights />
            </body>
        </Html>
    )
}

export default Document
