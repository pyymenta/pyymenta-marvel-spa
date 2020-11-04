import React, { useEffect, useState } from 'react';
import './index.css';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import HeroCounter from '../../components/HeroCounter';
import OrderAction from '../../components/OrderAction';
import Toggle from '../../components/Toggle';
import HeroItem from '../../components/HeroItem';
import { getCharacters } from '../../services/characters';
import { isFavorite, add, remove } from '../../services/favorite';

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [heroesToShow, setHeroesToShow] = useState([]);
  const [heroesCount, setHeroesCount] = useState(0);
  const [heroesOrdering, setHeroesOrdering] = useState({ reverse: false });
  const [searchDebounce, setSearchDebounce] = useState();

  const handleHeroesOrdering = () => {
    const alphabetical = (heroA, heroB) =>
      heroA.heroName === heroB.heroName
        ? 0
        : +(heroA.heroName > heroB.heroName) || -1;
    const reverse = (heroA, heroB) =>
      heroA.heroName === heroB.heroName
        ? 0
        : +(heroA.heroName < heroB.heroName) || -1;

    setHeroesToShow(
      heroesOrdering.reverse ? heroes.sort(reverse) : heroes.sort(alphabetical)
    );
    setHeroesOrdering({ reverse: !heroesOrdering.reverse });
  };

  const handleSearch = (event) => {
    clearTimeout(searchDebounce);

    const { value } = event.target || '';
    const filterByPattern = () => {
      if (!value.length) {
        return setHeroesToShow(heroes);
      }

      return setHeroesToShow(
        heroes.filter((hero) => hero.heroName.match(new RegExp(value, 'gi')))
      );
    };

    setSearchDebounce(setTimeout(filterByPattern, 500));
  };

  const handleFavoritePersistence = (heroId, isFavorited) => {
    const limitAvailable = isFavorited ? add(heroId) : remove(heroId);
    setHeroes(
      heroes.map((hero) =>
        hero.heroId === heroId ? { ...hero, isFavorite: isFavorited } : hero
      )
    );

    if (!limitAvailable) {
      // eslint-disable-next-line no-alert
      alert('Limite de favoritos atingido!');
    }

    return limitAvailable;
  };

  const handleFavoriteFilter = (active) => {
    const heroesFiltered = active
      ? heroesToShow.filter((hero) => isFavorite(hero.heroId))
      : [...heroes];

    setHeroesToShow(heroesFiltered);
  };

  useEffect(() => {
    getCharacters()
      .then((res) => {
        const characters = res.data.results.map((character) => ({
          heroId: character.id,
          heroName: character.name,
          heroImage: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          isFavorite: isFavorite(character.id),
        }));

        setHeroesCount(res.data.count);
        setHeroes(characters);
        setHeroesToShow(characters);
      })
      .catch(() => []);
  }, []);

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
          <HeroCounter heroCount={heroesCount} />
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
        {heroesToShow.map((hero) => (
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
