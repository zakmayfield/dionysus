'use client';
import { Box, BoxProps } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import { FadeInBox } from './FadeInBox';

type FullHeightHeroProps = BoxProps & {
  img: StaticImageData | string;
  altText: string;
};

export const FullHeightHero = ({
  img,
  altText = 'placeholder',
  ...props
}: FullHeightHeroProps) => {
  return (
    <Box {...props} w='full' height={{ base: '200px', md: '300px' }}>
      <FadeInBox h='full'>
        <Image
          src={img}
          alt={altText}
          priority={true}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </FadeInBox>
    </Box>
  );
};
