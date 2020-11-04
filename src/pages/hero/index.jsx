import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/characters';
import getComicsByCharacterId from '../../services/comics';
import { isFavorite, add, remove } from '../../services/favorite';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import HeroDetails from '../../components/HeroDetails';
import HeroReleaseItem from '../../components/HeroReleaseItem';
import './index.css';

const Hero = () => {
  const history = useHistory();
  const { id } = useParams();
  const [heroData, setHeroData] = useState({});
  const [heroComics, setHeroComics] = useState([]);

  useEffect(() => {
    const fetchData = async (characterId) => {
      const heroResult = await getCharacterById(characterId);
      const comicsResult = await getComicsByCharacterId(characterId);
      const hero =
        heroResult.data.results.map((character) => ({
          heroId: character.id,
          heroName: character.name,
          heroDescription: character.description,
          comicsBooks: character.comics.available,
          comics: character.comics,
          movies: character.series.available,
          ratingValue: 5,
          heroImage: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          lastComicDate: character.modified,
          isFavorite: isFavorite(character.id),
        }))[0] || {};
      const comics = comicsResult.data.results.map((comic) => ({
        id: comic.id,
        heroName: comic.title,
        heroImage: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        modifiedDate: new Date(
          comic.dates?.find((date) => date.type === 'onsaleDate')?.date
        ).toString(),
      }));

      setHeroComics(comics);
      setHeroData({
        ...hero,
        lastComicDate: comics[comics.length - 1]?.modifiedDate,
      });
    };

    fetchData(id);
  }, [id]);

  const redirectToHome = () => {
    if (!history) {
      return;
    }

    history.replace('/');
  };

  const handleFavoritePersistence = (heroId, isFavorited) => {
    const limitAvailable = isFavorited ? add(heroId) : remove(heroId);
    setHeroData({ ...heroData, isFavorite: isFavorited });

    if (!limitAvailable) {
      // eslint-disable-next-line no-alert
      alert('Limite de favoritos atingido!');
    }

    return limitAvailable;
  };

  return (
    <main className={`hero-details-page ${id}`} role='main'>
      <Header classList='hero-details-header' logoImageWidth={200}>
        <SearchInput onSearchInput={redirectToHome} />
      </Header>
      <HeroDetails
        {...heroData}
        handleFavoritePersistence={handleFavoritePersistence}
      />
      <div className='last-releases'>
        <span className='last-releases__title'>Últimos lançamentos</span>
        <div className='releases-wrapper'>
          {heroComics.map((heroComic) => (
            <HeroReleaseItem key={heroComic.id} {...heroComic} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
