import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from './search.svg';
import './index.css';

const SearchInput = ({ searchType, onSearchInput, placeHolder }) => (
  <div className={`search-wrapper search-wrapper--${searchType}`}>
    <img src={searchIcon} alt='Imagem de lupa' />
    <input
      onChange={onSearchInput}
      className='search-bar'
      type='search'
      name='searchHero'
      id='searchHero'
      placeholder={placeHolder}
    />
  </div>
);

SearchInput.defaultProps = {
  searchType: 'default',
  placeHolder: 'Procure por heróis',
  onSearchInput: () => {},
};

SearchInput.propTypes = {
  searchType: PropTypes.string,
  placeHolder: PropTypes.string,
  onSearchInput: PropTypes.func,
};

export default SearchInput;
