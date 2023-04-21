'use client';
import type { PropsWithChildren } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from '../theme';

export function Providers({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </CacheProvider>
  );
}
