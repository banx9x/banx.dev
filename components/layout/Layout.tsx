import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Header from 'components/header';
import Footer from 'components/footer';
import * as components from 'components/mdx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className='container antialiased tracking-wide text-lg text-rose-50'>
        <Header />

        <div className='pt-24'>{children}</div>

        <Footer />
      </div>
    </MDXProvider>
  );
};

export default Layout;
