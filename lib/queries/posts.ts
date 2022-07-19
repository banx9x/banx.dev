import { gql } from 'graphql-request';

export const post = gql`
  fragment PostView on Post {
    id
    slug
    title
    description
    publishedAt
    excerpt
    categories {
      ...CategoryView
    }
    series {
      ...SeriesView
    }
  }
`;

export const getPosts = gql`
  query posts($perPage: Int = 5, $skip: Int = 0) {
    postsConnection(
      stage: PUBLISHED
      orderBy: publishedAt_DESC
      first: $perPage
      skip: $skip
    ) {
      edges {
        node {
          ...PostView
        }
      }
      pageInfo {
        ...PageView
      }
    }
  }
`;

export const slug = gql`
  fragment SlugView on Post {
    slug
  }
`;

export const getSlugs = gql`
  query slugs {
    posts {
      ...SlugView
    }
  }
`;

export const postContent = gql`
  fragment PostContent on Post {
    ...PostView
    image {
      url(transformation: { image: { resize: { height: 630, width: 1200 } } })
    }
    content
  }
`;

export const getPostBySlug = gql`
  query post($slug: String!) {
    post(where: { slug: $slug }) {
      ...PostContent
    }
  }
`;

export const totalPost = gql`
  query totalPosts {
    postsConnection {
      aggregate {
        count
      }
    }
  }
`;
