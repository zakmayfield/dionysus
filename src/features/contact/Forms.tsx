'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { ContactForm } from './contactForm/ContactForm';
import { RequestAccountForm } from './requestAccount/RequestAccountForm';
import { FadeInBox } from '@/shared/components';

export const Forms = () => {
  const [activeForm, setActiveForm] = useState(1);

  function handleSwitchForm() {
    if (activeForm === 1) {
      setActiveForm(2);
    } else {
      setActiveForm(1);
    }
  }

  return (
    <Box
      minW='40%'
      boxShadow='7px 12px 20px 0 rgba(0,0,0, 0.3)'
      rounded='md'
      bg={{ lg: 'transparent', base: 'whiteAlpha.900' }}
      p='12'
    >
      <FadeInBox>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          gap='6'
          marginBottom='6'
        >
          <Heading as='h3' size='lg' fontWeight='semibold'>
            {activeForm === 1 ? 'Get In Touch' : 'Request Account'}
          </Heading>
          <span>or</span>
          <Button onClick={handleSwitchForm}>
            {activeForm === 1 ? 'Request Account' : 'Get in Contact'}
          </Button>
        </Flex>
        <AnimatePresence>
          {activeForm === 1 ? <ContactForm /> : <RequestAccountForm />}
        </AnimatePresence>
      </FadeInBox>
    </Box>
  );
};
