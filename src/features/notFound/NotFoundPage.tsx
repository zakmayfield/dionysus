'use client';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';
import FeaturedJuice from '@/shared/assets/notFound/centre-juice-lcp.png';

export const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Box
      w='full'
      minH={{ md: '900px', sm: '700px', base: '500px' }}
      position='relative'
      display='flex'
      justifyContent='center'
      alignItems='center'
      mx='auto'
      maxW='container.2xl'
    >
      {/* Orange circle */}
      <Box
        w={{ lg: '750px', md: '700px', sm: '550px', base: '400px' }}
        h={{ lg: '750px', md: '700px', sm: '550px', base: '400px' }}
        bg='rgb(248,206,88)'
        rounded='full'
      />

      {/* 404 Heading & Juice Image */}
      <Flex
        position='absolute'
        top='0'
        direction='column'
        justifyContent='center'
        alignItems={{ lg: 'center', base: 'flex-end' }}
      >
        <Heading
          as='h1'
          textTransform='uppercase'
          fontFamily='Londrina Outline'
          letterSpacing='widest'
          fontSize={{ lg: '280px', sm: '200px', base: '150px' }}
          lineHeight='none'
          fontWeight='light'
          textAlign='center'
          color='blackAlpha.800'
          w='full'
        >
          404
        </Heading>
        <Box
          position='absolute'
          top='18vh'
          transform='rotate(10deg)'
          width={{
            md: FeaturedJuice.width / 1.3,
            base: FeaturedJuice.width / 2,
          }}
          height={{
            md: FeaturedJuice.height / 1.3,
            base: FeaturedJuice.height / 2,
          }}
        >
          <NextImage
            src={FeaturedJuice}
            alt='Bottle of chasers juice lychee cactus pear juice'
            quality={100}
            style={{
              filter: 'drop-shadow(30px 15px 4px rgba(0, 0, 0, 0.08))',
            }}
          />
        </Box>
      </Flex>

      {/* Left text box */}
      <Box
        position='absolute'
        maxW={{ lg: 'prose', sm: '40ch', base: '30ch' }}
        left='0'
        px={{ lg: '12', base: '6' }}
      >
        <Heading>Oops!</Heading>
        <Heading>Page not found</Heading>
        <Text mt='3'>
          It looks like the page you&apos;re trying to visit doesn&apos;t exist.
        </Text>
        <Button
          onClick={() => router.back()}
          colorScheme='lightAccent'
          variant='outline'
          mt='3'
        >
          Go back
        </Button>
      </Box>
    </Box>
  );
};
