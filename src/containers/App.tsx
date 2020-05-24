import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Logo } from '../components/Logo';
import { ListOfPhotoCards } from './ListOfPhotoCards';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <>
          <PhotoCardWithQuery id={detailId} />
        </>
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </>
      )}
    </>
  );
};