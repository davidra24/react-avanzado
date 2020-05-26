import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListOfFavorites } from '../../components/ListOfFavorites';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;
const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>loading</p>;
  if (error) return <p>Error!</p>;

  const { favs } = data;

  return <ListOfFavorites favs={favs} />;
};

export const GetFavorites = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
);
