import { POST_PER_PAGE } from 'lib/constants';
import sdk from 'services';

export const getPosts = async (page: number) => {
  const skip = (page - 1) * POST_PER_PAGE;
  const result = await sdk.posts({ perPage: POST_PER_PAGE, skip });

  return {
    posts: result.postsConnection.edges.map((edge) => ({ ...edge.node })),
    pageInfo: result.postsConnection.pageInfo,
  };
};

export const getSlugs = async () => {
  const results = await sdk.slugs();

  return results.posts.map((post) => ({ params: post }));
};

export const getPostBySlug = async (slug: string) => {
  const results = await sdk.post({ slug });

  return results.post;
};
