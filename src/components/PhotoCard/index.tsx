import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavoriteButton } from '../FavoriteButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLike] = useLocalStorage(key, false);

  return (
    //Almacena la referencia del elemento
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                !liked && toggleLike({ variables: { input: { id } } });
                setLike(!liked);
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
