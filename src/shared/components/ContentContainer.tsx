import { Container, ContainerProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type ContentContainerProps = ContainerProps & PropsWithChildren;

export const ContentContainer = ({
  children,
  ...props
}: ContentContainerProps) => {
  return (
    <Container maxW='container.xl' px='8' {...props}>
      {children}
    </Container>
  );
};
