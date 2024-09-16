import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/Section'
import {WorkGridItem} from '../components/Grid-item'
import thumbSN from '../public/images/works/sn.png'
import thumbTA from '../public/images/works/testAppLogin.png'
import thumbBA from '../public/images/works/sign-up.png'
import thumbQR from '../public/images/works/examples/QRepublik1eng.png'
import Layout from '../components/layouts/Article'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid w='100%' h='auto' columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id='BankApp'
                            title='F-Bank'
                            thumbnail={thumbBA}
                        >
                            My banking app platform
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem
                            id='QRepublik'
                            title='QRepublik'
                            thumbnail={thumbQR}
                        >
                            My last job, landing-page for QRepublik company
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='Social-media-app'
                            title='Social-media-app'
                            thumbnail={thumbSN}
                        >
                            My pet-project, in which I implement and consolidate all the material I have learned
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='ChartsApp'
                            title='ChartsApp'
                            thumbnail={thumbTA}
                        >
                            My statement of work from the employer
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works
export {getServerSideProps} from './_app'