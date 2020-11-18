import React, { useState, useEffect, useReducer } from 'react';
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
  const [searchDebounce, setSearchDebounce] = useState();
  const initialCharactersState = {
    characters: [],
    totalCharacters: 0,
    heroesOrdering: {
      reverse: false,
    },
  };

  const [charactersState, dispatch] = useReducer((reduceState, action) => {
    switch (action.type) {
      case 'FETCHED':
      case 'FILTER_FAVORITES':
      case 'SEARCH_FILTERED':
      case 'SEARCH_EMPTY_FIELD':
        return {
          ...initialCharactersState,
          characters: action.characters,
          totalCharacters: action.totalCharacters,
        };
      case 'ORDER_ALPHABETICAL':
      case 'ORDER_REVERSE':
        return {
          ...initialCharactersState,
          characters: action.characters,
          totalCharacters: action.totalCharacters,
          heroesOrdering: action.heroesOrdering,
        };
      default:
        return reduceState;
    }
  }, initialCharactersState);

  useEffect(() => {
    if (status === 'FETCHED') {
      const { characters, heroesCount } = data;

      dispatch({ type: status, characters, totalCharacters: heroesCount });
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

    if (charactersState.heroesOrdering.reverse) {
      dispatch({
        type: 'ORDER_ALPHABETICAL',
        characters: characters.sort(alphabetical),
        totalCharacters: characters.length,
        heroesOrdering: {
          reverse: !charactersState.heroesOrdering.reverse,
        },
      });

      return;
    }

    dispatch({
      type: 'ORDER_REVERSE',
      characters: characters.sort(reverse),
      totalCharacters: characters.length,
      heroesOrdering: {
        reverse: !charactersState.heroesOrdering.reverse,
      },
    });
  };

  const handleSearch = (event) => {
    clearTimeout(searchDebounce);

    const { value } = event.target || '';
    const { characters, heroesCount } = data;

    const filterByPattern = () => {
      if (!value.length) {
        dispatch({
          type: 'SEARCH_EMPTY_FIELD',
          characters,
          totalCharacters: heroesCount,
        });

        return;
      }
      const filteredCharacters = characters.filter((hero) =>
        hero.heroName.match(new RegExp(value, 'gi'))
      );

      dispatch({
        type: 'SEARCH_FILTERED',
        characters: filteredCharacters,
        totalCharacters: filteredCharacters.length,
      });
    };

    setSearchDebounce(setTimeout(filterByPattern, 500));
  };

  const handleFavoritePersistence = (heroId, isFavorited) => {
    const limitAvailable = isFavorited ? add(heroId) : remove(heroId);
    const { characters, heroesCount } = data;

    dispatch({
      type: 'FILTER_FAVORITES',
      characters: characters.map((hero) =>
        hero.heroId === heroId ? { ...hero, isFavorite: isFavorited } : hero
      ),
      totalCharacters: heroesCount,
    });

    if (!limitAvailable) {
      alert('Limite de favoritos atingido!');
    }
  };

  const handleFavoriteFilter = (active) => {
    const { characters } = data;
    const heroesFiltered = active
      ? characters.filter((hero) => isFavorite(hero.heroId))
      : [...characters];

    dispatch({
      type: 'FILTER_FAVORITES',
      characters: heroesFiltered,
      totalCharacters: heroesFiltered.length,
    });
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
          <HeroCounter heroCount={charactersState.totalCharacters} />
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
          charactersState.characters.map((hero) => (
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
