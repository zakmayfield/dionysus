'use client';
import type { PropsWithChildren } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from '../theme';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/londrina-outline';

export function Providers({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </CacheProvider>
  );
}
