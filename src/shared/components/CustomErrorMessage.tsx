'use client';

import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

export type Errors = { [key: string]: string };

type CustomErrorMessageProps = TextProps & {
  /** Name of field in error stack. */
  name: string;
  errors: Errors | undefined;
};

export const CustomErrorMessage = ({
  name,
  errors,
  ...props
}: CustomErrorMessageProps) => {
  const errorMessage = errors?.[name];

  if (!errorMessage) {
    return null;
  }

  return (
    <Text fontSize='sm' color='red.500' {...props}>
      {errorMessage}
    </Text>
  );
};
