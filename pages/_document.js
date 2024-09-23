import {ColorModeScript} from '@chakra-ui/react'
import {Html, Head, Main, NextScript} from 'next/document'
import theme from '../libs/theme'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'


const Document = () => {

    return (
        <Html lang='en'>
            <Head>
            </Head>
            <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <Main/>
            <NextScript/>
            <SpeedInsights />
            </body>
          <GoogleAnalytics gaId="G-316GGV27V6" />
        </Html>
    )
}

export default Document
