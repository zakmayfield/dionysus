'use client';
import { Box, BoxProps, useMediaQuery } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

type FullHeightImageProps = BoxProps & {
  img: StaticImageData;
  altText: string;
};

export const FullHeightImage = ({
  img,
  altText = 'placeholder',
  ...props
}: FullHeightImageProps) => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  // parent needs a minH set
  return (
    <Box {...props}>
      <Image
        src={img}
        alt={altText}
        style={{
          height: isLargerThanTablet ? '100%' : '70vh',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Box>
  );
};
