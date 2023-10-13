import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRequestAccountForm } from './useRequestAccountForm';
import { RequestAccountFormSuccessModal } from './RequestAccountFormSuccessModal';
import { CustomErrorMessage } from '@/shared/components';

export const RequestAccountForm = () => {
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
  } = useRequestAccountForm(handleSuccess);

  const RequestAccountFormInputs = useMemo(
    () => [
      {
        label: 'Company Name',
        name: 'companyName',
        value: formValues.companyName,
      },
      {
        label: 'Contact',
        name: 'contact',
        value: formValues.contact,
      },
      {
        label: 'Billing Address',
        name: 'billingAddress',
        value: formValues.billingAddress,
      },
      {
        label: 'Shipping Address',
        name: 'shippingAddress',
        value: formValues.shippingAddress,
      },
      {
        label: 'Phone',
        name: 'phone',
        value: formValues.phone,
      },
      {
        label: 'Email',
        name: 'email',
        value: formValues.email,
      },
      {
        label: 'A/P Email',
        name: 'apEmail',
        value: formValues.apEmail,
      },
    ],
    [
      formValues.companyName,
      formValues.contact,
      formValues.billingAddress,
      formValues.shippingAddress,
      formValues.phone,
      formValues.email,
      formValues.apEmail,
    ]
  );

  const paymentMethods = [
    { label: 'COD - Pay Delivery Driver', value: 'COD - Pay Delivery Driver' },
    {
      label: 'Credit Card - Automated Chasers Account',
      value: 'Credit Card - Automated Chasers Account',
    },
    {
      label: 'Pay On Pick-Up Arrival At Chasers Juice',
      value: 'Pay On Pick-Up Arrival At Chasers Juice',
    },
  ];

  return (
    <>
      <form onSubmit={onSubmit}>
        <VStack w='full' spacing='4' alignItems='flex-start'>
          {RequestAccountFormInputs.map((input) => (
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
            <FormLabel hidden>Payment Method</FormLabel>
            <Select
              name='paymentMethod'
              placeholder='Payment Methods'
              value={formValues.paymentMethod}
              onChange={onChange}
              colorScheme='blacks'
            >
              {paymentMethods.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </Select>
            <CustomErrorMessage name='Paym' errors={errors} mt='1' />
          </Box>
          <ReCAPTCHA
            ref={recaptchaRef}
            size='invisible'
            sitekey={
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_REQUEST_ACCOUNT ?? ''
            }
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
      <RequestAccountFormSuccessModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
