'use client';
import { Box } from '@chakra-ui/react';
import Nav from '../components/Nav';
import { Providers } from './providers';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Providers>
          <Nav />
          <Box as='main' minH='100vh' bg={`red.200`}>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
