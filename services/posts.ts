import { PostsQueryVariables } from 'generated/graphql';
import sdk from 'services';

export const getPosts = async ({ skip }: PostsQueryVariables) => {
  const result = await sdk.posts({ skip });

  return {
    posts: result.postsConnection.edges,
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
