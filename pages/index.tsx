import { Transition } from '@headlessui/react';
import { useUI } from 'components/context';
import Header from 'components/header';
import Navbar from 'components/navbar';
import Pagination from 'components/pagination';
import PostCard from 'components/post';
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { getPosts } from 'services/posts';

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts, page, pageInfo }) => {
  const { state } = useUI();

  const next = pageInfo.hasNextPage
    ? { href: { query: { page: page + 1 } }, label: 'Older Posts' }
    : null;

  const previous = pageInfo.hasPreviousPage
    ? { href: { query: { page: page - 1 } }, label: 'Newer Posts' }
    : null;

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

      <Transition
        show={state.show}
        enter='transition-all duration-300'
        enterFrom='fixed w-full top-0 left-0 opacity-0 scale-75'
        enterTo='fixed w-full top-0 left-0  opacity-1 scale-100'
        leave='transition-all duration-300'
        leaveFrom='fixed w-full top-0 left-0  opacity-1 scale-100'
        leaveTo='fixed w-full top-0 left-0  opacity-0 scale-90'>
        <Navbar />
      </Transition>

      <main className='space-y-8 mt-8'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>

      <Pagination next={next} previous={previous} />
    </Fragment>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const page = Number(context.query.page) || 1;

  const { posts, pageInfo } = await getPosts(page);

  return {
    props: {
      posts,
      page,
      pageInfo,
    },
  };
};
