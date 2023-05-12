import React, { FormEvent, useState } from 'react';
import * as yup from 'yup';
import { Errors } from '@/shared/components';

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
  foundOtherDesc: yup.string(),
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

export const useContactForm = (
  onSuccess: (data: ContactFormValues) => void
) => {
  const defaultFormValues = {
    name: '',
    company: '',
    phone: '',
    email: '',
    found: '',
    foundOtherDesc: undefined,
    message: '',
  };

  const [formData, setFormData] =
    useState<ContactFormValues>(defaultFormValues);
  const [errors, setErrors] = useState<Errors>();
  const [formError, setFormError] = useState<string | undefined>(undefined);

  const resetData = () => {
    setFormData(defaultFormValues);
  };

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then((data) => {
        fetch('https://chasers-juice-webook.fly.dev/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              resetData();
              onSuccess(data);
            } else {
              throw new Error('Failed to send email');
            }
          })
          .catch((error) => {
            setFormError(
              `There has been an error: ${error}. Please call us directly at (416) 259-1557`
            );
          });
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

  return { onSubmit, onChange, errors, formError, formData };
};
