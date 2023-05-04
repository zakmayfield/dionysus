import type { NextPage } from 'next';

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
  /** Allow pages to define an alternate persistent layout */
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  /** Override the default flag requiring that user be logged in to access the page */
  isProtectedPage?: boolean;
};
