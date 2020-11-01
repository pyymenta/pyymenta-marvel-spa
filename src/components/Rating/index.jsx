import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import fullStar from './full-star.svg';
import emptyStar from './empty-star.svg';

const Rating = ({ ratingValue }) => {
  const ratingItems = [...Array(5)].map((item, index) => (
    <li key={`unique-${index * 2}`} className='rating-item'>
      <img
        src={ratingValue > index ? fullStar : emptyStar}
        alt='Icone de avaliação'
      />
    </li>
  ));

  return <ul className='rating-list'>{ratingItems}</ul>;
};

Rating.defaultProps = {
  ratingValue: 5,
};

Rating.propTypes = {
  ratingValue: PropTypes.number,
};

export default Rating;
