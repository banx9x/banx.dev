import React from 'react';
import cn from 'clsx';
import style from './List.module.css';

const OrderedList: React.FC<
  React.DetailedHTMLProps<
    React.OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >
> = ({ children, className, ...props }) => {
  return (
    <ol
      {...props}
      className={cn(
        className,
        'marker:text-zinc-400 marker:text-sm marker:font-bold list-decimal px-12 mt-0 mb-4',
        style.list
      )}>
      {children}
    </ol>
  );
};

export default OrderedList;
