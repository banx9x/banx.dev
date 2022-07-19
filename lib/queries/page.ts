import { gql } from 'graphql-request';

export const pageView = gql`
  fragment PageView on PageInfo {
    hasNextPage
    hasPreviousPage
  }
`;
