'use client';
import React from 'react';
import { Box } from '@chakra-ui/react';
import faqsData from './faqData.json';
import { FaqSection } from './FaqSection';
import { Hero } from '@/shared/components';
import HeroImg from '@/shared/assets/faq/kiwi-bg.jpeg';

export const FaqPage = () => {
  return (
    <Box>
      <Hero title='Frequenty asked questions' img={HeroImg} altText='kiwi' />
      {faqsData.map((faqSection) => {
        return <FaqSection key={faqSection.key} section={faqSection} />;
      })}
    </Box>
  );
};
