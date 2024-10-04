import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Layout from '../components/layouts/Article'
import { Box, Button, Container, Heading, Image, Text, VStack, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const ContactForm = () => {
  const { t } = useTranslation('common')
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_znpkhbb',
        'template_sd2uqr3',
        {
          from_name: form.name,
          to_name: 'Ruslan',
          from_email: form.email,
          to_email: 'rusfom28@gmail.com',
          message: form.message
        },
        'V-MefjF01ofgpH6wC'
      )
      setLoading(false)
      alert('Your message has been sent!')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Something went wrong, please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="contactForm">
      <Container maxW="675px">
        <Box px={{ base: 5, md: 10 }} my={10}>
          <Box pos="relative" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Box maxW="36rem" pos="relative" px={{ base: 5, md: 10 }} mt={12}>
              <Heading variant="title" pb={3} textDecoration="underline">
                {t('form')}
              </Heading>
              <Text fontSize="lg" mt={3}>{t('form.about.1')}</Text>

              <VStack as="form" ref={formRef} onSubmit={handleSubmit} spacing={7} mt={12} align="stretch">
                <FormControl>
                  <FormLabel fontSize="lg">{t('form.name')}</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="ex., John Doe"
                    aria-label="Full Name"
                    px={5}
                    py={2}
                    minH="14"
                    rounded="lg"
                    fontSize="lg"
                    w="full"
                    color="white"
                    bg="black.200"
                    border="none"
                    _placeholder={{ color: "white.500" }}
                    boxShadow="0 25px 50px -12px #0E0E10"
                    _focus={{
                      outline: "none",
                      boxShadow: "0 25px 50px -12px #0E0E10"
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="lg">{t('form.email')}</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="ex., johndoe@gmail.com"
                    aria-label="Email address"
                    px={5}
                    py={2}
                    minH="14"
                    rounded="lg"
                    fontSize="lg"
                    bg="black.200"
                    border="none"
                    _placeholder={{ color: "white.500" }}
                    boxShadow="0 25px 50px -12px #0E0E10"
                    _focus={{
                      outline: "none",
                      boxShadow: "0 25px 50px -12px #0E0E10"
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="lg">{t('form.message')}</FormLabel>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Hi, I wanna give you a job..."
                    aria-label="Your message"
                    px={5}
                    py={2}
                    minH="14"
                    rounded="lg"
                    fontSize="lg"
                    bg="black.200"
                    border="none"
                    _placeholder={{ color: "white.500" }}
                    boxShadow="0 25px 50px -12px #0E0E10"
                    _focus={{
                      outline: "none",
                      boxShadow: "0 25px 50px -12px #0E0E10"
                    }}
                    rows={5}
                  />
                </FormControl>

                <Button
                  type="submit"
                  isLoading={loading}
                  loadingText={t('form.loading')}
                  bg="teal.500"
                  color="white"
                  px={{ base: 3, sm: 4, md: 5 }}
                  py={{ base: 1, sm: 1.5, md: 2 }}
                  minH={{ base: "10", sm: "11", md: "12" }}
                  rounded="lg"
                  fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '18px' }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 25px 50px -12px #0E0E10"
                  _focus={{
                    outline: "none",
                    boxShadow: "0 25px 50px -12px #0E0E10"
                  }}
                  _hover={{ bg: "teal.600", boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)" }}
                  rightIcon={
                    <Image
                      src="/arrow-up.png"
                      alt="arrow-up"
                      w={{ base: "2", sm: "2.5" }}
                      h={{ base: "2", sm: "2.5" }}
                      filter="invert(1) brightness(0)"
                      ml={{ base: 1, sm: 2 }}
                    />
                  }
                >
                  {loading ? t('form.loading') : t('form.submit')}
                </Button>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default ContactForm
export { getServerSideProps } from './index'
