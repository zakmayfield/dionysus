'use client';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { ContactForm } from './contactForm/ContactForm';
import { FadeInBox } from '@/shared/components';

export const Forms = () => {
  return (
    <Box
      minW='40%'
      boxShadow='7px 12px 20px 0 rgba(0,0,0, 0.3)'
      rounded='md'
      bg={{ lg: 'transparent', base: 'whiteAlpha.900' }}
      p='12'
    >
      <FadeInBox>
        <Flex alignItems='center' gap='6' marginBottom='6'>
          <Heading as='h3' size='lg' fontWeight='semibold'>
            Get In Touch
          </Heading>
          <span>or</span>
          <Button>Request an Account</Button>
        </Flex>
        <ContactForm />
      </FadeInBox>
    </Box>
  );
};
