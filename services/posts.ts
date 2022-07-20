import { PageViewFragment, PostViewFragment } from 'generated/graphql';
import { POST_PER_PAGE } from 'lib/constants';
import sdk from 'services';

export const getPosts = async (page: number) => {
  const skip = (page - 1) * POST_PER_PAGE;

  try {
    const result = await sdk.posts({ perPage: POST_PER_PAGE, skip });
    return {
      posts: result.postsConnection.edges.map((edge) => ({ ...edge.node })),
      pageInfo: result.postsConnection.pageInfo,
    };
  } catch (err) {
    console.log(err);

    return {
      posts: [] as PostViewFragment[],
      pageInfo: {} as PageViewFragment,
    };
  }
};

export const getSlugs = async () => {
  try {
    const results = await sdk.slugs();
    return results.posts.map((post) => ({ params: post }));
  } catch (err) {
    console.log(err);

    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const results = await sdk.post({ slug });

    return results.post;
  } catch (err) {
    console.log(err);

    return null;
  }
};
