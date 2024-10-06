import React, { useRef, useState, useCallback } from 'react'
import emailjs from '@emailjs/browser'
import Layout from '../components/layouts/Article'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea, Alert, AlertIcon
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const FormField = React.memo(({ label, name, type = 'text', ...props }) => (
  <FormControl>
    <FormLabel fontSize="lg">{label}</FormLabel>
    {type === 'textarea' ? (
      <Textarea name={name} variant="custom" {...props} />
    ) : (
      <Input type={type} name={name} variant="custom" {...props} />
    )}
  </FormControl>
))

const MessageAlert = ({ message }) => {
  if (!message.content) return null;
  
  return (
    <Alert status={message.type === 'success' ? 'success' : 'error'} mt={4}>
      <AlertIcon />
      {message.content}
    </Alert>
  );
};


const ContactForm = React.memo(() => {
  const { t } = useTranslation('common', { useSuspense: false })
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', content: '' });
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = useCallback(({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      setLoading(true)
      setMessage({ type: '', content: '' }) 

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: process.env.NEXT_PUBLIC_EMAIL_TO_NAME,
            from_email: form.email,
            to_email: process.env.NEXT_PUBLIC_EMAIL_TO_EMAIL,
            message: form.message
          },
          process.env.NEXT_PUBLIC_EMAIL_USER_ID
        )
        setLoading(false)
        setMessage({ type: 'success', content: t('form.success') })
        setForm({ name: '', email: '', message: '' })
      } catch (error) {
        console.error('Error sending email:', error)
        setMessage({ type: 'error', content: t('form.error') })
      } finally {
        setLoading(false)
      }
    },
    [form, t]
  )

  return (
    <Layout title="contactForm">
      <Container maxW="675px">
        <Box px={{ base: 5, md: 10 }} my={10}>
          <Box
            pos="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Box maxW="36rem" pos="relative" px={{ base: 5, md: 10 }} mt={12}>
              <Heading variant="title" pb={3} textDecoration="underline">
                {t('form')}
              </Heading>
              <Text fontSize="lg" mt={3}>
                {t('form.about.1')}
              </Text>

              <VStack
                as="form"
                ref={formRef}
                onSubmit={handleSubmit}
                spacing={7}
                mt={12}
                align="stretch"
              >
                <FormField
                  label={t('form.name')}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="ex., John Doe"
                  aria-label="Full Name"
                  variant="custom"
                />

                <FormField
                  label={t('form.email')}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="ex., johndoe@gmail.com"
                  aria-label="Email address"
                  variant="custom"
                />

                <FormField
                  label={t('form.message')}
                  name="message"
                  type="textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi, I wanna give you a job..."
                  aria-label="Your message"
                  rows={5}
                  variant="custom"
                />

                <Button
                  type="submit"
                  isLoading={loading}
                  loadingText={t('form.loading')}
                  variant="custom"
                  rightIcon={
                    <Image
                      src="/arrow-up.png"
                      alt="arrow-up"
                      w={{ base: '2', sm: '2.5' }}
                      h={{ base: '2', sm: '2.5' }}
                      filter="invert(1) brightness(0)"
                      ml={{ base: 1, sm: 2 }}
                    />
                  }
                >
                  {loading ? t('form.loading') : t('form.submit')}
                </Button>
                <MessageAlert message={message} />
              </VStack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
})

export default ContactForm
export { getServerSideProps } from './index'
