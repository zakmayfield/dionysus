import { Container, ContainerProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type SmContentContainerProps = ContainerProps & PropsWithChildren;

export const SmContentContainer = ({
  children,
  ...props
}: SmContentContainerProps) => {
  return (
    <Container maxW='container.sm' p='0' m='0' mx='auto' {...props}>
      {children}
    </Container>
  );
};
