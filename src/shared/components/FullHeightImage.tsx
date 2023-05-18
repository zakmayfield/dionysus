'use client';
import { Box, BoxProps } from '@chakra-ui/react';
import Image from 'next/image';

type FullHeightImageProps = BoxProps & {
  img: any;
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
      <Image
        src={img}
        alt={altText}
        style={{
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Box>
  );
};
