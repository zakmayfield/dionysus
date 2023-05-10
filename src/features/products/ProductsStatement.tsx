import { Box, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { ContentContainer } from '@/shared/components';

export const ProductsStatement = () => {
  return (
    <Box textAlign='center'>
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
          the country our wholesale products!
        </Text>
        <Button variant='outline' colorScheme='lightAccent'>
          Contact Us
        </Button>
      </ContentContainer>
    </Box>
  );
};
