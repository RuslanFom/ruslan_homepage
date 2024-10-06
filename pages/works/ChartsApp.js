import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/Work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const ChartAppWork = () => {
    return (
        <Layout title="ChartsApp">
            <Container>
                <Title>
                    Chart App <Badge>2021</Badge>
                </Title>
                <P>
                    My statement of work from the employer, in which I needed to make a login, verification, redirect to the page where I show 2 graphs about attendance and accounting of people by age
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://github.com/RuslanFom/testApp'>
                            https://github.com/RuslanFom/testApp <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Next.js, react-chartjs-2</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/testAppLogin.webp" alt="ChartsApp" />
                <WorkImage src="/images/works/testAppLoginFail.webp" alt="ChartsApp" />
                <WorkImage src="/images/works/testAppGraphics.webp" alt="ChartsApp" />
                <WorkImage src="/images/works/testAppGraphics2.webp" alt="ChartsApp" />
            </Container>
        </Layout>
    )
}

export default ChartAppWork
export {getServerSideProps} from '../index'