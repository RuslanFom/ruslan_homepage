import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'

const FormField = ({ label, name, type = 'text', ...props }) => (
  <FormControl>
    <FormLabel fontSize="lg">{label}</FormLabel>
    {type === 'textarea' ? (
      <Textarea name={name} variant="custom" {...props} />
    ) : (
      <Input type={type} name={name} variant="custom" {...props} />
    )}
  </FormControl>
)

export default FormField