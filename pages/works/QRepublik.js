import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/Work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

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

                <WorkImage src="/images/works/examples/loginQRep.webp" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik1eng.webp" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik2eng.webp" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik3eng.webp" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik4eng.webp" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik5eng.webp" alt="QRepublik" />
                <WorkImage src="/images/works/examples/QRepublik6eng.webp" alt="QRepublik" />
            </Container>
        </Layout>
    )
}

export default QRepublik
export {getServerSideProps} from '../index'