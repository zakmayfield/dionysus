'use client';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers';
import Nav from '../components/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <Box as='body'>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </Box>
    </html>
  );
}
