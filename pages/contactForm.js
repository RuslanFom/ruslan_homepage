import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Layout from '../components/layouts/Article'
import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react'
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

      setForm({
        name: '',
        email: '',
        message: ''
      })
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
          <Box
            pos="relative"
            flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Box maxW="36rem" pos="relative" px={{ base: 5, md: 10 }} mt={12}>
              <Heading variant="title" pb={3} textDecoration="underline">
                {t('form')}
              </Heading>
              <Text className="text-lg mt-3">{t('form.about.1')}</Text>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col space-y-7"
              >
                <label className="space-y-3">
                  <span className="field-label">{t('form.name')}</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="ex., John Doe"
                    aria-label="Full Name"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">{t('form.email')}</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="ex., johndoe@gmail.com"
                    aria-label="Email address"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">{t('form.message')}</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Hi, I wanna give you a job..."
                    aria-label="Your message"
                  />
                </label>
                <Button
                  type="submit"
                  scroll={false}
                  aria-busy={loading}
                  isDisabled={loading}
                  className="field-btn"
                  colorScheme="teal"
                  fontSize={{base: '14px', sm: '16px', md: '20px'}}
                >
                  {loading ? t('form.loading') : t('form.submit')}
                  <Image
                    src="/arrow-up.png"
                    alt="arrow-up"
                    className="field-btn_arrow"
                  />
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default ContactForm
export { getServerSideProps } from './index'
