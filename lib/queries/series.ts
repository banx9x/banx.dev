import { gql } from 'graphql-request';

export const series = gql`
  fragment SeriesView on Series {
    id
    slug
    title
  }
`;

export const getSeries = gql`
  query series {
    listSeriesConnection {
      edges {
        node {
          ...SeriesView
        }
      }
    }
  }
`;
