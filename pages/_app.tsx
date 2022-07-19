import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import * as components from 'components/mdx';
import Container from 'components/container';
import Footer from 'components/footer';
import { UIProvider } from 'components/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <UIProvider>
        <Container>
          <Component {...pageProps} />

          <Footer />
        </Container>
      </UIProvider>
    </MDXProvider>
  );
}

export default MyApp;
