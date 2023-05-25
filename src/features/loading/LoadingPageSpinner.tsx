'use client';
import { Center, Spinner, Text, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRotatingText } from '@/shared/hooks';
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
    <Center
      minH='80vh'
      overflowX='hidden'
      flexDir='column'
      px={{ sm: '12', base: '6' }}
    >
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
  );
};
