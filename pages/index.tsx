import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Header, PostCard } from 'components';
import { getSortedPosts } from 'lib/posts';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className=''>
      <Head>
        <title>Ba Nguyễn's Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='space-y-8'>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </main>

      <footer className=''></footer>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
};
