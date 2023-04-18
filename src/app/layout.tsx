'use client';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers';
import Nav from '../components/Nav';
import Footer from '@/components/Footer';

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
          <Box as='main' minH='100vh'>
            {children}
          </Box>
          <Footer />
        </Providers>
      </Box>
    </html>
  );
}
