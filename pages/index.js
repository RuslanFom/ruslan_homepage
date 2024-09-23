import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Link,
    useColorModeValue,
    SimpleGrid,
    Button,
    List, ListItem,
} from '@chakra-ui/react'
import Section from '../components/Section'
import Layout from '../components/layouts/Article'
import Paragraph from '../components/Paragraph'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {BioSection, BioYear} from '../components/Bio'
import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoVk,
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoGitlab,
} from 'react-icons/io5'
import Image from 'next/image'
import SocialButton from "../components/SocialButton";
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


export async function getServerSideProps({ req, locale }) {
    return {
        props: {

            cookies: req.headers.cookie ?? '',
            ...(await serverSideTranslations(locale, ['common'])),
        }
    }
}

const Home = () => {
    const {t} = useTranslation('common');
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    textAlign="center"
                    css={{backdropFilter: 'blur(10px)'}}>
                    {t('welcome')}
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            {t('name')}
                        </Heading>
                        <p>Digital Craftsman ( Artist / Developer / Explorer )</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}}
                        textAlign="center"
                    >
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <Image
                                src="/images/ruslan.jpg"
                                alt="Profile image"
                                width={100}
                                height={100}
                                priority={true}
                            />
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {t('about')}
                    </Heading>
                    <Paragraph> {t('about.p1')}<br/><br/>
                        {t('about.p2')}<br/><br/>
                        {t('about.p3')}
                        {' '}
                        <Link as={NextLink} href="/exterminatus">{t('call')} :)</Link>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/skills"
                            scroll={false}
                            rightIcon={<ChevronRightIcon/>}
                            colorScheme="teal"
                        >
                            {t('skills')}
                        </Button>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        {t('bio')}
                    </Heading>
                    <BioSection>
                        <BioYear>1991</BioYear>
                        {t('bio.p1')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        {t('bio.p2')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        {t('bio.p3')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        {t('bio.p4')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        {t('bio.p5')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        {t('bio.p6')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        {t('bio.p7')}
                    </BioSection>

                </Section>

                <Box align="center" my={4} p={3}>
                    <Button
                        as={NextLink}
                        href="/contactForm"
                        scroll={false}
                        rightIcon={<ChevronRightIcon/>}
                        colorScheme="teal"
                    >
                        {t('form')}!
                    </Button>
                </Box>


                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {t('web')}
                    </Heading>
                    <SimpleGrid columns={[2]} gap={2} p={3}>
                        <Section>
                            <List>
                                <ListItem justifyContent="start" ml={4}>
                                    <SocialButton href="https://github.com/RuslanFom" icon={<IoLogoGithub/>}
                                                  label="GitHub"/>
                                </ListItem>
                                <ListItem textAlign="start" ml={4}>
                                    <SocialButton href="https://twitter.com/PycJIaHWi" icon={<IoLogoTwitter/>}
                                                  label="Twitter"/>
                                </ListItem>
                                <ListItem textAlign="start" ml={4}>
                                    <SocialButton href="https://facebook.com/рyJIeT" icon={<IoLogoFacebook/>}
                                                  label="Facebook"/>
                                </ListItem>
                            </List>
                        </Section>
                        <Section>
                            <List>
                                <ListItem textAlign="end" mr={6}>
                                    <SocialButton href="https://gitlab.com/RuslanFom" icon={<IoLogoGitlab/>}
                                                  label="GitLab"/>
                                </ListItem>
                                <ListItem textAlign="end">
                                    <SocialButton
                                        href="https://instagram.com/invites/contact/?i=2dtdh2bn3qx6&utm_content=1tllto4"
                                        icon={<IoLogoInstagram/>} label="Instagram"/>
                                </ListItem>
                                <ListItem textAlign="end" mr={14}>
                                    <SocialButton href="https://vk.com/bepJIyckoH" icon={<IoLogoVk/>} label="Vk"/>
                                </ListItem>
                            </List>
                        </Section>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}


export default Home

