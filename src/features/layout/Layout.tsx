'use client';
import React from 'react';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Nav from './Nav';

type LayoutProps = {
  showHeader?: boolean;
  showFooter?: boolean;
};

export const Layout: React.FC<LayoutProps & React.PropsWithChildren> = ({
  showHeader = true,
  showFooter = true,
  children,
}) => {
  return (
    <>
      {showHeader && <Nav />}
      <Box as='main' minH='100vh'>
        {children}
      </Box>
      {showFooter && <Footer />}
    </>
  );
};
