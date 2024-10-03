import { useMemo, useCallback } from 'react'
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
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoVk,
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoGitlab,
} from 'react-icons/io5'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/layouts/Article'), { ssr: true })
const Section = dynamic(() => import('../components/Section'), { ssr: true })
const Paragraph = dynamic(() => import('../components/Paragraph'), { ssr: true })
const SocialButton = dynamic(() => import("../components/SocialButton"), { ssr: true })
const BioSection = dynamic(() => import('../components/Bio').then(mod => mod.BioSection), { ssr: true })
const BioYear = dynamic(() => import('../components/Bio').then(mod => mod.BioYear), { ssr: true })

export const getServerSideProps = async ({ req, locale }) => {
    const translations = await serverSideTranslations(locale, ['common'])
    return {
        props: {
            cookies: req.headers.cookie ?? '',
            ...translations,
        }
    }
}

const ProfileImage = () => (
  <Image
    src="/images/ruslan.jpg"
    alt="Profile image"
    width={100}
    height={100}
    priority={true}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AoNxbhL3xvpeNluNyeQ0pwCxJGwA5FDjkzRWhZDKLmQ6Ac4OBxgZr1ZL2tyk6Df/Z"
  />
)

const Home = () => {
    const { t } = useTranslation('common')

    const welcomeBox = useMemo(() => (
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
          {t('welcome')}
      </Box>
    ), [t])

    const handleSkillsClick = useCallback(() => {
        // Логика обработки клика (если необходимо)
    }, [])

    const socialLinks = useMemo(() => [
        { href: "https://github.com/RuslanFom", icon: IoLogoGithub, label: "GitHub" },
        { href: "https://twitter.com/PycJIaHWi", icon: IoLogoTwitter, label: "Twitter" },
        { href: "https://facebook.com/рyJIeT", icon: IoLogoFacebook, label: "Facebook" },
        { href: "https://gitlab.com/RuslanFom", icon: IoLogoGitlab, label: "GitLab" },
        { href: "https://instagram.com/invites/contact/?i=2dtdh2bn3qx6&utm_content=1tllto4", icon: IoLogoInstagram, label: "Instagram" },
        { href: "https://vk.com/bepJIyckoH", icon: IoLogoVk, label: "Vk" }
    ], [])

    return (
      <Layout>
          <Container>
              {welcomeBox}

              <Box display={{ md: 'flex' }}>
                  <Box flexGrow={1}>
                      <Heading as="h2" variant="page-title">
                          {t('name')}
                      </Heading>
                      <p>Digital Craftsman ( Artist / Developer / Explorer )</p>
                  </Box>
                  <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
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
                          <ProfileImage />
                      </Box>
                  </Box>
              </Box>

              <Section delay={0.1}>
                  <Heading as="h3" variant="section-title">
                      {t('about')}
                  </Heading>
                  <Paragraph>
                      {t('about.p1')}<br /><br />
                      {t('about.p2')}<br /><br />
                      {t('about.p3')}
                      {' '}
                      <Link as={NextLink} href="/exterminatus">{t('call')} :)</Link>
                  </Paragraph>
                  <Box align="center" my={4}>
                      <Button
                        as={NextLink}
                        href="/skills"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                        onClick={handleSkillsClick}
                      >
                          {t('skills')}
                      </Button>
                  </Box>
              </Section>

              <Section delay={0.2}>
                  <Heading as="h3" variant="section-title">
                      {t('bio')}
                  </Heading>
                  {[
                      { year: '1991', text: 'bio.p1' },
                      { year: '2014', text: 'bio.p2' },
                      { year: '2016', text: 'bio.p3' },
                      { year: '2017', text: 'bio.p4' },
                      { year: '2020', text: 'bio.p5' },
                      { year: '2021', text: 'bio.p6' },
                      { year: '2023', text: 'bio.p7' }
                  ].map((item, index) => (
                    <BioSection key={index}>
                        <BioYear>{item.year}</BioYear>
                        {t(item.text)}
                    </BioSection>
                  ))}
              </Section>

              <Box align="center" my={4} p={3}>
                  <Button
                    as={NextLink}
                    href="/contactForm"
                    scroll={false}
                    rightIcon={<ChevronRightIcon />}
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
                              {socialLinks.slice(0, 3).map((link, index) => (
                                <ListItem key={index} justifyContent="start" ml={4}>
                                    <SocialButton href={link.href} icon={<link.icon />} label={link.label} />
                                </ListItem>
                              ))}
                          </List>
                      </Section>
                      <Section>
                          <List>
                              {socialLinks.slice(3).map((link, index) => (
                                <ListItem key={index} textAlign="end" mr={
                                    index === 0 ? 6 :
                                    index === 2 ? 14 :
                                    0 }>
                                    <SocialButton href={link.href} icon={<link.icon />} label={link.label} />
                                </ListItem>
                              ))}
                          </List>
                      </Section>
                  </SimpleGrid>
              </Section>
          </Container>
      </Layout>
    )
}

export default Home