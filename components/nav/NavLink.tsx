import Link from 'next/link';
import React from 'react';
import cn from 'clsx';
import { useRouter } from 'next/router';

interface NavLinkProps {
  href: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, children }) => {
  const { asPath } = useRouter();

  const Icon = React.cloneElement(icon, {
    width: 24,
    height: 24,
    className: 'transition-all duration-200 group-hover:scale-125',
  });

  const isActive = asPath === href;

  return (
    <Link href={href}>
      <a className='group flex items-center space-x-2 pr-2 rounded-lg hover:rounded-l-xl transition-all duration-200'>
        <div className='bg-gradient rounded-lg p-2 flex group-hover:rounded-xl transition-all duration-200 relative'>
          {Icon}
        </div>

        <div
          className={cn(
            'text-base',
            isActive ? 'text-gradient' : 'text-light'
          )}>
          {children}
        </div>
      </a>
    </Link>
  );
};

export default NavLink;
