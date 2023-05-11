import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { FormEvent, useMemo, useState } from 'react';
import * as yup from 'yup';
import { CustomErrorMessage, Errors } from '@/shared/components';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  company: yup.string().required('Company is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  email: yup.string().email().required('Email address is required'),
  found: yup.string().required('Please select an option'),
  foundOtherDesc: yup.string().required('Please select an option'),
  message: yup.string().required('Please let us know what you are looking for'),
});

interface ContactFormValues {
  name: string;
  company: string;
  phone: string;
  email: string;
  found: string;
  foundOtherDesc?: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormValues>({
    name: '',
    company: '',
    phone: '',
    email: '',
    found: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then((data) => {
        // Open success modal & reset form
      })
      .catch((validationErrors: yup.ValidationError) => {
        const newErrors: Errors = {};
        validationErrors.inner.forEach((error) => {
          if (error.path && !newErrors[error.path]) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      });
  };

  const contactFormInputs = useMemo(
    () => [
      { label: 'Name', name: 'name', value: formData.name },
      { label: 'Company', name: 'company', value: formData.company },
      { label: 'Phone Number', name: 'phone', value: formData.phone },
      { label: 'Email Address', name: 'email', value: formData.email },
    ],
    [formData.company, formData.email, formData.name, formData.phone]
  );

  const foundOptions = [
    { label: 'Instagram', value: 'instagram' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Google', value: 'google' },
    { label: 'Word of mouth', value: 'wordOfMouth' },
    { label: 'other ', value: 'other' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <VStack w='full' spacing='4' alignItems='flex-start'>
        {contactFormInputs.map((input) => (
          <Box w='full' key={input.name}>
            <FormLabel hidden>{input.label}</FormLabel>
            <Input
              name={input.name}
              placeholder={input.label}
              value={input.value}
              onChange={handleChange}
            />
            <CustomErrorMessage name={input.name} errors={errors} mt='1' />
          </Box>
        ))}
        <Box w='full'>
          <FormLabel hidden>How did you find us?</FormLabel>
          <Select
            name='found'
            placeholder='How did you find us?'
            color={formData.found.length > 0 ? 'black' : 'secondary.800'}
            value={formData.found}
            onChange={handleChange}
          >
            {foundOptions.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </Select>
          <CustomErrorMessage name='found' errors={errors} mt='1' />
        </Box>
        <Box w='full'>
          <FormLabel hidden>Message</FormLabel>
          <Textarea
            name='message'
            placeholder='Your Message'
            minH='32'
            value={formData.message}
            onChange={handleChange}
          />
          <CustomErrorMessage name='message' errors={errors} mt='1' />
        </Box>
        <Button type='submit' colorScheme='secondary'>
          Submit
        </Button>
      </VStack>
    </form>
  );
};
