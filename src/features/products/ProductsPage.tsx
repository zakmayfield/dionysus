'use client';
import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { ProductsStatement } from './ProductsStatement';
import productsData from './productsData.json';
import { ProductSquare } from './ProductSquare';
import { ProductsOfferingHero } from './ProductsOfferingHero';
import { ContentContainer, Hero } from '@/shared/components';
import HeroImg from '@/shared/assets/juice/product-hero-beach.jpeg';

export const ProductsPage = () => {
  return (
    <Box>
      <Hero title='Products' imgSrc={HeroImg.src} />
      <ProductsStatement />
      <ContentContainer maxW='container.lg' py={{ md: '20', base: '12' }}>
        <Grid
          templateColumns={{
            md: 'repeat(3, 1fr)',
            sm: 'repeat(2, 1fr)',
            base: '1fr',
          }}
          templateRows='1fr'
          gap='8'
        >
          {productsData.map((product) => (
            <ProductSquare key={product.imgKey} product={product} />
          ))}
        </Grid>
      </ContentContainer>
      <ProductsOfferingHero />
    </Box>
  );
};
