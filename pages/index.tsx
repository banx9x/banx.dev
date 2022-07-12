import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { getPosts } from 'services/posts';
import Header from 'components/header';
import Navbar from 'components/navbar';
import PostCard from 'components/post';
import { Fragment } from 'react';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Fragment>
      <Head>
        <meta
          name='description'
          content='Một chiếc blog công nghệ nhỏ của Ba Nguyễn'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Ba Nguyễn's Blog" />
        <meta
          property='og:description'
          content='Một chiếc blog công nghệ nhỏ của Ba Nguyễn'
        />
        <meta
          property='og:image'
          content='https://media.graphassets.com/6KfoJnRimPPxIuyO05bw'
        />
        <meta property='og:image:alt' content="Ba nguyễn's Blog" />
        <meta property='og:url' content='https://banx.dev/' />
        <meta property='og:site_name' content="Ba Nguyễn's Blog" />
        <title>Ba Nguyễn&apos;s Blog</title>
      </Head>

      <Header />

      <Navbar />

      <main className='space-y-8 mt-8'>
        {posts.map((post) => (
          <PostCard key={post.node.id} post={post.node} />
        ))}
      </main>
    </Fragment>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { posts, pageInfo } = await getPosts();

  return {
    props: {
      posts,
      pageInfo,
    },

    revalidate: 600,
  };
};
