import React from 'react';
import cn from 'clsx';
import style from './Table.module.css';

const Table: React.FC<
  React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >
> = ({ children, className, ...props }) => {
  return (
    <table {...props} className={cn(className, style.table)}>
      {children}
    </table>
  );
};

export default Table;
