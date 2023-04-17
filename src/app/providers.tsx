'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </CacheProvider>
  );
}
