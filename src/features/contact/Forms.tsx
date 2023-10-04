'use client';
import { Box, Heading, Text } from '@chakra-ui/react';
import { ContactForm } from './ContactForm';
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
        <Heading as='h3' size='lg' fontWeight='semibold' mb='3'>
          Get In Touch
        </Heading>
        <Text mb='6'>Set up an account with us prior to your first order!</Text>
        <ContactForm />
      </FadeInBox>
    </Box>
  );
};
