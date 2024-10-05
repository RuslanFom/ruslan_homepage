import { useMemo } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import { JsonLd } from 'react-schemaorg'
const Navbar = dynamic(() => import('../Navbar'))
const VoxelDogLoader = dynamic(() => import("../Voxel-dog-loader"))
const Footer = dynamic(() => import("../Footer"))

const LazyVoxelDog = dynamic(() => import('../Voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  const meta = useMemo(() => ({
    title: "Ruslan Fomin - Full Stack Developer | Homepage",
    description: "Official website of Ruslan Fomin, Full Stack developer. Portfolio, projects, contacts.",
    author: "Ruslan Fomin",
    image: "/images/ruslan.jpg",
    url: "https://ruslan-homepage.vercel.app/",
    locale: 'en_US',
    twitterHandle: '@PycJIaHWi'
  }), [])

  return (
    <Box as="main" pb={8} lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={meta.url}
        openGraph={{
          type: 'website',
          locale: meta.locale,
          url: meta.url,
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: `${meta.url}${meta.image}`,
              width: 1200,
              height: 630,
              alt: meta.title
            }
          ],
          site_name: meta.author
        }}
        twitter={{
          handle: meta.twitterHandle,
          site: meta.twitterHandle,
          cardType: 'summary_large_image'
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          },
          {
            name: 'author',
            content: meta.author
          }
        ]}
      />
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: meta.author,
          jobTitle: "Full Stack Developer",
          url: meta.url,
          sameAs: [
            "https://github.com/RuslanFom",
            "https://linkedin.com/in/fom28"
          ]
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
