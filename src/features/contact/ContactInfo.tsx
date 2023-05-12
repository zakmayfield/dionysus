import { VStack, Heading, Text, Link } from '@chakra-ui/react';
import React from 'react';

export const ContactInfo = () => {
  return (
    <VStack spacing='2' alignItems='flex-start'>
      <Heading as='h2' fontWeight='semibold'>
        Chasers Fresh Juice Inc.
      </Heading>
      <Text>218 North Queen Street</Text>
      <Text>Etobicoke, ON, M9C 4Y1</Text>
      <Text>
        Orders:&nbsp;
        <Link
          href='tel:4162591557'
          transition='ease'
          transitionDuration='200ms'
          color='black'
          _hover={{ color: 'secondary.800' }}
        >
          (416) 259-1557
        </Link>
      </Text>
      <Text>
        Email:&nbsp;
        <Link
          href='mailto:orders@chasersjuice.com'
          transition='ease'
          transitionDuration='200ms'
          color='black'
          _hover={{ color: 'secondary.800' }}
        >
          orders@chasersjuice.com
        </Link>
      </Text>
    </VStack>
  );
};
