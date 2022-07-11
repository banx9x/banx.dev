import Link from 'next/link';
import React from 'react';
import { PostFragment } from 'generated/graphql';
import { locale } from 'lib/utils';

interface PostCardProps {
  post: PostFragment;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className='block'>
        <article>
          <div className='w-full rounded-lg bg-white/5 hover:bg-white/10 transition duration-200 shadow-lg p-4'>
            <h2 className='text-rose-100 font-medium text-lg'>{post.title}</h2>

            <div className='flex flex-col item-start sm:flex-row sm:items-center sm:space-x-2 text-md text-rose-100/50 mb-2'>
              <div>{locale(post.publishedAt)}</div>

              {post.categories.length > 0 && (
                <div className='hidden sm:block'>·</div>
              )}

              <div className='flex space-x-2'>
                {post.categories.map(({ id, name, slug }) => (
                  <div key={id}>{name}</div>
                ))}
              </div>
            </div>

            <p className='text-rose-100/80 text-lg leading-relaxed'>
              {post.excerpt}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
