import Link from 'next/link';
import React from 'react';

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className='flex items-center space-x-2'>
      {categories.map((category) => (
        <Link key={category} href={`/categories/${category}`}>
          <a className='inline-block'>
            <div className='hover:bg-white/[3%] p-2'>
              {category.toUpperCase()}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
