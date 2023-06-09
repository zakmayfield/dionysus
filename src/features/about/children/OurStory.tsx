'use client';
import { Stack } from '@chakra-ui/react';
import { AboutTextContent } from '../AboutTextContent';
import ourStoryContent from './OurStoryContent.json';
import { FullHeightImage } from '@/shared/components';
import PomJuice from '@/shared/assets/about/pom.jpeg';
import OrangeJuice from '@/shared/assets/about/orange-juice.jpg';

export const OurStory = () => {
  const { title, subtitle, content, content2 } = ourStoryContent;
  return (
    <Stack
      mt='6'
      mb='12'
      spacing={{ base: '12', lg: '0' }}
      px={{ base: '6', md: '0' }}
    >
      <Stack
        as='section'
        direction={{ base: 'column', lg: 'row-reverse' }}
        minH={{ md: '100vh' }}
        w='100%'
        spacing={{ base: '12', lg: '0' }}
      >
        <AboutTextContent
          maxW={{ base: '100%', lg: '50%' }}
          title={title}
          subtitle={subtitle}
          textContent={content}
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
          textContent={content2}
        />
        <FullHeightImage
          img={OrangeJuice}
          altText='Hand holding bottle of orange juice'
        />
      </Stack>
    </Stack>
  );
};
