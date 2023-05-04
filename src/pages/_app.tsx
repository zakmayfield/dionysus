'use client';
import React from 'react';
import App, { AppContext, AppProps, NextWebVitalsMetric } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import routes from '@/shared/routes';
import { NextPageWithLayout } from '@/types';
import { Layout } from '@/features/layout';
import theme from '@/theme';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/londrina-outline';

// Report all the web statistics like Time to First Paint Byte and First Contentful Paint
export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV !== 'production') {
    console.info(
      `WEB_METRIC ${metric.name} START: ${Math.round(
        metric.startTime
      )}ms; VALUE: ${Math.round(metric.value)}ms`
    );
  }
}

type CustomAppProps = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, router: { pathname } }: CustomAppProps) {
  if (pathname === routes.browserNotSupported) {
    return <Component {...pageProps} />;
  }

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
