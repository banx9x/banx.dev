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

  query posts($skip: Int) {
    postsConnection(
      stage: PUBLISHED
      orderBy: publishedAt_DESC
      first: 3
      skip: $skip
    ) {
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
