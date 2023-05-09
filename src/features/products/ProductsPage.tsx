'use client';
import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { ProductsStatement } from './ProductsStatement';
import { ProductsOffering } from './ProductsOffering';
import { ContentContainer, Hero } from '@/shared/components';
import HeroImg from '@/shared/assets/juice/product-hero-beach.jpeg';

export const ProductsPage = () => {
  return (
    <Box>
      <Hero title='Products' imgSrc={HeroImg.src} />
      <ProductsOffering />
      <ProductsStatement />
    </Box>
  );
};
