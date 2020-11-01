import React from 'react';
import PropTypes from 'prop-types';
import Favorite from '../Favorite';
import Rating from '../Rating';
import comicsBooksImage from './book.svg';
import videoImage from './video.svg';
import './index.css';

const HeroDetails = ({
  isFavorite,
  heroName,
  heroDescription,
  comicsBooks,
  movies,
  ratingValue,
  lastComicDate,
  heroImage,
}) => {
  return (
    <section className='hero-details'>
      <div className='hero-details__wrapper'>
        <div className='hero-info'>
          <div className='hero-info__row'>
            <span className='hero-info__name'>{heroName}</span>
            <Favorite isFavorite={isFavorite} />
          </div>
          <div className='hero-info__row'>
            <div className='hero-info__description'>{heroDescription}</div>
          </div>
          <div className='hero-info__row'>
            <div className='hero-info__comics-wrapper'>
              <span className='hero-info__text hero-info__comics-title'>
                Quadrinhos
              </span>
              <img src={comicsBooksImage} alt='Quadrinhos' />
              <span className='hero-info__comics hero-info__text'>
                {comicsBooks}
              </span>
            </div>
            <div className='hero-info__movies-wrapper'>
              <span className='hero-info__text hero-info__movies-title'>Filmes</span>
              <img src={videoImage} alt='Filmes' />
              <span className='hero-info__movies hero-info__text'>{movies}</span>
            </div>
          </div>
          <div className='hero-info__row hero-info__rating-wrapper'>
            <span className='hero-info__text hero-info__rating-title'>Rating:</span>
            <Rating ratingValue={ratingValue} />
          </div>
          <div className='hero-info__row hero-info__last-comic-wrapper'>
            <span className='hero-info__text hero-info__last-comic-title'>
              Último quadrinho:
            </span>
            <span className='hero-info__last-comic-date hero-info__text'>
              {lastComicDate}
            </span>
          </div>
        </div>
        <div className='hero-image'>
          <img src={heroImage} alt='Imagem do herói' />
        </div>
      </div>
      <div className='character-name-background'>{heroName}</div>
    </section>
  );
};

HeroDetails.defaultProps = {
  isFavorite: false,
  heroName: '',
  heroDescription: '',
  comicsBooks: 0,
  movies: 0,
  ratingValue: 5,
  lastComicDate: '',
  heroImage: '',
};

HeroDetails.propTypes = {
  isFavorite: PropTypes.bool,
  heroName: PropTypes.string,
  heroDescription: PropTypes.string,
  comicsBooks: PropTypes.number,
  movies: PropTypes.number,
  ratingValue: PropTypes.number,
  lastComicDate: PropTypes.string,
  heroImage: PropTypes.string,
};

export default HeroDetails;
