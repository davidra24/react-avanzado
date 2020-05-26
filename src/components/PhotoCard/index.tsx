import React from 'react';
import { Link } from '@reach/router';
import { ImgWrapper, Img, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavoriteButton } from '../FavoriteButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({
  id,
  liked = false,
  likes = 0,
  src = DEFAULT_IMAGE,
}) => {
  const [show, element] = useNearScreen();

  return (
    //Almacena la referencia del elemento
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({ variables: { input: { id } } });
              };

              return (
                <FavoriteButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};
