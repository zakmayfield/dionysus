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
import ReCAPTCHA from 'react-google-recaptcha';
import { AnimatePresence } from 'framer-motion';
import { useContactForm } from './useContactForm';
import { ContactFormSuccessModal } from './ContactFormSuccessModal';
import { CustomErrorMessage, MotionBox } from '@/shared/components';

export const ContactForm = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleSuccess = () => onOpen();

  const {
    onSubmit,
    onChange,
    errors,
    formError,
    formValues,
    isLoading,
    recaptchaRef,
  } = useContactForm(handleSuccess);

  const contactFormInputs = useMemo(
    () => [
      { label: 'Name', name: 'name', value: formValues.name },
      { label: 'Company', name: 'company', value: formValues.company },
      { label: 'Phone Number', name: 'phone', value: formValues.phone },
      { label: 'Email Address', name: 'email', value: formValues.email },
    ],
    [formValues.company, formValues.email, formValues.name, formValues.phone]
  );

  const foundOptions = [
    { label: 'Instagram', value: 'instagram' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Google', value: 'google' },
    { label: 'Word of mouth', value: 'wordOfMouth' },
    { label: 'Other ', value: 'other' },
  ];

  const isFoundOther = formValues.found === 'other';

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
              value={formValues.found}
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
                  value={formValues.foundOtherDesc}
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
              value={formValues.message}
              onChange={onChange}
              colorScheme='blacks'
            />
            <CustomErrorMessage name='message' errors={errors} mt='1' />
          </Box>
          <ReCAPTCHA
            ref={recaptchaRef}
            size='invisible'
            sitekey={process.env.RECAPTCHA_SITE_KEY_CONTACT ?? ''}
          />
          {formError && (
            <Text fontSize='sm' color='red.500'>
              {formError}
            </Text>
          )}
          <Button
            type='submit'
            colorScheme='blacks'
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Submit
          </Button>
        </VStack>
      </form>
      <ContactFormSuccessModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
