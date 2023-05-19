'use client';

import { Stack } from '@chakra-ui/react';
import { AboutTextContent } from '../AboutTextContent';
import philosophyContent from './PhilosophyContent.json';
import { FullHeightImage } from '@/shared/components';
import FeaturedImg from '@/shared/assets/about/juice-cluster-beach.jpg';

export const Philosophy = () => {
  const { title, subtitle, content } = philosophyContent;
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
        title={title}
        subtitle={subtitle}
        textContent={content}
      />
      <FullHeightImage
        img={FeaturedImg}
        altText='Three bottles of different juices on a beach'
      />
    </Stack>
  );
};
