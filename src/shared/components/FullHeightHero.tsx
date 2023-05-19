'use client';
import { Box, BoxProps } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import { FadeInBox } from './FadeInBox';

type FullHeightHeroProps = BoxProps & {
  img: StaticImageData;
  altText: string;
};

export const FullHeightHero = ({
  img,
  altText = 'placeholder',
  ...props
}: FullHeightHeroProps) => {
  return (
    <Box {...props}>
      <FadeInBox h='full'>
        <Image
          src={img}
          alt={altText}
          style={{
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </FadeInBox>
    </Box>
  );
};
