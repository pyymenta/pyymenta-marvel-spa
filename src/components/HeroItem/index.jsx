import React from 'react';
import PropTypes from 'prop-types';
import Favorite from '../Favorite';
import './index.css';

const HeroItem = ({ heroImage, heroName, isFavorite }) => {
  return (
    <div className='hero-item'>
      <img className='hero-item__image' src={heroImage} alt={heroName} />
      <div className='hero-item__info-wrapper'>
        <span className='hero-item__name'>${heroName}</span>
        <Favorite isFavorite={isFavorite} />
      </div>
    </div>
  );
};

HeroItem.defaultProps = {
  heroName: '',
  heroImage: '',
  isFavorite: false,
};

HeroItem.propTypes = {
  heroName: PropTypes.string,
  heroImage: PropTypes.string,
  isFavorite: PropTypes.bool,
};

export default HeroItem;
