import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import { getPaths, getPostBySlug, PostMeta } from 'lib/posts';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { parser } from 'lib';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface PostProps {
  meta: PostMeta;
  mdx: MDXRemoteSerializeResult;
}

const Post: React.FC<PostProps> = ({ meta, mdx }) => {
  const date = format(new Date(meta.publishedAt), 'dd MMMM yyyy', {
    locale: vi,
  });

  return (
    <main className='text-white/80 text-lg'>
      <Head>
        <meta name='description' content={meta.description} />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content={meta.title + " | Ba Nguyễn's Blog"}
        />
        <meta property='og:description' content={meta.description} />
        <meta property='og:image' content={meta.image} />
        <meta property='og:image:alt' content={meta.title} />
        <meta
          property='og:url'
          content={'https://banx.dev/posts/' + meta.slug}
        />
        <meta property='og:site_name' content="Ba Nguyễn's Blog" />
        <title>{meta.title} | Ba Nguyễn&apos;s Blog</title>
      </Head>

      <div className='px-2 mb-8'>
        <h1 className='text-4xl text-rose-100 mb-2'>{meta.title}</h1>

        <div className='text-rose-100/60 flex space-x-2 items-center mb-2'>
          <div className='mr-1'>{date}</div>

          {meta.categories.length > 0 && <div>·</div>}

          <div className='flex space-x-1'>
            {meta.categories.map((category) => (
              <Link key={category} href={`/categories/${category}`}>
                <a className='block hover:bg-white/10 transition duration-150 py-1 px-2'>
                  {category}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className='text-lg leading-relaxed'>{meta.excerpt}</div>
      </div>

      <MDXRemote {...mdx}></MDXRemote>
    </main>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPaths();

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const { meta, content } = getPostBySlug(slug);

  const mdx = await parser(content);

  return {
    props: {
      meta,
      mdx,
    },
  };
};
