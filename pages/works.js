import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/Section'
import {WorkGridItem} from '../components/Grid-item'
import thumbSN from '../public/images/works/sn.webp'
import thumbTA from '../public/images/works/testAppLogin.webp'
import thumbBA from '../public/images/works/sign-up.webp'
import thumbQR from '../public/images/works/examples/QRepublik1eng.webp'
import Layout from '../components/layouts/Article'
import {useTranslation} from "next-i18next";

const Works = () => {
    const {t} = useTranslation('common');
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4} variant="section-title" pb={3}>
                    {t('nav.works')}
                </Heading>

                <SimpleGrid w='100%' h='auto' columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id='BankApp'
                            title='F-Bank'
                            thumbnail={thumbBA}
                        >
                            {t('work1.about')}
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem
                            id='QRepublik'
                            title='QRepublik'
                            thumbnail={thumbQR}
                        >
                            {t('work2.about')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='Social-media-app'
                            title='Social-media-app'
                            thumbnail={thumbSN}
                        >
                            {t('work3.about')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='ChartsApp'
                            title='ChartsApp'
                            thumbnail={thumbTA}
                        >
                            {t('work4.about')}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works
export {getServerSideProps} from './index'