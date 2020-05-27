import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';

import { GlobalStyle } from '../styles/GlobalStyles';
import { Logo } from '../components/Logo';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NavBar } from '../components/NavBar';

import { User } from '../pages/User';
//import { Favs } from '../pages/Favs';
import { NotRegisterUser } from './NotRegisterUser';
import { NotFound } from '../pages/NotFound';

import { Context } from '../Context';

const Favs = React.lazy(() => import('../pages/Favs'));

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={'Cargando...'}>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <User path='/user' />
        <Favs path='/favs' />
        <NotFound default />
      </Router>
      <NavBar />
    </Suspense>
  );
};
