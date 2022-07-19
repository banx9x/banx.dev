import React from 'react';
import { BiHomeHeart, BiStats } from 'react-icons/bi';
import NavLink from './NavLink';

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav className='flex space-x-4'>
      <NavLink href='/series' icon={<BiStats />}>
        Series
      </NavLink>
    </nav>
  );
};

export default Nav;
