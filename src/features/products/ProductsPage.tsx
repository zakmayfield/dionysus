'use client';
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Hero } from '@/shared/components';
import HeroImg from '@/shared/assets/juice/prev-home-hero.jpeg';

export const ProductsPage = () => {
  return (
    <Box>
      <Hero title='Products' imgSrc={HeroImg.src} />
      <Heading>Products</Heading>
    </Box>
  );
};
