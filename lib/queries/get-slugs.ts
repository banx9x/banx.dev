import { gql } from 'graphql-request';

const getSlugs = gql`
  query slugs {
    posts {
      slug
    }
  }
`;

export { getSlugs };
