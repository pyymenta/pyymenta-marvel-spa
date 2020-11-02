import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import logo from './logo.svg';

const Header = ({ classList, children, logoImageWidth }) => (
  <header className={classList}>
    <img width={logoImageWidth} src={logo} alt='Marvel Logo' />
    {children}
  </header>
);

Header.defaultProps = {
  children: React.createElement('div'),
  logoImageWidth: 500,
  classList: '',
};

Header.propTypes = {
  children: PropTypes.node,
  logoImageWidth: PropTypes.number,
  classList: PropTypes.string,
};

export default Header;
