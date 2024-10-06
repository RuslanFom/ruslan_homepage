import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/Work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/Article'
import {useTranslation} from "next-i18next";

const BankApp = () => {
    const {t} = useTranslation('common');
    return (
        <Layout title="F-Bank">
            <Container>
                <Title>
                    F-Bank <Badge>2024</Badge>
                </Title>
                <P>
                    {t('work1.about')}
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

                <WorkImage src="/images/works/home.webp" alt="F-Bank" />
                <WorkImage src="/images/works/my-banks.webp" alt="F-Bank" />
                <WorkImage src="/images/works/connect-bank.webp" alt="F-Bank" />
                <WorkImage src="/images/works/sign-in.webp" alt="F-Bank" />
                <WorkImage src="/images/works/sign-up.webp" alt="F-Bank" />
                <WorkImage src="/images/works/trans-history.webp" alt="F-Bank" />
                <WorkImage src="/images/works/transfer-funds.webp" alt="F-Bank" />
            </Container>
        </Layout>
    )
}

export default BankApp
export {getServerSideProps} from '../index'