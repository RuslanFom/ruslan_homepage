import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/Work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const SocialNetWork = () => {
    return (
        <Layout title="Social-media-app">
            <Container>
                <Title>
                    Social Media App <Badge>2021</Badge>
                </Title>
                <P>
                    My pet-project, in which I implement and consolidate all the material I have learned.
                    While doing it, I learned how to develop in React, connect Api, use the Redux state manager,
                    understand the Flux cycle, pull users from the backend, did pagination, save data in cookies,
                    login, validation, life cycle methods, write tests, add captcha, integrate TypeScript and such more things, as I continue to study and learn new things.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://github.com/RuslanFom/Socnet'>
                            https://github.com/RuslanFom/Socnet <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    {/*<ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>*/}
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Redux, NodeJS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/sn.png" alt="Social-media-app" />
                <WorkImage src="/images/works/sn2.png" alt="Social-media-app" />
                <WorkImage src="/images/works/sn3.png" alt="Social-media-app" />
                <WorkImage src="/images/works/sn4.png" alt="Social-media-app" />
            </Container>
        </Layout>
    )
}

export default SocialNetWork
export { getServerSideProps } from '../_app'