import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../../components/ListOfCategories';
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards';
import { Layout } from '../../components/Layout';

const HomePage = ({ id }) => (
  <>
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  </>
);

export const Home = memo(
  HomePage,
  (prevProps, props) => prevProps === props.id
);
