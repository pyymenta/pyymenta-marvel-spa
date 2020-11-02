import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const HeroItem = ({ heroImage, heroName }) => {
  return (
    <div className='hero--release-item'>
      <img className='hero--release-item__image' src={heroImage} alt={heroName} />
      <div className='hero--release-item__info-wrapper'>
        <span className='hero--release-item__name'>{heroName}</span>
      </div>
    </div>
  );
};

HeroItem.defaultProps = {
  heroName: '',
  heroImage: '',
};

HeroItem.propTypes = {
  heroName: PropTypes.string,
  heroImage: PropTypes.string,
};

export default HeroItem;
