'use client';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../shared/assets/chasers-juice-logo.png';
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
          <Box as='main' minH='100vh' border='3px solid red'>
            {children}
          </Box>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
