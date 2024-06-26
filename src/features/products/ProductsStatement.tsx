import { Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { ContentContainer, FadeInBox } from '@/shared/components';
import routes from '@/shared/routes';

export const ProductsStatement = () => {
  return (
    <FadeInBox textAlign='center'>
      <ContentContainer
        maxW='container.sm'
        letterSpacing='wide'
        pt={{ md: '20', base: '12' }}
      >
        <Heading as='h2' fontSize='4xl' w='full' fontWeight='semibold'>
          Wholesale
        </Heading>
        <Text my='6' fontWeight='light'>
          We proudly serve restaurants, bars, cafes & grocery stores all across
          the country! We also offer bulk pricing for all of our products.
        </Text>
        <Button colorScheme='lightAccent' as={NextLink} href={routes.contact}>
          Place An Order
        </Button>
      </ContentContainer>
    </FadeInBox>
  );
};
