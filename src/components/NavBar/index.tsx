import React from 'react';
import { Nav, Link } from './styles';
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md';

const SIZE = '30px';

export const NavBar = () => (
  <Nav>
    <Link to='/'>
      <MdHome size={SIZE} />
    </Link>
    <Link to='/favs'>
      <MdFavorite size={SIZE} />
    </Link>
    <Link to='/user'>
      <MdPerson size={SIZE} />
    </Link>
  </Nav>
);
