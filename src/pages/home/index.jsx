import React, { useState, useEffect } from 'react';
import './index.css';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import HeroCounter from '../../components/HeroCounter';
import OrderAction from '../../components/OrderAction';
import Toggle from '../../components/Toggle';
import HeroItem from '../../components/HeroItem';
import { isFavorite, add, remove } from '../../services/favorite';
import useCharacters from '../../hooks/useCharacters';

const Home = () => {
  const { status, data, error } = useCharacters();
  const [heroesToShow, setHeroesToShow] = useState([]);
  const [heroesOrdering, setHeroesOrdering] = useState({ reverse: false });
  const [searchDebounce, setSearchDebounce] = useState();

  useEffect(() => {
    if (status === 'FETCHED') {
      setHeroesToShow(data.characters);
    }
  }, [status, data]);

  const handleHeroesOrdering = () => {
    const alphabetical = (heroA, heroB) =>
      heroA.heroName === heroB.heroName
        ? 0
        : +(heroA.heroName > heroB.heroName) || -1;
    const reverse = (heroA, heroB) =>
      heroA.heroName === heroB.heroName
        ? 0
        : +(heroA.heroName < heroB.heroName) || -1;

    const { characters } = data;

    setHeroesToShow(
      heroesOrdering.reverse
        ? characters.sort(reverse)
        : characters.sort(alphabetical)
    );
    setHeroesOrdering({ reverse: !heroesOrdering.reverse });
  };

  const handleSearch = (event) => {
    clearTimeout(searchDebounce);

    const { value } = event.target || '';
    const { characters } = data;

    const filterByPattern = () => {
      if (!value.length) {
        return setHeroesToShow(characters);
      }

      return setHeroesToShow(
        characters.filter((hero) => hero.heroName.match(new RegExp(value, 'gi')))
      );
    };

    setSearchDebounce(setTimeout(filterByPattern, 500));
  };

  const handleFavoritePersistence = (heroId, isFavorited) => {
    const limitAvailable = isFavorited ? add(heroId) : remove(heroId);
    const { characters } = data;

    setHeroesToShow(
      characters.map((hero) =>
        hero.heroId === heroId ? { ...hero, isFavorite: isFavorited } : hero
      )
    );

    if (!limitAvailable) {
      alert('Limite de favoritos atingido!');
    }

    return limitAvailable;
  };

  const handleFavoriteFilter = (active) => {
    const { characters } = data;
    const heroesFiltered = active
      ? heroesToShow.filter((hero) => isFavorite(hero.heroId))
      : [...characters];

    setHeroesToShow(heroesFiltered);
  };

  return (
    <main className='home' role='main'>
      <Header>
        <h1>Explore o Universo</h1>
        <h2>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você
          ama - e aqueles que você descobrirá em breve!
        </h2>
      </Header>

      <div className='searchbar-wrapper'>
        <SearchInput searchType='brand' onSearchInput={handleSearch} />
      </div>

      <div className='actions-wrapper'>
        <div className='hero-count-wrapper'>
          <HeroCounter heroCount={data.heroesCount} />
        </div>
        <div className='order-action-wrapper'>
          <OrderAction
            type='hero'
            handleAction={handleHeroesOrdering}
            text='Ordenar por nome - A/Z'
          />
          <div className='starred-wrapper'>
            <Toggle handleToggle={handleFavoriteFilter} />
            <OrderAction type='heart' text='Somente favoritos' />
          </div>
        </div>
      </div>

      <section className='heroes-wrapper'>
        {status === null && (
          <div> Lets get started by searching for an article! </div>
        )}
        {status === 'ERROR' && <div>{error}</div>}
        {status === 'FETCHING' && <div className='loading'>Carregando Heróis</div>}
        {status === 'FETCHED' &&
          heroesToShow.map((hero) => (
            <div key={hero.heroId} className='hero-item-wrapper'>
              <HeroItem
                {...hero}
                handleFavoritePersistence={handleFavoritePersistence}
              />
            </div>
          ))}
      </section>
    </main>
  );
};

export default Home;
