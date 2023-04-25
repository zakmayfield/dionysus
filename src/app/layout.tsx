'use client';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
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
      <Head>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
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
