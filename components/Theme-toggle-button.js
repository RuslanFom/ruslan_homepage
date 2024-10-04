import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const animationVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
  transition: { duration: 0.2 }
}

const ThemeToggleButton = React.memo(({ size = 'md', variant = 'solid' }) => {
  const { toggleColorMode } = useColorMode()
  const isDark = useColorModeValue(false, true)

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={isDark ? 'dark' : 'light'}
        variants={animationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <IconButton
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          colorScheme={isDark ? 'orange' : 'purple'}
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          size={size}
          variant={variant}
        />
      </motion.div>
    </AnimatePresence>
  )
})

ThemeToggleButton.displayName = 'ThemeToggleButton'

ThemeToggleButton.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string
}

export default ThemeToggleButton