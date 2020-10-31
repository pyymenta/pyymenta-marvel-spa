import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from './search.svg';
import './index.css';

const SearchInput = ({ searchType }) => (
  <div className={`search-wrapper search-wrapper--${searchType}`}>
    <img src={searchIcon} alt='Imagem de lupa' />
    <input className='search-bar' type='search' name='searchHero' id='searchHero' />
  </div>
);

SearchInput.defaultProps = {
  searchType: 'default',
};

SearchInput.propTypes = {
  searchType: PropTypes.string,
};

export default SearchInput;
