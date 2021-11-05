import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon
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
    IoLogoGitlab,
    IoLogoInstagram,
} from 'react-icons/io5'


const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center">
                    Hello, I&apos;m a full-stack developer based in Russia!
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
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/ruslan.jpg"
                            alt="Profile Image"
                        />
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
                        <NextLink href="/exterminatus">
                            <Link>Go machines! :)</Link>
                        </NextLink>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/skills">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My skills
                            </Button>

                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0 / 2}>
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
                        Coronavirus in Italy, stays at home and studies hard
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Works as a Front-End Developer in QRepublik company
                    </BioSection>
                    <BioSection>
                        <BioYear>Now</BioYear>
                        Looking for new opportunities
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I love
                    </Heading>
                    <Paragraph>
                        Sport (snowboarding, running, downhill), Music, World Exploration, Coding
                    </Paragraph>
                </Section>

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
                                                leftIcon={<Icon as={IoLogoGithub}/>}>
                                            GitHub
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://twitter.com/PycJIaHWi" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoTwitter}/>}>
                                            Twitter
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://facebook.com/PyJIeT" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoFacebook}/>}>
                                            Facebook
                                        </Button>
                                    </Link>
                                </ListItem>
                            </List>
                        </Section>
                        <Section>
                            <List>
                                <ListItem>
                                    <Link href="https://gitlab.com/RuslanFom" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoGitlab}/>}>
                                            GitLab
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://instagram.com/invites/contact/?i=2dtdh2bn3qx6&utm_content=1tllto4" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoInstagram}/>}>
                                            Instagram
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://vk.com/bepJIyckoH" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoVk}/>}>
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
}

export default Page