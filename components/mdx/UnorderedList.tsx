import React from 'react';
import cn from 'clsx';
import style from './List.module.css';

const UnorderedList: React.FC<
  React.DetailedHTMLProps<
    React.OlHTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
> = ({ children, className, ...props }) => {
  return (
    <ul
      {...props}
      className={cn(
        className,
        'marker:text-zinc-400 list-disc px-12 mt-0 mb-4',
        style.list
      )}>
      {children}
    </ul>
  );
};

export default UnorderedList;
