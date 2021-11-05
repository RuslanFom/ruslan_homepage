import Layout from '../components/layouts/article'
import {
    Button,
    Container,
    Heading,
    Icon,
    Link,
    SimpleGrid,
} from '@chakra-ui/react'
import Section from "../components/section"
import {
    IoLogoDiscord, IoMailOutline, IoLogoSkype, IoLogoWhatsapp, IoLogoLinkedin
} from "react-icons/io5"
import {BsTelegram} from 'react-icons/bs'

const Contacts = () => (
    <Layout title='contacts'>
        <Container>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" p={3}>
                    Contacts
                </Heading>
                <SimpleGrid columns={[2]} gap={1} minChildWidth="230px" spacingX="41px">
                    <Link href="https://wa.me/380958714232" target="_blank">
                        <Button variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoWhatsapp}/>}
                                borderRadius="lg"
                                align="center"
                        >
                            WhatsApp
                        </Button>
                    </Link>
                    <Link href="https://join.skype.com/invite/AeoxV93ceXUG" target="_blank">
                        <Button variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoSkype}/>}
                                borderRadius="lg"
                                align="center"
                        >
                            Skype
                        </Button>
                    </Link>
                    <Link href="https://t.me/PycJIaHWi" target="_blank">
                        <Button variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={BsTelegram}/>}
                                borderRadius="lg"
                                align="center"
                        >
                            Telegram
                        </Button>
                    </Link>
                    <Link href="https://discord.gg/QQGMRCZ4" target="_blank">
                        <Button variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoDiscord}/>}
                                borderRadius="lg"
                                align="center"
                        >
                            Discord
                        </Button>
                    </Link>
                    <Link href="mailto:ruslanfom@gmail.com" target="_blank">
                        <Button variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoMailOutline}/>}
                                borderRadius="lg"
                                align="center"
                        >
                            ruslanfom@gmail.com
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/fom28" target="_blank">
                        <Button variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoLinkedin}/>}
                                borderRadius="lg"
                                align="center"
                        >
                            Linkedin
                        </Button>
                    </Link>

                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Contacts