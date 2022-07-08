import React from 'react';
import cn from 'clsx';

const Heading3: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => {
  return (
    <h2 {...props} className={cn(className, 'px-3 my-3 text-xl font-medium')}>
      {children}
    </h2>
  );
};

export default Heading3;
