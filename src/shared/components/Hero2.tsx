'use client';
import { Heading, Box, Flex } from '@chakra-ui/react';
import { useActivePathHero } from '../hooks/useActivePathHero';
import { FadeInBox } from './FadeInBox';

export const Hero2 = () => {
  const { pathHero } = useActivePathHero();
  return (
    <Flex
      w='full'
      minH={{ base: '300px' }}
      position='relative'
      justifyContent='center'
      alignItems='center'
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      bgImage={pathHero?.img.src}
    >
      <FadeInBox textTransform='capitalize' color='white' zIndex='2' px='6'>
        <Heading
          as='h1'
          fontWeight='light'
          letterSpacing='widest'
          fontSize='5xl'
        >
          {pathHero?.title}
        </Heading>
      </FadeInBox>

      {/* Overylay */}
      <Box position='absolute' inset='0' bg='rgba(0, 0, 0, 0.3)' />
    </Flex>
  );
};
