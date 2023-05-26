import { VStack, Heading, Text, Link, Button } from '@chakra-ui/react';
import React from 'react';
import { chasersJuice } from '@/shared/constants';
import { formatPhoneNumber } from '@/shared/utils';

export const ContactInfo = () => {
  return (
    <VStack spacing='2' alignItems='flex-start'>
      <Heading as='h2' fontWeight='semibold'>
        {chasersJuice.legalName}
      </Heading>
      <Text>{chasersJuice.address.address}</Text>
      <Text>
        {chasersJuice.address.city}, {chasersJuice.address.state},{' '}
        {chasersJuice.address.zip}
      </Text>
      <Text>
        Orders:&nbsp;
        <Link
          href={`tel:${chasersJuice.phone}`}
          transition='ease'
          transitionDuration='200ms'
          color='black'
          _hover={{ color: 'lightAccent.700' }}
        >
          {formatPhoneNumber(chasersJuice.phone)}
        </Link>
      </Text>
      <Text>
        Email:&nbsp;
        <Link
          href={`mailto:${chasersJuice.email}`}
          transition='ease'
          transitionDuration='200ms'
          color='black'
          _hover={{ color: 'lightAccent.700' }}
        >
          {chasersJuice.email}
        </Link>
      </Text>
      <Button
        variant='outline'
        as={Link}
        href={chasersJuice.address.googleMapsLink}
        transition='ease'
        transitionDuration='200ms'
        color='black'
        _hover={{ color: 'lightAccent.700', textDecor: 'none' }}
        size='sm'
        target='_blank'
      >
        Click here for directions
      </Button>
    </VStack>
  );
};
