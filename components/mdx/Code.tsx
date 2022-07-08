import React from 'react';
import cn from 'clsx';
import style from './Code.module.css';

const Code: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, className, ...props }) => {
  console.log(props);

  return (
    <code {...props} className={cn(className, style.code)}>
      {children}
    </code>
  );
};

export default Code;
