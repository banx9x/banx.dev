import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from 'lib/utils/theme';

const Document = () => {
  return (
    <Html lang='vi'>
      <Head>
        <meta name='robots' content='index,follow' />
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
      </Head>

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />

        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
