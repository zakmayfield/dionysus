'use client';
import { Box, BoxProps } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

type HeroImageProps = BoxProps & {
  img: StaticImageData | string;
  altText: string;
};

export const HeroImage = ({
  img,
  altText = 'placeholder',
  ...props
}: HeroImageProps) => {
  return (
    <Box {...props} w='full' height={{ base: '200px', md: '300px' }}>
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
    </Box>
  );
};
