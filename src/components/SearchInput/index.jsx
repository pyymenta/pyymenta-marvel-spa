import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from './search.svg';
import './index.css';

const SearchInput = ({ searchType, onSearchInput }) => (
  <div className={`search-wrapper search-wrapper--${searchType}`}>
    <img src={searchIcon} alt='Imagem de lupa' />
    <input
      onChange={onSearchInput}
      className='search-bar'
      type='search'
      name='searchHero'
      id='searchHero'
    />
  </div>
);

SearchInput.defaultProps = {
  searchType: 'default',
  onSearchInput: () => {},
};

SearchInput.propTypes = {
  searchType: PropTypes.string,
  onSearchInput: PropTypes.func,
};

export default SearchInput;
