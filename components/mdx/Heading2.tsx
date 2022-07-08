import React from 'react';
import cn from 'clsx';

const Heading2: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => {
  return (
    <h2 {...props} className={cn(className, 'px-3 my-5 text-2xl font-medium')}>
      {children}
    </h2>
  );
};

export default Heading2;
