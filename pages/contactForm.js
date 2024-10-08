import React, { useRef, useState, useCallback } from 'react'
import Layout from '../components/layouts/Article'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  Alert, AlertIcon, FormControl, Flex, FormErrorMessage
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import { useEmailSender } from '../hooks/useEmailSender';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const FormField = dynamic(() => import('../components/FormField'), { ssr: false })

const MessageAlert = ({ message }) => {
  if (!message.content) return null;
  
  return (
    <Alert status={message.type === 'success' ? 'success' : 'error'} mt={4}>
      <AlertIcon />
      {message.content}
    </Alert>
  );
};


const ContactForm = () => {
  const { t } = useTranslation('common', { useSuspense: false })
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(null);
  const { sendEmail, loading, message } = useEmailSender();

  const handleVerificationSuccess = (token) => {
    setCaptchaToken(token);
    setCaptchaError(null);
  };

  const handleVerificationError = () => {
    setCaptchaError(t('form.captchaError'));
  };

  const handleChange = useCallback(({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError(t('form.captchaRequired'));
      return;
    }
    const success = await sendEmail({ ...form, captchaToken }, t);
    if (success) {
      setForm({ name: '', email: '', message: '' });
      setCaptchaToken(null);
    }
  }, [form, sendEmail, t, captchaToken]);

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
                {/* Компонент hCaptcha */}
                <Box>
                  <FormControl isRequired isInvalid={!!captchaError} mb={4} >
                    <Flex>
                      <HCaptcha
                        sitekey="75e27526-7918-486c-bca6-e64809a6452a"
                        onVerify={handleVerificationSuccess}
                        onError={handleVerificationError}
                      />
                      <FormErrorMessage>{captchaError}</FormErrorMessage>
                    </Flex>
                  </FormControl>
                </Box>

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
}

export default ContactForm
export { getServerSideProps } from './index'
