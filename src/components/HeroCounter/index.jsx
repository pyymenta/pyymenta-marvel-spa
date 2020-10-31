import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const HeroCounter = ({ heroCount }) => {
  const isPlural = heroCount !== 1;
  const text = `Encontrado${isPlural ? 's' : ''} ${heroCount} herói${
    isPlural ? 's' : ''
  }`;
  const notFoundText = 'Não foram encontrado heróis';

  return <span className='heroCounter'>{heroCount ? text : notFoundText}</span>;
};

HeroCounter.defaultProps = {
  heroCount: 3,
};

HeroCounter.propTypes = {
  heroCount: PropTypes.number,
};

export default HeroCounter;
