import type {
  GetServerSideProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { getPosts } from 'services/posts';
import Header from 'components/header';
import Navbar from 'components/navbar';
import PostCard from 'components/post';
import Pagination from 'components/pagination';
import { Fragment } from 'react';
import { ParsedUrlQuery } from 'querystring';

const Home: NextPage<InferGetStaticPropsType<typeof getServerSideProps>> = ({
  posts,
  pageInfo,
}) => {
  console.log(pageInfo);

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

      <main className='space-y-8 mt-8'>
        {posts.map((post) => (
          <PostCard key={post.node.id} post={post.node} />
        ))}
      </main>

      <Pagination {...pageInfo} currentPage={1} />
    </Fragment>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const { posts, pageInfo } = await getPosts();

//   return {
//     props: {
//       posts,
//       pageInfo,
//     },

//     revalidate: 600,
//   };
// };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = ctx.query.page ? +ctx.query.page : 1;

  const skip = (page - 1) * 3;

  const { posts, pageInfo } = await getPosts({ skip });

  if (posts.length == 0)
    return {
      notFound: true,
    };

  return {
    props: {
      posts,
      pageInfo,
    },
  };
};
