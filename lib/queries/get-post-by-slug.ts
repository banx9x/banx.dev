import { gql } from 'graphql-request';

const getPostBySlug = gql`
  query post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      description
      publishedAt
      image {
        url(transformation: { image: { resize: { height: 630, width: 1200 } } })
      }
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
      excerpt
      content
    }
  }
`;

export { getPostBySlug };
