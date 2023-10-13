'use client';
import { useState } from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
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

  /**
   * TODO
   * Heading mobile friendly
   * Fade in and out changing form
   * Query string for form selection
   */

  return (
    <Box
      minW='40%'
      boxShadow='7px 12px 20px 0 rgba(0,0,0, 0.3)'
      rounded='md'
      bg={{ lg: 'transparent', base: 'whiteAlpha.900' }}
      p='12'
    >
      <FadeInBox>
        <Box marginBottom='6'>
          <Flex alignItems='center' justifyContent='space-between' gap='6'>
            <Heading as='h3' size='lg' fontWeight='semibold'>
              {activeForm === 1 ? 'Get In Touch' : 'Create Account'}
            </Heading>
            <span>or</span>
            <Button
              onClick={handleSwitchForm}
              variant='outline'
              colorScheme='orange'
              _hover={{ background: 'rgba(192, 86, 33, 0.1)' }}
            >
              {activeForm === 1 ? 'Create Account' : 'Get in Contact'}
            </Button>
          </Flex>
          {activeForm === 1 && (
            <Text
              fontSize='sm'
              marginTop='2'
              textAlign='center'
              color='gray.700'
            >
              If you would like to place an order, you must{' '}
              <Button
                variant='link'
                onClick={() => setActiveForm(2)}
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
        {activeForm === 1 ? <ContactForm /> : <RequestAccountForm />}
      </FadeInBox>
    </Box>
  );
};
