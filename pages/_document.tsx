import { Html, Head, Main, NextScript } from 'next/document';

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
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>

      <body className='bg-zinc-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
