import { AspectRatio, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkImage } from '../components/work'

const Code = () => (
  <Layout title='examples'>
    <Container>
      <Section>
        <Heading as="h3" variant="section-title" p={3}>
            Code examples
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2]} gap={3}>
            <AspectRatio maxW='400px' maxH='150px' ratio={16 / 9}>
              <WorkImage src='/images/works/examples/api.png' alt='api' objectFit='cover' />
            </AspectRatio>
            <AspectRatio maxW='400px' maxH='150px' ratio={16 / 9}>
              <WorkImage src='/images/works/examples/auth-reducer.png' alt='auth-reducer' objectFit='cover' />
            </AspectRatio>
            <AspectRatio maxW='400px' maxH='150px' ratio={16 / 9}>
              <WorkImage src='/images/works/examples/app.test.png' alt='app.test' objectFit='cover' />
            </AspectRatio>
            <AspectRatio maxW='400px' maxH='150px' ratio={16 / 9}>
              <WorkImage src='/images/works/examples/App.png' alt='App' objectFit='cover' />
            </AspectRatio>
            {/*<Section>
                        <WorkImage src="/images/works/garbage.jpg"/>
                    </Section>*/}
          </SimpleGrid>
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Code