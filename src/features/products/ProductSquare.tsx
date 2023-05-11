import { Box, GridItem, Text, Heading, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import NextImage from 'next/image';
import { ProductImages } from './constants';
import { ProductModal } from './ProductModal';
import { FadeInBox, MotionBox } from '@/shared/components';

export type Product = {
  title: string;
  description: string[];
  imgKey: string;
};

type ProductSquareProps = {
  product: Product;
};

export const ProductSquare = ({ product }: ProductSquareProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const productImage = ProductImages[product.imgKey];
  return (
    <>
      <GridItem
        textAlign='left'
        aria-label='button to open modal'
        onClick={onOpen}
        w='100%'
        cursor='pointer'
      >
        <FadeInBox>
          <Box
            maxH='52'
            overflow='hidden'
            position='relative'
            rounded='sm'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <NextImage
              src={productImage.src}
              width={productImage.width}
              height={productImage.height}
              alt='citrus image'
            />
            {isHovered && (
              <MotionBox
                position='absolute'
                inset='0'
                bg='blackAlpha.700'
                p='6'
                opacity='0%'
                whileHover={{ opacity: '100%' }}
              >
                <Text color='white' noOfLines={4}>
                  {product.description[0]}
                </Text>
              </MotionBox>
            )}
          </Box>
          <Heading
            as='h3'
            fontSize='2xl'
            fontWeight='normal'
            mt='2'
            textAlign='center'
          >
            {product.title}
          </Heading>
        </FadeInBox>
      </GridItem>
      <ProductModal
        content={product.description}
        title={product.title}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
