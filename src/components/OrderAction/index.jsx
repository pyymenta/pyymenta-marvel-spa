import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import heart from './full-heart.svg';
import hero from './hero.svg';

const OrderAction = ({ type, text }) => (
  <div className='action-wrapper'>
    <img src={type === 'hero' ? hero : heart} alt={text} />
    <span>{text}</span>
  </div>
);

OrderAction.defaultProps = {
  type: 'hero',
  text: '',
};

OrderAction.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default OrderAction;
