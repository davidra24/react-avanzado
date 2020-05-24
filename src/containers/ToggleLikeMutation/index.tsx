import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const MUTATION_LIKE = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={MUTATION_LIKE}>{children}</Mutation>;
};
