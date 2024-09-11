import Layout from '../components/layouts/article'
import {Box, Button, Container, Heading, useColorModeValue} from '@chakra-ui/react'
import {WorkImage} from '../components/work'
import NextLink from "next/link";
import Esercizio from "../components/esercizio/esercizio";

const Exterminatus = () => (
    <Layout title='exterminatus'>
        <Container>
            <WorkImage src="/images/works/garbage.jpg"/>
        </Container>
        {/*TRAINING NEW FEATURE*/}

       {/* <Box
            align="center"
            p={3}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
            <Heading>Training</Heading>
            <Esercizio/>
        </Box>*/}

        {/*  FINISHING NEW FEATURE*/}
        <Box my={6} align="center">
            <NextLink href="/">
                <Button colorScheme="teal">Return to home</Button>
            </NextLink>
        </Box>
    </Layout>
)

export default Exterminatus