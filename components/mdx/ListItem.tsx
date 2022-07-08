import React from 'react';
import cn from 'clsx';
import style from './ListItem.module.css';

const ListItem: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ children, className, ...props }) => {
  return (
    <li {...props} className={cn(className, style['list-item'])}>
      {children}
    </li>
  );
};

export default ListItem;
