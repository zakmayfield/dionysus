import { Container, ContainerProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type LgContentContainerProps = ContainerProps & PropsWithChildren;

export const LgContentContainer = ({
  children,
  ...props
}: LgContentContainerProps) => {
  return (
    <Container maxW='container.lg' p='0' m='0' mx='auto' {...props}>
      {children}
    </Container>
  );
};
