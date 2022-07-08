import React from 'react';
import cn from 'clsx';

const Paragraph: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = ({ children, className, ...props }) => {
  return (
    <p {...props} className={cn(className, 'px-3 my-3 relative')}>
      {children}
    </p>
  );
};

export default Paragraph;
