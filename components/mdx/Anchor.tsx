import Link from 'next/link';
import React from 'react';

const Anchor: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, href, ...props }) => {
  if (href?.startsWith('http'))
    return (
      <a {...props} href={href} target='_blank' rel='noreferrer'>
        <span className='bg-clip-text bg-gradient-to-tl from-orange-400 to-purple-400 text-transparent'>
          {children}
        </span>
      </a>
    );
  else
    return (
      <Link href={href!}>
        <a {...props}>
          <span className='bg-clip-text bg-gradient-to-tl from-orange-400 to-purple-400 text-transparent'>
            {children}
          </span>
        </a>
      </Link>
    );
};

export default Anchor;
