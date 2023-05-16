'use client';
import { Heading, Box, Flex } from '@chakra-ui/react';
import { useActivePathHero } from '../hooks/useActivePathHero';
import { FadeInBox } from './FadeInBox';

export const Hero2 = () => {
  const { heroImg } = useActivePathHero();
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
      bgImage={heroImg.src}
    >
      {/* consider changing hero bg images to Next Images, for optimzation purposes? ** sidenote, on first render of the images there is a flash when the image is being rendered */}
      <FadeInBox textTransform='capitalize' color='white' zIndex='2' px='6'>
        <Heading
          as='h1'
          fontWeight='light'
          letterSpacing='widest'
          fontSize='5xl'
        >
          {/* {title} */} Test
        </Heading>
      </FadeInBox>

      {/* Overylay */}
      <Box position='absolute' inset='0' bg='rgba(0, 0, 0, 0.3)' />
    </Flex>
  );
};
