import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import fullHeart from './full-heart.svg';
import emptyHeart from './empty-heart.svg';

const Favorite = ({ isFavorite }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavorite = () => {
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
};

Favorite.propTypes = {
  isFavorite: PropTypes.bool,
};

export default Favorite;
