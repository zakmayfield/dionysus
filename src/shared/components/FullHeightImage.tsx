'use client';
import { Box, BoxProps, Image } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import { FadeInBox } from './FadeInBox';

type FullHeightImageProps = BoxProps & {
  img: StaticImageData;
  altText: string;
};

export const FullHeightImage = ({
  img,
  altText = 'placeholder',
  ...props
}: FullHeightImageProps) => {
  // parent needs a minH set
  return (
    <Box {...props}>
      <FadeInBox h='full'>
        <Image
          src={img.src}
          alt={altText}
          height={{ md: '100%', base: '70vh' }}
          objectFit='cover'
          objectPosition='center'
        />
      </FadeInBox>
    </Box>
  );
};
