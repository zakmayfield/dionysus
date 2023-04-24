'use client';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers';
import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';

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
          <Box as='main' minH='100vh'>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
