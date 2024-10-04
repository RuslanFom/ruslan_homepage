import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        ':root': {
            '--font-mplus-rounded-1c': '"M PLUS Rounded 1c", sans-serif',
        },
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            fontFamily: 'var(--font-inter)',
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        },
        baseStyle: {
            fontFamily: 'var(--font-m-plus-rounded-1c)',
        },
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: 'var(--font-m-plus-rounded-1c), sans-serif',
    body: 'var(--font-inter), sans-serif',
}

const colors = {
    grassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme