import { Container, ContainerProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type XlContentContainerProps = ContainerProps & PropsWithChildren;

export const XlContentContainer = ({
  children,
  ...props
}: XlContentContainerProps) => {
  return (
    <Container maxW='container.xl' px='8' {...props}>
      {children}
    </Container>
  );
};
