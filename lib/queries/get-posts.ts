import { gql } from 'graphql-request';

const getPosts = gql`
  fragment PostView on Post {
    id
    slug
    title
    description
    publishedAt
    excerpt
    categories {
      id
      name
      slug
    }
    series {
      id
      title
      slug
    }
  }

  fragment PageView on PageInfo {
    hasNextPage
    hasPreviousPage
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
          ...PostView
        }
      }
      pageInfo {
        ...PageView
      }
    }
  }
`;

export { getPosts };
