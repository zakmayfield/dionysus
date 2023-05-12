import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useContactForm } from './useContactForm';
import { ContactFormSuccessModal } from './ContactFormSuccessModal';
import { CustomErrorMessage, MotionBox } from '@/shared/components';

export const ContactForm = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { onSubmit, onChange, errors, formError, formData } = useContactForm(
    () => onOpen()
  );

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
    { label: 'Other ', value: 'other' },
  ];

  const isFoundOther = formData.found === 'other';

  return (
    <>
      <form onSubmit={onSubmit}>
        <VStack w='full' spacing='4' alignItems='flex-start'>
          {contactFormInputs.map((input) => (
            <Box w='full' key={input.name}>
              <FormLabel hidden>{input.label}</FormLabel>
              <Input
                name={input.name}
                placeholder={input.label}
                value={input.value}
                onChange={onChange}
                colorScheme='blacks'
              />
              <CustomErrorMessage name={input.name} errors={errors} mt='1' />
            </Box>
          ))}
          <Box w='full'>
            <FormLabel hidden>How did you find us?</FormLabel>
            <Select
              name='found'
              placeholder='How did you find us?'
              value={formData.found}
              onChange={onChange}
              colorScheme='blacks'
            >
              {foundOptions.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </Select>
            <CustomErrorMessage name='found' errors={errors} mt='1' />
          </Box>
          <AnimatePresence>
            {isFoundOther && (
              <MotionBox
                w='full'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <FormLabel hidden>Please describe</FormLabel>
                <Input
                  name='foundOtherDesc'
                  placeholder='Please describe'
                  value={formData.foundOtherDesc}
                  onChange={onChange}
                  colorScheme='blacks'
                />
                <CustomErrorMessage
                  name='foundOtherDesc'
                  errors={errors}
                  mt='1'
                />
              </MotionBox>
            )}
          </AnimatePresence>
          <Box w='full'>
            <FormLabel hidden>Message</FormLabel>
            <Textarea
              name='message'
              placeholder='Your Message'
              minH='32'
              value={formData.message}
              onChange={onChange}
              colorScheme='blacks'
            />
            <CustomErrorMessage name='message' errors={errors} mt='1' />
          </Box>
          {formError && (
            <Text fontSize='sm' color='red.500'>
              {formError}
            </Text>
          )}
          <Button type='submit' colorScheme='blacks'>
            Submit
          </Button>
        </VStack>
      </form>
      <ContactFormSuccessModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
