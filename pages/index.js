import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Link,
    useColorModeValue,
    SimpleGrid,
    Button,
    List,
    ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {BioSection, BioYear} from '../components/bio'
import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoVk,
    IoLogoGithub,
    IoLogoInstagram,
} from 'react-icons/io5'
import Image from 'next/image'


const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                textAlign="center"
                css={{backdropFilter: 'blur(10px)'}}>
                Hello, I&apos;m a full-stack developer based in Ukraine.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Ruslan Fomin
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
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph>Ruslan is a proactive, fast learner, motivated and responsible guy who wished radically
                    change his life. Set a goal and move
                    towards implementation step by step. Realized that I like to write application logic and try to
                    understand how certain
                    technologies work, how they work inside, what tasks they solve. It&apos;s like reading and trying to
                    understand people&apos;s
                    motivations and actions. If people are residually complex due to different experiences or
                    injuries that affect them, then
                    the machines do not bother with this drawback, they are very logical and understandable. The
                    future belongs to
                    machines.{' '}
                    <Link as={NextLink} href="/exterminatus">Go machines! :)</Link>
                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/skills"
                        scroll={false}
                        rightIcon={<ChevronRightIcon/>}
                        colorScheme="teal"
                    >
                        My skills
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1991</BioYear>
                    Born in Pervomaisk, Ukraine.
                </BioSection>
                <BioSection>
                    <BioYear>2014</BioYear>
                    Completed the Bachelor&apos;s degree in International Relations at
                    Kiev International University
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Completed the Master&apos;s degree in International Relations and Diplomacy at
                    Bologna University
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Worked at United Nations in Italy as political affairs officer
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Coronavirus is coming in Italy
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Start to study and work hard in It-Incubator
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Works as a Front-End Developer in QRepublik company
                </BioSection>
                {/*<BioSection>
                        <BioYear>2022</BioYear>
                        Created my own programming courses of Javascript+React.js+Nest.js.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Founded outsource company SimpleDev LTD, take the offers for a job and selling my video-courses.
                    </BioSection>*/}
            </Section>

            {/* <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Courses
                    </Heading>
                    <BioSection>
                        <BioYear>1</BioYear>
                        Javascript for beginners(23 lessons)
                    </BioSection>
                    <BioSection>
                        <BioYear>2</BioYear>
                        Javascript. Full course(60 lessons)
                    </BioSection>
                    <BioSection>
                        <BioYear>3</BioYear>
                        React for beginners(33 lessons)
                    </BioSection>
                    <BioSection>
                        <BioYear>4</BioYear>
                        React+Redux, full course(87 lessons)
                    </BioSection>
                    <BioSection>
                        <BioYear>5</BioYear>
                        Nest.js(59 lessons)
                    </BioSection>
                    <BioSection>
                        <BioYear>6</BioYear>
                        Fullstack: React+Nest.js(106 lessons)
                    </BioSection>

                    For the purchase of courses, consultation, offer work or any information, write me to the pm via messengers or email.
                </Section>*/}

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <SimpleGrid columns={[2]} gap={2}>
                    <Section>
                        <List>
                            <ListItem>
                                <Link href="https://github.com/RuslanFom" target="_blank">
                                    <Button variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<IoLogoGithub/>}>
                                        GitHub
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://twitter.com/PycJIaHWi" target="_blank">
                                    <Button variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<IoLogoTwitter/>}>
                                        Twitter
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://facebook.com/рyJIeT" target="_blank">
                                    <Button variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<IoLogoFacebook/>}>
                                        Facebook
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    </Section>
                    <Section>
                        <List>
                            <ListItem>
                                <Link href="https://github.com/RuslanFom" target="_blank">
                                    <Button variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<IoLogoGithub/>}>
                                        GitHub
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://instagram.com/invites/contact/?i=2dtdh2bn3qx6&utm_content=1tllto4"
                                      target="_blank">
                                    <Button variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<IoLogoInstagram/>}>
                                        Instagram
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://vk.com/bepJIyckoH" target="_blank">
                                    <Button variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<IoLogoVk/>}>
                                        Vk
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    </Section>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)


export default Home
export {getServerSideProps} from '../components/chakra'
