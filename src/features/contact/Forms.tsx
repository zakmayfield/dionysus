'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactForm } from './contactForm/ContactForm';
import { RequestAccountForm } from './requestAccount/RequestAccountForm';

enum FormTypes {
  CONTACT = 'contact',
  CREATE_ACCOUNT = 'createAccount',
}

export const Forms = () => {
  const [activeForm, setActiveForm] = useState<FormTypes>(FormTypes.CONTACT);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const form = params.get('form');
    if (form === FormTypes.CREATE_ACCOUNT) {
      setActiveForm(FormTypes.CREATE_ACCOUNT);
    }
  }, []);

  function handleSwitchForm() {
    setActiveForm((prevForm) =>
      prevForm === FormTypes.CONTACT
        ? FormTypes.CREATE_ACCOUNT
        : FormTypes.CONTACT
    );
  }

  return (
    <Box
      minW='40%'
      boxShadow='7px 12px 20px 0 rgba(0,0,0, 0.3)'
      rounded='md'
      bg={{ lg: 'transparent', base: 'whiteAlpha.900' }}
      p='12'
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeForm}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }} // Animation duration
        >
          <Box marginBottom={{ base: '12', lg: '6' }}>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='space-between'
              gap='6'
            >
              <Heading
                as='h3'
                size={{ base: 'xl', lg: 'md' }}
                fontWeight='semibold'
              >
                {activeForm === 'contact' ? 'Get In Touch' : 'Create Account'}
              </Heading>
              <span>or</span>
              <Button
                onClick={handleSwitchForm}
                variant='outline'
                colorScheme='orange'
                _hover={{ background: 'rgba(192, 86, 33, 0.1)' }}
                size={{ base: 'md', lg: 'sm' }}
              >
                {activeForm === FormTypes.CONTACT
                  ? 'Create Account'
                  : 'Get in Contact'}
              </Button>
            </Flex>
            {activeForm === FormTypes.CONTACT && (
              <Text
                fontSize='sm'
                marginTop='4'
                textAlign='center'
                color='gray.700'
              >
                If you would like to place an order, you must{' '}
                <Button
                  variant='link'
                  onClick={() => setActiveForm(FormTypes.CREATE_ACCOUNT)}
                  fontSize='sm'
                  colorScheme='orange'
                  fontWeight='normal'
                >
                  create an account
                </Button>{' '}
                first.
              </Text>
            )}
          </Box>

          {activeForm === FormTypes.CONTACT ? (
            <ContactForm />
          ) : (
            <RequestAccountForm />
          )}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};
