'use client';
import { Heading, Box, Flex } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import { FullHeightHero } from './FullHeightHero';
import { FadeInBox } from './FadeInBox';

type HeroProps = {
  title: string;
  img: StaticImageData | string;
  /** This key is set as the motion key which will run the animation when the
   * key changes */
  key?: string;
};

export const Hero = ({ title, img, key }: HeroProps) => {
  return (
    <Flex
      w='full'
      minH={{ base: '300px' }}
      position='relative'
      justifyContent='center'
      alignItems='center'
    >
      <FullHeightHero img={img} altText='fruit' />

      {/* Overylay */}
      <Box position='absolute' inset='0' bg='rgba(0, 0, 0, 0.3)' />
    </Flex>
  );
};

{
  /* <FadeInBox
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
  >
    {title}
  </Heading>
</FadeInBox> */
}
