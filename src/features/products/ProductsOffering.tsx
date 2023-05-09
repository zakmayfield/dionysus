import { Box, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { ContentContainer } from '@/shared/components';

export const ProductsOffering = () => {
  return (
    <Box textAlign='center'>
      <ContentContainer
        maxW='container.sm'
        letterSpacing='wide'
        py={{ md: '20', base: '12' }}
      >
        <Heading as='h2' fontSize='4xl' w='full' fontWeight='semibold'>
          Our Offering
        </Heading>
        <Button mt='6' colorScheme='secondary'>
          View our Catalogue
        </Button>
      </ContentContainer>
    </Box>
  );
};
