'use client';
import { Heading, Box, Flex } from '@chakra-ui/react';
import { FadeInBox } from './FadeInBox';

type HeroProps = {
  title: string;
  imgSrc: string;
  /** This key is set as the motion key which will run the animation when the
   * key changes */
  key?: string;
};

export const Hero = ({ title, imgSrc, key }: HeroProps) => {
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
      bgImage={imgSrc}
    >
      {/* consider changing hero bg images to Next Images, for optimzation purposes? ** sidenote, on first render of the images there is a flash when the image is being rendered */}
      <FadeInBox
        textTransform='capitalize'
        color='white'
        zIndex='2'
        px='6'
        key={key}
      >
        <Heading
          as='h1'
          fontWeight='light'
          letterSpacing='widest'
          fontSize='5xl'
          textAlign='center'
        >
          {title}
        </Heading>
      </FadeInBox>

      {/* Overylay */}
      <Box position='absolute' inset='0' bg='rgba(0, 0, 0, 0.3)' />
    </Flex>
  );
};
