import { useMemo } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import { JsonLd } from 'react-schemaorg'
import { SITE_NAME, absoluteUrl } from '../../libs/site'

const Navbar = dynamic(() => import('../Navbar'))
const VoxelDogLoader = dynamic(() => import('../Voxel-dog-loader'))

const LazyVoxelDog = dynamic(() => import('../Voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
})

const Footer = dynamic(() => import('../Footer'))

const Main = ({ children, router }) => {
  const personUrl = useMemo(() => absoluteUrl('/'), [])

  return (
    <Box as="main" pb={8} lang={router.locale ?? 'en'}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: SITE_NAME,
          jobTitle: 'Full Stack Developer',
          url: personUrl,
          sameAs: [
            'https://github.com/RuslanFom',
            'https://linkedin.com/in/fom28',
            'https://twitter.com/PycJIaHWi',
          ],
        }}
      />
      <JsonLd
        item={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: personUrl,
          description:
            'Personal website and portfolio of Ruslan Fomin, full stack developer.',
          publisher: {
            '@type': 'Person',
            name: SITE_NAME,
            url: personUrl,
          },
        }}
      />

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
