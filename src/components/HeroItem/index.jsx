import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import fullHeart from './full-heart.svg';
import emptyHeart from './empty-heart.svg';

const HeroItem = ({ heroImage, heroName, isStarred }) => {
  const [starred, setStarred] = useState(isStarred);

  const handleStarred = () => {
    setStarred(!starred);
  };

  return (
    <div className='hero-item'>
      <img className='hero-item__image' src={heroImage} alt={heroName} />
      <div className='hero-item__info-wrapper'>
        <span className='hero-item__name'>${heroName}</span>
        <img
          className='hero-item__starred'
          onClick={handleStarred}
          src={starred ? fullHeart : emptyHeart}
          alt='Favoritar ou desfavoritar herói'
          role='presentation'
        />
      </div>
    </div>
  );
};

HeroItem.defaultProps = {
  heroName: '',
  heroImage: '',
  isStarred: false,
};

HeroItem.propTypes = {
  heroName: PropTypes.string,
  heroImage: PropTypes.string,
  isStarred: PropTypes.bool,
};

export default HeroItem;
