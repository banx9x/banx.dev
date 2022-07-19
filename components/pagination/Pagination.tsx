import Link from 'next/link';
import React from 'react';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface PaginationProps {
  next: {
    href: {
      query: {
        [key: string]: any;
      };
    };
    label: React.ReactNode;
  } | null;
  previous?: {
    href: {
      query: {
        [key: string]: any;
      };
    };
    label: React.ReactNode;
  } | null;
}

const Pagination: React.FC<PaginationProps> = ({ next, previous }) => {
  return (
    <div className='flex mt-8 text-light'>
      {next && (
        <div className=' w-5/12 bg-gradient-to-l from-white/0 via-white/0 to-white/10 p-4'>
          <Link href={next.href}>
            <a className='flex flex-col items-start'>
              <BsArrowLeft />
              {next.label}
            </a>
          </Link>
        </div>
      )}

      {previous && (
        <div className='w-5/12 ml-auto bg-gradient-to-r from-white/0 via-white/0 to-white/10 p-4'>
          <Link href={previous.href}>
            <a className='flex flex-col items-end'>
              <BsArrowRight />
              {previous.label}
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Pagination;
