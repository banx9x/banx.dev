import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import PostCard from 'components/post';
import { getPosts } from 'services/posts';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className=''>
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
        <meta property='og:image' content='/images/blog.jpg' />
        <meta property='og:image:alt' content="Ba nguyễn's Blog" />
        <meta property='og:url' content='https://banx.dev/' />
        <meta property='og:site_name' content="Ba Nguyễn's Blog" />
        <title>Ba Nguyễn&apos;s Blog</title>
      </Head>

      <main className='space-y-8'>
        {posts.map((post) => (
          <PostCard key={post.node.id} post={post.node} />
        ))}
      </main>

      <footer className=''></footer>
    </div>
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
  };
};
