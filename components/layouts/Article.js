import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../Grid-item'
import PropTypes from 'prop-types'

const SITE_NAME = 'Ruslan Fomin'

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

const Layout = React.memo(({
                             children,
                             title,
                             transitionDuration = 0.4,
                             transitionType = 'easeInOut'
                           }) => {
  const pageTitle = title ? `${title} - ${SITE_NAME}` : SITE_NAME;

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: transitionDuration, type: transitionType }}
      style={{ position: 'relative' }}
    >
      {title && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </motion.article>
  )
})

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  transitionDuration: PropTypes.number,
  transitionType: PropTypes.string
}

export default Layout
