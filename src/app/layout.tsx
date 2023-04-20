'use client';
import { Box, Icon } from '@chakra-ui/react';
import { Providers } from './providers';
import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import logo from '../shared/assets/chasers-juice-logo.png';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';

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
          <Box as='main' minH='100vh' border='3px solid red'>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
