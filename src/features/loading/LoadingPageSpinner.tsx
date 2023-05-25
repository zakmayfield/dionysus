'use client';
import { Flex, Center, Spinner, Text, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { useRotatingText } from '@/shared/hooks';
import FeaturedJuice from '@/shared/assets/loading/green-juice.png';
import { MotionText } from '@/shared/components';

export const LoadingPageSpinner = () => {
  const loadingPhrases = [
    'Juicing oranges',
    'Gathering fruits',
    'Dehydrating peels',
    'Creating mocktails',
    'Peeling lychees',
    'Chopping spinach',
  ];
  const loadingPhrase = useRotatingText(loadingPhrases);
  const [phrase, setPhrase] = useState<string | null>(null);
  useEffect(() => {
    setPhrase(loadingPhrase);
  }, [loadingPhrase]);
  return (
    <Center minH='80vh' overflowX='hidden'>
      <Flex flexDir='row' alignItems='center'>
        <Center flexDir='column' px={{ sm: '12' }}>
          <AnimatePresence>
            <Box
              mb='6'
              minW={{ md: '72', sm: '56', base: '52' }}
              textAlign='center'
              fontSize={{ md: '2xl', sm: 'xl', base: 'lg' }}
              position='relative'
            >
              {phrase ? (
                <MotionText
                  key={phrase}
                  initial={{
                    translateX: -50,
                    opacity: 0,
                    position: 'absolute',
                  }}
                  animate={{ translateX: 0, opacity: 1, position: 'relative' }}
                  exit={{ translateX: 50, opacity: 0, position: 'absolute' }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                  }}
                >
                  {phrase} . . .
                </MotionText>
              ) : (
                <Text>Peeling lychees . . .</Text>
              )}
            </Box>
          </AnimatePresence>
          <Spinner
            size='2xl'
            thickness='4px'
            color='primary.500'
            emptyColor='tertiary.100'
            speed='0.65s'
          />
        </Center>

        <NextImage
          src={FeaturedJuice}
          alt='Bottle of chasers juice orange juice'
          width={FeaturedJuice.width / 1.5}
          height={FeaturedJuice.height / 1.5}
          quality={100}
          style={{
            filter: 'drop-shadow(30px 15px 4px rgba(0, 0, 0, 0.15))',
            transform: 'rotate(10deg)',
          }}
        />
      </Flex>
    </Center>
  );
};
