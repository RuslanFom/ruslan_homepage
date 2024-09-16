import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../Navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from "../Voxel-dog-loader";
import Footer from "../Footer";

const LazyVoxelDog = dynamic(() => import('../Voxel-dog'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Ruslan's homepage"/>
            <meta name="author" content="Ruslan Fomin"/>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            <meta name="twitter:title" content="Ruslan Fomin"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:site_name" content="Ruslan Fomin"/>
            <meta property="og:title" content="Ruslan Fomin - Homepage"/>
            <meta property="og:type" content="website"/>
            <meta name="og:title" content="Ruslan Fomin"/>

            <title>Ruslan Fomin - Homepage</title>
        </Head>

        <Navbar path={router.asPath}/>

        <Container maxW='container.md' pt={14}>
          <LazyVoxelDog />
          {children}
          <Footer />
      </Container>
    </Box>
  )
}

export default Main
export { getServerSideProps } from '../../pages/index';
