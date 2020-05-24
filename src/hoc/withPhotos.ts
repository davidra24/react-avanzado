import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_PHTOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const withPhotos = graphql(GET_PHTOTOS);
