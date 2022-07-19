import { gql } from 'graphql-request';

export const category = gql`
  fragment CategoryView on Category {
    id
    slug
    name
  }
`;

export const getCategories = gql`
  query categories {
    categoriesConnection {
      edges {
        node {
          ...CategoryView
        }
      }
    }
  }
`;
