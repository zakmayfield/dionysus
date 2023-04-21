import { Container, ContainerProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type MdContentContainerProps = ContainerProps & PropsWithChildren;

export const MdContentContainer = ({
  children,
  ...props
}: MdContentContainerProps) => {
  return (
    <Container maxW='container.md' p='0' m='0' mx='auto' {...props}>
      {children}
    </Container>
  );
};
