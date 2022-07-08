import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Header, Footer } from 'components';
import * as components from 'components/mdx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className='md:max-w-screen-sm w-full mx-auto px-2 antialiased tracking-wide text-lg text-rose-50'>
        <Header />

        {children}

        <Footer />
      </div>
    </MDXProvider>
  );
};

export default Layout;
