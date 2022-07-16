import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from 'lib/utils/theme';
import Layout from 'components/layout';
import { MDXProvider } from '@mdx-js/react';
import * as components from 'components/mdx';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
