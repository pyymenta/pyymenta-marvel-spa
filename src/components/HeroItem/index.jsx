import React from 'react';
import PropTypes from 'prop-types';
import Favorite from '../Favorite';
import './index.css';

const HeroItem = ({ heroId, heroImage, heroName, isFavorite }) => {
  return (
    <div className='hero-item'>
      <a className='hero-item-link' href={`/hero/${heroId}`}>
        <img className='hero-item__image' src={heroImage} alt={heroName} />
        <div className='hero-item__info-wrapper'>
          <span className='hero-item__name'>{heroName}</span>
          <Favorite isFavorite={isFavorite} />
        </div>
      </a>
    </div>
  );
};

HeroItem.defaultProps = {
  heroId: 0,
  heroName: '',
  heroImage: '',
  isFavorite: false,
};

HeroItem.propTypes = {
  heroId: PropTypes.number,
  heroName: PropTypes.string,
  heroImage: PropTypes.string,
  isFavorite: PropTypes.bool,
};

export default HeroItem;
