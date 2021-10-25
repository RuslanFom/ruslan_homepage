import Layout from '../components/layouts/article'
import {Container} from '@chakra-ui/react'
import {WorkImage} from '../components/work'

const Exterminatus = () => (
    <Layout title='exterminatus'>
        <Container>
            <WorkImage src="/images/works/garbage.jpg"/>
        </Container>
    </Layout>
)

export default Exterminatus