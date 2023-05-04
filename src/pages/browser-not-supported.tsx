import { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';

/* IE11 is not supported on Chakra 1.0
https://github.com/chakra-ui/chakra-ui/issues/2498

Due to Chakra moving to use CSS variables, styles will not work on IE11 since they
will be set with a variable reference. 😭

*/

const H1 = styled.h1`
  color: black;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

const Divider = styled.hr`
  color: black;
  width: 16px;
  border-bottom-width: 2px;
  margin: 16px 0;
  // IE
  text-align: left;
`;

const H2 = styled.h2`
  color: black;
  font-size: 28px;
  font-weight: 600;
`;

const BrowserContainer = styled.div`
  padding: 2rem;
`;

const BrowserNotSupportedPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='robots' content='noindex' />
      </Head>
      <BrowserContainer>
        <H1>Browser not supported</H1>
        <Divider />
        <H2>Please update or use a different browser</H2>
      </BrowserContainer>
    </>
  );
};

export default BrowserNotSupportedPage;
