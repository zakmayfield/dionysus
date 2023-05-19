'use client';
import { Heading, Box, Flex } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import { HeroImage } from './HeroImage';
import { FadeInBox } from './FadeInBox';

type HeroProps = {
  title: string;
  altText: string;
  img: StaticImageData | string;
  /** This key is set as the motion key which will run the animation when the
   * key changes */
  motionKey?: string;
};

export const Hero = ({ title, altText, img, motionKey }: HeroProps) => {
  return (
    <Flex
      w='full'
      position='relative'
      justifyContent='center'
      alignItems='center'
    >
      <HeroImage img={img} altText={altText} />

      {/* Overylay */}
      <Box position='absolute' inset='0' bg='rgba(0, 0, 0, 0.3)' />

      {/* Centered Title */}
      <Flex
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <FadeInBox
          textTransform='capitalize'
          color='white'
          zIndex='2'
          px='6'
          key={motionKey}
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
      </Flex>
    </Flex>
  );
};
