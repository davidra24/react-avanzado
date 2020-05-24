import React from 'react';
import { PhotoCard } from '../../components/PhotoCard';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      likes
      userId
      liked
      src
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <h1>cargando</h1>;
  if (error) return <p>error</p>;
  const { photo = {} } = data;
  console.log('photo', photo);

  return <PhotoCard {...photo} />;
};

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
);
