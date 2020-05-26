import React from 'react';
import { Router } from '@reach/router';

import { GlobalStyle } from '../styles/GlobalStyles';
import { Logo } from '../components/Logo';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NavBar } from '../components/NavBar';

import { User } from '../pages/User';
import { Favs } from '../pages/Favs';
import { NotRegisterUser } from '../pages/NotRegisterUser';

const UserLogged = ({ children }) => children({ isAuth: false });

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <User path='/user' />
              <Favs path='/favs' />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path='/favs' />
              <NotRegisterUser path='/user' />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </>
  );
};
