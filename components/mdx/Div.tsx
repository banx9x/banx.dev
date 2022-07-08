import React from 'react';
import cn from 'clsx';
import style from './Div.module.css';

const Div: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <div {...props} className={cn(className, style.div)}>
      {children}
    </div>
  );
};

export default Div;
