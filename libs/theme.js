import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
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
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    },
    Input: {
        variants: {
          custom: {
            field: {
              px: 5,
              py: 2,
              minH: "14",
              rounded: "lg",
              fontSize: "lg",
              w: "full",
              bg: "black.200",
              border: "none",
              _placeholder: { color: "white.500" },
              boxShadow: "0 25px 50px -12px #0E0E10",
              _focus: {
                outline: "none",
                boxShadow: "0 25px 50px -12px #0E0E10"
              }
            }
          }
        }
      },
      Textarea: {
        variants: {
          custom: {
            px: 5,
            py: 2,
            minH: "14",
            rounded: "lg",
            fontSize: "lg",
            w: "full",
            bg: "black.200",
            border: "none",
            _placeholder: { color: "white.500" },
            boxShadow: "0 25px 50px -12px #0E0E10",
            _focus: {
              outline: "none",
              boxShadow: "0 25px 50px -12px #0E0E10"
            }
          }
        }
      },
      Button: {
        variants: {
          custom: {
            bg: "teal.500",
            color: "white",
            px: { base: 3, sm: 4, md: 5 },
            py: { base: 1, sm: 1.5, md: 2 },
            minH: { base: "10", sm: "11", md: "12" },
            rounded: "lg",
            fontSize: { base: '12px', sm: '14px', md: '16px', lg: '18px' },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 25px 50px -12px #0E0E10",
            _focus: {
              outline: "none",
              boxShadow: "0 25px 50px -12px #0E0E10"
            },
            _hover: { bg: "teal.600", boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)" }
          }
        }
      }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
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