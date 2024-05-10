import React, { FormEvent, useRef, useState } from 'react';
import * as yup from 'yup';
import axios, { AxiosError } from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { Errors } from '@/shared/components';
import { formatPhoneNumber } from '@/shared/utils';
import { chasersJuice } from '@/shared/constants';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  companyName: yup.string().required('Company is required'),
  contact: yup.string().required('Full contact name and position is required'),
  billingAddress: yup.string().required('Billing address is required'),
  shippingAddress: yup.string().required('Shipping address is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  email: yup.string().email().required('Email address is required'),
  apEmail: yup.string().email().required('A/P email address is required'),
  paymentMethod: yup.string().required('Payment method is required'),
});

interface RequestAccountFormValues {
  companyName: string;
  contact: string;
  billingAddress: string;
  shippingAddress: string;
  phone: string;
  email: string;
  apEmail: string;
  paymentMethod: string;
}

type Payload = RequestAccountFormValues & {
  token: string | null;
};

export const useRequestAccountForm = (
  onSuccess: (data: RequestAccountFormValues) => void
) => {
  const defaultFormValues: RequestAccountFormValues = {
    companyName: '',
    contact: '',
    billingAddress: '',
    shippingAddress: '',
    phone: '',
    email: '',
    apEmail: '',
    paymentMethod: '',
  };

  const [formValues, setFormValues] =
    useState<RequestAccountFormValues>(defaultFormValues);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const resetData = () => {
    setFormValues(defaultFormValues);
    setErrors({});
    setFormError(undefined);
  };

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const token = await (recaptchaRef && recaptchaRef.current
      ? recaptchaRef.current.executeAsync()
      : '');

    schema
      .validate(formValues, { abortEarly: false })
      .then((data) => {
        const payload: Payload = { ...data, token };

        if (!process.env.NEXT_PUBLIC_REQUEST_ACCOUNT_WEBHOOK_URL) {
          throw new Error(
            `Webhook URL is inaccessible. Please call us directly at ${formatPhoneNumber(
              chasersJuice.phone
            )}`
          );
        }
        axios
          .post(process.env.NEXT_PUBLIC_REQUEST_ACCOUNT_WEBHOOK_URL, payload)
          .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
              resetData();
              onSuccess(data);
            } else {
              throw new Error('Failed to send email');
            }
          })
          .catch((error: AxiosError<{ message: string }>) => {
            setIsLoading(false);
            setFormError(
              `There has been an error: ${
                error.response?.data.message ?? error
              }. Please call us directly at ${formatPhoneNumber(
                chasersJuice.phone
              )}`
            );
          });
      })
      .catch((validationErrors: yup.ValidationError) => {
        setIsLoading(false);
        const newErrors: Errors = {};
        validationErrors.inner.forEach((error) => {
          if (error.path && !newErrors[error.path]) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      });
  };

  return {
    onSubmit,
    onChange,
    errors,
    formError,
    formValues,
    isLoading,
    recaptchaRef,
  };
};
