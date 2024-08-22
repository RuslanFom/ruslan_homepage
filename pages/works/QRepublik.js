import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const QRepublik = () => {
    return (
        <Layout title="QRepublik">
            <Container>
                <Title>
                    QRepublik <Badge>2021</Badge>
                </Title>
                <P>
                    Landing-page for QRepublik company, my work assignment
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://qrepublik.id/'>
                            https://qrepublik.id/ <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Next.JS, react-i18next, SCSS, Ant Design, js-cookie</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/examples/loginQRep.png" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik1eng.png" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik2eng.png" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik3eng.png" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik4eng.png" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik5eng.png" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik6eng.png" alt="QRepublik" />
            </Container>
        </Layout>
    )
}

export default QRepublik
export { getServerSideProps } from '../../components/chakra'