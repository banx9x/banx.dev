import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='container antialiased tracking-wide text-lg text-rose-50'>
      <div className='pt-24'>{children}</div>
    </div>
  );
};

export default Container;
