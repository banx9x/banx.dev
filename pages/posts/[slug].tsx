import Navbar from 'components/navbar';
import { PostQuery } from 'generated/graphql';
import { locale } from 'lib/utils';
import { parser } from 'lib/utils/parser';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { Fragment } from 'react';
import { getPostBySlug, getSlugs } from 'services/posts';

interface PostProps extends PostQuery {
  mdx: MDXRemoteSerializeResult;
}

const Post: React.FC<PostProps> = ({ post, mdx }) => {
  return (
    <Fragment>
      <Head>
        <meta name='description' content={post!.description} />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content={post!.title + " | Ba Nguyễn's Blog"}
        />
        <meta property='og:description' content={post!.description} />
        <meta property='og:image' content={post!.image.url} />
        <meta property='og:image:alt' content={post!.title} />
        <meta
          property='og:url'
          content={'https://banx.dev/posts/' + post!.slug}
        />
        <meta property='og:site_name' content="Ba Nguyễn's Blog" />
        <title>{post!.title} | Ba Nguyễn&apos;s Blog</title>
      </Head>

      <Navbar />

      <main className='pt-24'>
        <div className='px-2 mb-8'>
          <h1 className='text-6xl text-light mb-2'>{post!.title}</h1>

          <div className='flex flex-col sm:flex-row items-start sm:items-center text-dim sm:space-x-2 mb-2'>
            <div className='mr-1'>{locale(post!.publishedAt)}</div>

            {post!.categories.length > 0 && (
              <div className='hidden sm:block'>·</div>
            )}

            <div className='flex space-x-2'>
              {post!.categories.map(({ id, name, slug }) => (
                <Link key={id} href={`/categories/${slug}`}>
                  <a className='block hover:bg-white/10 transition duration-150 p-1'>
                    {name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className='text-lg leading-relaxed'>{post!.excerpt}</div>
        </div>

        <MDXRemote {...mdx}></MDXRemote>
      </main>
    </Fragment>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs();

  return {
    paths,
    fallback: 'blocking',
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const post = await getPostBySlug(slug);

  if (!post)
    return {
      notFound: true,
      revalidate: 600,
    };

  const mdx = await parser(post.content);

  return {
    props: {
      post,
      mdx,
    },

    revalidate: 600,
  };
};
