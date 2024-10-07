import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Container, Heading } from '@chakra-ui/react'
import {
  IoLogoDiscord,
  IoMailOutline,
  IoLogoSkype,
  IoLogoWhatsapp,
  IoLogoLinkedin
} from 'react-icons/io5'
import { BsTelegram } from 'react-icons/bs'
import { useTranslation } from 'next-i18next'
import { Box, Flex } from '@chakra-ui/react'

const Layout = dynamic(() => import('../components/layouts/Article'))
const Section = dynamic(() => import('../components/Section'))
const SocialButton = dynamic(() => import('../components/SocialButton'))

const socialLinks = [
  {
    href: 'https://t.me/PycJIaHWi',
    icon: BsTelegram,
    label: 'Telegram'
  },
  {
    href: 'https://wa.me/393756267642',
    icon: IoLogoWhatsapp,
    label: 'WhatsApp'
  },
  {
    href: 'mailto:ruslanfom@gmail.com',
    icon: IoMailOutline,
    label: 'ruslanfom@gmail.com'
  },
  {
    href: 'https://join.skype.com/invite/AeoxV93ceXUG',
    icon: IoLogoSkype,
    label: 'Skype'
  },
  {
    href: 'https://discord.gg/QQGMRCZ4',
    icon: IoLogoDiscord,
    label: 'Discord'
  },
  {
    href: 'https://www.linkedin.com/in/fom28',
    icon: IoLogoLinkedin,
    label: 'Linkedin'
  }
]

const Contacts = () => {
  const { t } = useTranslation('common')

  const handleSocialClick = useCallback(url => {
    // Здесь может быть дополнительная логика обработки клика
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <Layout title="contacts">
      <Container>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" p={3}>
            {t('nav.contacts')}
          </Heading>
          <Section>
            <Flex justifyContent="space-between" width="100%">
              <Box width="45%">
                <Flex flexDirection="column" alignItems="flex-start">
                  {socialLinks.slice(0, 3).map((link, index) => (
                    <SocialButton
                      key={index}
                      href={link.href}
                      icon={<link.icon />}
                      label={link.label}
                      onClick={() => handleSocialClick(link.href)}
                      mb={4}
                      width="100%"
                      justifyContent="flex-start"
                    />
                  ))}
                </Flex>
              </Box>
              <Box width="45%">
                <Flex flexDirection="column" alignItems="flex-end">
                  {socialLinks.slice(3).map((link, index) => (
                    <SocialButton
                      key={index + 3}
                      href={link.href}
                      icon={<link.icon />}
                      label={link.label}
                      onClick={() => handleSocialClick(link.href)}
                      mb={4}
                    />
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Section>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contacts
export { getServerSideProps } from './index'
