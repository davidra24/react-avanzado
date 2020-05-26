import React from 'react';
import { LinkRouter, Image } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, path = '', emoji = '?' }) => (
  <LinkRouter to={path}>
    <Image src={cover} alt='cover' />
    {emoji}
  </LinkRouter>
);
