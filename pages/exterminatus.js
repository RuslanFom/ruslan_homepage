import Layout from '../components/layouts/article'
import {Box, Button, Container} from '@chakra-ui/react'
import {WorkImage} from '../components/work'
import NextLink from "next/link";

const Exterminatus = () => (
    <Layout title='exterminatus'>
        <Container>
            <WorkImage src="/images/works/garbage.jpg"/>
        </Container>
        <Box my={6} align="center">
            <NextLink href="/">
                <Button colorScheme="teal">Return to home</Button>
            </NextLink>
        </Box>
    </Layout>
)

export default Exterminatus