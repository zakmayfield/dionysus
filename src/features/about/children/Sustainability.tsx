'use client';
import { Stack } from '@chakra-ui/react';
import { AboutTextContent } from '../AboutTextContent';
import sustainabilityContent from './SustainabilityContent.json';
import { FullHeightImage } from '@/shared/components';
import OrangeWaterfall from '@/shared/assets/about/orange-waterfall.jpeg';
import SpinachMix from '@/shared/assets/about/spinach-mix.jpeg';

export const Sustainability = () => {
  const { title, subtitle, content, content2 } = sustainabilityContent;
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
          flex={{ lg: '1' }}
        />
        <FullHeightImage
          img={SpinachMix}
          altText='Spinach mix juice bottle with ocean in the background'
          flex={{ lg: '1' }}
        />
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
          flex={{ lg: '1' }}
        />
        <FullHeightImage
          img={OrangeWaterfall}
          altText='Hand holding bottle of orange juice'
          flex={{ lg: '1' }}
        />
      </Stack>
    </Stack>
  );
};
