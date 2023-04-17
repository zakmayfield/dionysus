'use client';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers';
import Nav from './components/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Box>
        <Nav />
        <Providers>{children}</Providers>
      </Box>
    </html>
  );
}
