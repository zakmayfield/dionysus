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
import PomJuice from '@/shared/assets/about/pom.jpeg';
import OrangeJuice from '@/shared/assets/about/orange-juice.jpg';

export const OurStory = () => {
  return (
    <Stack my='6' spacing={{ base: '12', lg: '0' }} px={{ base: '6', md: '0' }}>
      <Stack
        as='section'
        direction={{ base: 'column', lg: 'row-reverse' }}
        minH={{ md: '100vh' }}
        w='100%'
        spacing={{ base: '12', lg: '0' }}
      >
        <AboutTextContent
          maxW={{ base: '100%', lg: '50%' }}
          title={storyTitle}
          subtitle={storySubtitle}
          textContent={storyContent}
        />
        <FullHeightImage img={PomJuice} altText='Pomegranate juice on beach' />
      </Stack>

      <Stack
        as='section'
        direction={{ base: 'column', lg: 'row' }}
        h={{ lg: '100vh' }}
        w='100%'
        spacing={{ base: '12', lg: '0' }}
      >
        <AboutTextContent
          maxW={{ base: '100%', lg: '50%' }}
          pr={{ lg: '6' }}
          pt={{ lg: '6' }}
          hasHeading={false}
          textContent={storyContent2}
        />
        <FullHeightImage
          img={OrangeJuice}
          altText='Hand holding bottle of orange juice'
        />
      </Stack>
    </Stack>
  );
};
