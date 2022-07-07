import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents, Header, Footer } from 'components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <div className='md:max-w-screen-sm w-full mx-auto px-2 antialiased tracking-wide'>
        <Header />

        {children}

        <Footer />
      </div>
    </MDXProvider>
  );
};

export default Layout;
