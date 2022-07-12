import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import * as components from 'components/mdx';
import Container from 'components/container';
import Footer from 'components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Container>
        <Component {...pageProps} />

        <Footer />
      </Container>
    </MDXProvider>
  );
}

export default MyApp;
