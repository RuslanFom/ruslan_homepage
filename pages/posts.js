import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Link = () => (
    <Layout title='Posts'>
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Contacts
            </Heading>
            <Section delay={0.1}>

            </Section>
        </Container>
    </Layout>
)