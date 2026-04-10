import React from 'react'
import { Box } from '@chakra-ui/react'
import { GridItemStyle } from '../Grid-item'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_PAGE_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_LOCALE,
  canonicalFromAsPath,
  languageAlternateRefs,
  openGraphLocale,
} from '../../libs/site'

/** Extra meta descriptions for inner pages (title key = Layout `title` prop). */
const PAGE_SEO_BY_TITLE = {
  Skills:
    'Technical skills and stack: React, Next.js, Node.js, TypeScript, Three.js, databases, tooling, and languages.',
  contactForm: 'Contact Ruslan Fomin — send a message through the site contact form.',
  Works: 'Portfolio: selected web projects, demos, and case studies by Ruslan Fomin.',
  contacts: 'Contact links: Telegram, email, LinkedIn, WhatsApp, and other channels.',
  examples: 'Examples and small experiments from Ruslan Fomin’s development work.',
  exterminatus: 'Exterminatus — project page on Ruslan Fomin’s personal site.',
  'Social-media-app': 'Social media application — portfolio project by Ruslan Fomin.',
  'F-Bank': 'F-Bank — banking UI concept and demo project in the portfolio.',
  QRepublik: 'QRepublik — featured project in Ruslan Fomin’s portfolio.',
  ChartsApp: 'Charts application — data visualization project overview.',
}

const Layout = React.memo(({ children, title, description }) => {
  const router = useRouter()
  const canonical = canonicalFromAsPath(router.asPath)
  const pageTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_PAGE_TITLE
  const metaDescription =
    description ?? (title ? PAGE_SEO_BY_TITLE[title] : null) ?? DEFAULT_DESCRIPTION
  const ogImageUrl = `${SITE_URL}${DEFAULT_OG_IMAGE}`
  const alternates = languageAlternateRefs(router.asPath, DEFAULT_LOCALE)

  return (
    <Box as="article" position="relative">
      <NextSeo
        title={pageTitle}
        description={metaDescription}
        canonical={canonical}
        languageAlternateRefs={alternates}
        openGraph={{
          type: 'website',
          url: canonical,
          title: pageTitle,
          description: metaDescription,
          siteName: SITE_NAME,
          locale: openGraphLocale(router.locale || DEFAULT_LOCALE),
          images: [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: pageTitle,
            },
          ],
        }}
        twitter={{
          handle: '@PycJIaHWi',
          site: '@PycJIaHWi',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[{ name: 'author', content: SITE_NAME }]}
      />
      {children}
      <GridItemStyle />
    </Box>
  )
})

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
