import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager
} from '@chakra-ui/react'
import defaultTheme from '../libs/theme'

const Chakra = React.memo(({ cookies, children }) => {
    const [colorModeManager, setColorModeManager] = useState(
      typeof cookies === 'string'
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager
    )

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setColorModeManager(localStorageManager)
        }
    }, [])

    return (
      <ChakraProvider theme={defaultTheme} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    )
})

Chakra.displayName = 'Chakra'

Chakra.propTypes = {
    cookies: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Chakra

