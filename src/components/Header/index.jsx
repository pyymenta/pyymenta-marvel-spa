import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import logo from './logo.svg';

const Header = ({ children }) => (
  <header>
    <img src={logo} alt='Marvel Logo' />
    {children}
  </header>
);

Header.defaultProps = {
  children: React.createElement('div'),
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
