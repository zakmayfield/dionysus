'use client';
import { Stack } from '@chakra-ui/react';
import { AboutTextContent } from '../AboutTextContent';
import {
  storyTitle,
  storySubtitle,
  storyContent,
  storyContent2,
} from '../constants';
import { FullHeightImage } from '@/shared/components';
import pom from '@/shared/assets/about/pom.jpeg';
import spinach from '@/shared/assets/about/spinach.jpeg';

export const OurStory = () => {
  return (
    <Stack my='6' spacing={{ base: '12', lg: '0' }} px={{ base: '6', md: '0' }}>
      <Stack
        as='section'
        direction={{ base: 'column', lg: 'row-reverse' }}
        minH={{ md: '100vh' }}
        w='100%'
        spacing={{ base: '12' }}
      >
        <AboutTextContent
          maxW={{ base: '100%', lg: '50%' }}
          title={storyTitle}
          subtitle={storySubtitle}
          textContent={storyContent}
        />
        <FullHeightImage img={pom} altText='pomegranate juice' />
      </Stack>

      <Stack
        as='section'
        direction={{ base: 'column', lg: 'row' }}
        minH={{ lg: '100vh' }}
        w='100%'
        spacing={{ base: '12' }}
      >
        <AboutTextContent
          maxW={{ base: '100%', lg: '50%' }}
          pr={{ lg: '6' }}
          pt={{ lg: '6' }}
          hasHeading={false}
          textContent={storyContent2}
        />
        <FullHeightImage img={spinach} altText='spinach juice' />
      </Stack>
    </Stack>
  );
};
