import { Categories } from 'components/categories';
import { PostMeta } from 'lib/posts';
import Link from 'next/link';
import React from 'react';
import moment from 'moment';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

const PostCard: React.FC<PostMeta> = ({
  title,
  excerpt,
  publishedAt,
  categories,
  slug,
}) => {
  const date = format(new Date(publishedAt), 'dd MMMM yyyy', { locale: vi });

  return (
    <Link href={`/posts/${slug}`}>
      <a className='block'>
        <article>
          <div className='w-full rounded-lg bg-white/5 hover:bg-white/10 transition duration-200 shadow-lg p-4'>
            <h2 className='text-rose-100 font-medium text-lg'>{title}</h2>

            <div className='flex items-center space-x-2 text-md text-rose-100/50 mb-2'>
              <div>{date}</div>

              {categories.length > 0 && (
                <div className='hidden sm:block'>·</div>
              )}

              {categories.map((category) => (
                <div key={category}>{category}</div>
              ))}
            </div>

            <p className='text-rose-100/80 text-lg leading-relaxed'>
              {excerpt}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
