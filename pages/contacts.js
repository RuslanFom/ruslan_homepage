import Layout from '../components/layouts/Article'
import {
    Container,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react'
import Section from "../components/Section"
import {
    IoLogoDiscord,
    IoMailOutline,
    IoLogoSkype,
    IoLogoWhatsapp,
    IoLogoLinkedin,
} from "react-icons/io5"
import {BsTelegram} from 'react-icons/bs'
import SocialButton from "../components/SocialButton";
import {useTranslation} from "next-i18next";

const Contacts = () => {
    const {t} = useTranslation('common');
    return (
        <Layout title='contacts'>
            <Container>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title" p={3}>
                        {t('nav.contacts')}
                    </Heading>

                    <Section>
                        <SimpleGrid columns={[2]} gap={1} minChildWidth="230px" spacingX="41px">
                            <SocialButton href="https://wa.me/393756267642" icon={<IoLogoWhatsapp/>} label="WhatsApp"/>
                            <SocialButton href="https://join.skype.com/invite/AeoxV93ceXUG" icon={<IoLogoSkype/>}
                                          label="Skype"/>
                            <SocialButton href="https://t.me/PycJIaHWi" icon={<BsTelegram/>} label="Telegram"/>
                            <SocialButton href="https://discord.gg/QQGMRCZ4" icon={<IoLogoDiscord/>} label="Discord"/>
                            <SocialButton href="mailto:ruslanfom@gmail.com" icon={<IoMailOutline/>}
                                          label="ruslanfom@gmail.com"/>
                            <SocialButton href="https://www.linkedin.com/in/fom28" icon={<IoLogoLinkedin/>}
                                          label="Linkedin"/>
                        </SimpleGrid>
                    </Section>

                </Section>
            </Container>
        </Layout>
    )
}

export default Contacts
export {getServerSideProps} from './index'