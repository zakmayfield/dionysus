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
        label:
          'Full Company Name (This will be your account name with us - write N/A if you do not have one)',
        name: 'companyName',
        value: formValues.companyName,
      },
      {
        label: 'Full Contact Name & Position',
        name: 'contact',
        value: formValues.contact,
      },
      {
        label: 'Full Billing Address (including postal code)',
        name: 'billingAddress',
        value: formValues.billingAddress,
      },
      {
        label:
          'Full Shipping Address (please include any special delivery instructions e.g. Deliver to side door...etc.)',
        name: 'shippingAddress',
        value: formValues.shippingAddress,
      },
      {
        label: 'Contact Phone Number',
        name: 'phone',
        value: formValues.phone,
      },
      {
        label: 'Contact E-mail Address',
        name: 'email',
        value: formValues.email,
      },
      {
        label: 'Any applicable A/P Email address',
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
              <FormLabel>
                {input.label}&nbsp;
                <span style={{ color: 'red' }}>*</span>
              </FormLabel>
              <Input
                name={input.name}
                value={input.value}
                onChange={onChange}
                colorScheme='blacks'
                required
              />
              <CustomErrorMessage name={input.name} errors={errors} mt='1' />
            </Box>
          ))}
          <Box w='full'>
            <FormLabel>
              Payment Method&nbsp;<span style={{ color: 'red' }}>*</span>
            </FormLabel>
            <Select
              name='paymentMethod'
              placeholder='Payment Methods'
              value={formValues.paymentMethod}
              onChange={onChange}
              colorScheme='blacks'
              required
            >
              {paymentMethods.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </Select>
            <CustomErrorMessage name='paymentMethod' errors={errors} mt='1' />
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
