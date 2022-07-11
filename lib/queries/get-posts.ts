import { gql } from 'graphql-request';

const getPosts = gql`
  fragment Category on Category {
    id
    name
    slug
  }

  fragment Series on Series {
    id
    title
    slug
  }

  fragment Post on Post {
    id
    slug
    title
    description
    publishedAt
    excerpt
    categories {
      ...Category
    }
    series {
      ...Series
    }
  }

  query posts {
    postsConnection(stage: PUBLISHED, orderBy: publishedAt_DESC, first: 10) {
      edges {
        node {
          ...Post
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
    }
  }
`;

export { getPosts };
