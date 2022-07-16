import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';

import { Container } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW='container.md' px='4'>
      <Header />

      {children}

      <Footer />
    </Container>
  );
};

export default Layout;
