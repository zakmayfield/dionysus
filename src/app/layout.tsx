'use client';
import { Box } from '@chakra-ui/react';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Box>
        <Providers>{children}</Providers>
      </Box>
    </html>
  );
}
