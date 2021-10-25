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
import {GridItem} from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoVk,
    IoLogoDiscord,
    IoLogoGithub,
    IoLogoGitlab,
    IoLogoGoogle,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoPaypal,
    IoLogoSkype,
    IoLogoWhatsapp
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
                        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
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
                        Work
                    </Heading>
                    <Paragraph>Ruslan is a proactive, fast learner, motivated and responsible guy who wished radically
                        change his life. Set a goal and move
                        towards implementation step by step. Realized that I like to write application logic and try to
                        understand how certain
                        technologies work, how they work inside, what tasks they solve. It's like reading and trying to
                        understand people's
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
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My portfolio
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
                        Completed the Master&apos;s Program in the Graduate School of Computer Science and Technology at
                        Kyiv International University
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Worked at United Nations in Italy
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 to present</BioYear>
                        Works as a freelance
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
                                            @ruslanfom
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://twitter.com/PycJIaHWi" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoTwitter}/>}>
                                            @PycJIaHWi
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://facebook.com/PyJIeT" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoFacebook}/>}>
                                            @PyJIeT
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://vk.com/bepJIyckoH" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoVk}/>}>
                                            @bepJIyckoH
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://discord.gg/QQGMRCZ4" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoDiscord}/>}>
                                            @ruslanfom#9708
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="mailto:ruslanfom@gmail.com" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoGoogle}/>}>
                                            @email me
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
                                            @RuslanFom
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://instagram.com/invites/contact/?i=2dtdh2bn3qx6&utm_content=1tllto4" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoInstagram}/>}>
                                            @ragnarkkrrf
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://join.skype.com/invite/AeoxV93ceXUG" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoSkype}/>}>
                                            @rusik280219
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://www.linkedin.com/in/fom28" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoLinkedin}/>}>
                                            Ruslan Fomin
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://wa.me/380958714232" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoWhatsapp}/>}>
                                            +380958714232
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="https://www.paypal.com/myaccount/transfer/payRequest/U-4UT93429RH648341T/U-4T394255BL237934F?classicUrl=%2FUA%2Fcgi-bin%2F%3Fcmd%3D_prq&id=H--bjbpyNEvNWDIKIXEkg4zfphYDei9qPdbfng&v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000186&utm_unptid=83479516-358e-11ec-b235-3cecef47c158&ppid=RT000186&cnac=UA&rsta=ru_RU%28ru-UA%29&cust=QNH8Y3C7NY7NE&unptid=83479516-358e-11ec-b235-3cecef47c158&calc=d271a85bbef9d&unp_tpcid=requestmoney-notifications-requestee&page=main%3Aemail%3ART000186&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.62.0trimerror&xt=104038" target="_blank">
                                        <Button variant="ghost"
                                                colorScheme="teal"
                                                leftIcon={<Icon as={IoLogoPaypal}/>}>
                                            ruslanfom@yahoo.com
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