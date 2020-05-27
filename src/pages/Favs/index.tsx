import React from 'react';
import { GetFavorites } from '../../containers/GetFavorites';
import { Layout } from '../../components/Layout';

export default () => {
  return (
    <>
      <Layout
        title='Tus favoritos'
        subtitle='Con Petgram puedes encontrar tus favoritos'
      >
        <GetFavorites />
      </Layout>
    </>
  );
};
