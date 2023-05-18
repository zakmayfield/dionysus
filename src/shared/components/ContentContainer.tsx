'use client';
import { Container, ContainerProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type ContentContainerProps = ContainerProps & PropsWithChildren;

export const ContentContainer = ({
  children,
  ...props
}: ContentContainerProps) => {
  return (
    /** * Note: make sure to leave a px on the ContentContainer so all
     * components with content have the same horizontal padding. Use p="0"
     * for components that don't need padding.
     */
    <Container maxW='container.lg' px='8' m='0' mx='auto' {...props}>
      {children}
    </Container>
  );
};
