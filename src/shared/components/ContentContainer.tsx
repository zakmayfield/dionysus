import { Container, ContainerProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type ContentContainerProps = ContainerProps & PropsWithChildren;

export const ContentContainer = ({
  children,
  ...props
}: ContentContainerProps) => {
  return (
    <Container maxW='container.lg' px='6' m='0' mx='auto' {...props}>
      {children}
    </Container>
  );
};
