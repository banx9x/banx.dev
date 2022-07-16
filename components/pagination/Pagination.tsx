import { PageFragment } from 'generated/graphql';
import Router from 'next/router';
import Link from 'next/link';
import React from 'react';

interface PaginationProps extends PageFragment {
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  hasNextPage,
  hasPreviousPage,
  currentPage,
}) => {
  return (
    <div className='flex'>
      <div className='flex-1'>
        <Link
          href={{
            query: { page: currentPage + 1 },
          }}>
          <a>Previous</a>
        </Link>
      </div>
      <div className='flex-1'>
        <Link
          href={{
            query: { page: currentPage - 1 || '' },
          }}>
          <a>Next</a>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
