import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

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

                <WorkImage src="/images/works/testAppLogin.png" alt="ChartsApp" />
                <WorkImage src="/images/works/testAppLoginFail.png" alt="ChartsApp" />
                <WorkImage src="/images/works/testAppGraphics.png" alt="ChartsApp" />
                <WorkImage src="/images/works/testAppGraphics2.png" alt="ChartsApp" />
            </Container>
        </Layout>
    )
}

export default ChartAppWork