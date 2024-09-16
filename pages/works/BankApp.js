import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/Work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'

const BankApp = () => {
    return (
        <Layout title="F-Bank">
            <Container>
                <Title>
                    F-Bank <Badge>2024</Badge>
                </Title>
                <P>
                    My banking app platform
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://fomin-bank.vercel.app/'>
                            https://fomin-bank.vercel.app/ <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Next.JS, TypeScript, TailwindCSS, Chart.js, ShadCN, React Hook Form, Dwolla, Plaid, Appwrite</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/home.png" alt="F-Bank" />
                <WorkImage src="/images/works/my-banks.png" alt="F-Bank" />
                <WorkImage src="/images/works/connect-bank.png" alt="F-Bank" />
                <WorkImage src="/images/works/sign-in.png" alt="F-Bank" />
                <WorkImage src="/images/works/sign-up.png" alt="F-Bank" />
                <WorkImage src="/images/works/trans-history.png" alt="F-Bank" />
                <WorkImage src="/images/works/transfer-funds.png" alt="F-Bank" />
            </Container>
        </Layout>
    )
}

export default BankApp
export { getServerSideProps } from '../_app'