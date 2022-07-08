import React from 'react';
import cn from 'clsx';

const BlockQuote: React.FC<
  React.DetailedHTMLProps<
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >
> = ({ children, className, ...props }) => {
  return (
    <blockquote
      {...props}
      className={cn(
        className,
        'bg-zinc-50/10 border-l-4 border-indigo-500 p-1'
      )}>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
