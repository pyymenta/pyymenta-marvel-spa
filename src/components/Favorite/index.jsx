import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import fullHeart from './full-heart.svg';
import emptyHeart from './empty-heart.svg';

const Favorite = ({ isFavorite, handleFavoritePersistence, itemId }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavorite = () => {
    const shouldSetFavorite = handleFavoritePersistence(itemId, !favorite);

    if (!shouldSetFavorite) {
      return;
    }

    setFavorite(!favorite);
  };

  return (
    <img
      className='favorite'
      onClick={handleFavorite}
      src={favorite ? fullHeart : emptyHeart}
      alt='Favoritar ou desfavoritar herói'
      role='presentation'
    />
  );
};

Favorite.defaultProps = {
  isFavorite: false,
  handleFavoritePersistence: () => true,
  itemId: 0,
};

Favorite.propTypes = {
  isFavorite: PropTypes.bool,
  handleFavoritePersistence: PropTypes.func,
  itemId: PropTypes.number,
};

export default Favorite;
