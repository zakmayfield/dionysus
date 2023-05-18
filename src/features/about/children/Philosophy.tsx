'use client';

import { Stack } from '@chakra-ui/react';
import {
  philosophyTitle,
  philosophySubTitle,
  philosophyContent,
} from '../constants';
import { AboutTextContent } from '../AboutTextContent';
import { FullHeightImage } from '@/shared/components';
import lcp from '@/shared/assets/about/lcp.jpeg';

export const Philosophy = () => {
  return (
    <Stack
      as='section'
      direction={{ base: 'column', lg: 'row-reverse' }}
      minH={{ md: '100vh' }}
      w='100%'
      spacing={{ base: '12', lg: '0' }}
      mt='6'
      mb='12'
      px={{ base: '6', md: '0' }}
    >
      <AboutTextContent
        maxW={{ base: '100%', lg: '50%' }}
        title={philosophyTitle}
        subtitle={philosophySubTitle}
        textContent={philosophyContent}
      />
      <FullHeightImage img={lcp} altText='lycee cactus pear juice' />
    </Stack>
  );
};
