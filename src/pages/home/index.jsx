import React from 'react';
import './index.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import HeroCounter from '../../components/HeroCounter';
import OrderAction from '../../components/OrderAction';
import Toggle from '../../components/Toggle';
import HeroItem from '../../components/HeroItem';

const Home = () => (
  <main className='home' role='main'>
    <Header>
      <h1>Explore o Universo</h1>
      <h2>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que você
        ama - e aqueles que você descobrirá em breve!
      </h2>
    </Header>

    <div className='searchbar-wrapper'>
      <SearchInput searchType='brand' />
    </div>

    <div className='actions-wrapper'>
      <div className='hero-count-wrapper'>
        <HeroCounter heroCount={6} />
      </div>
      <div className='order-action-wrapper'>
        <OrderAction type='hero' text='Ordenar por nome - A/Z' />
        <div className='starred-wrapper'>
          <Toggle />
          <OrderAction type='heart' text='Somente favoritos' />
        </div>
      </div>
    </div>

    <section className='heroes-wrapper'>
      <div className='hero-item-wrapper'>
        <HeroItem
          heroName='3-D Man'
          heroImage='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
          isStarred={false}
        />
      </div>

      <div className='hero-item-wrapper'>
        <HeroItem
          heroName='3-D Man'
          heroImage='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
          isStarred={false}
        />
      </div>

      <div className='hero-item-wrapper'>
        <HeroItem
          heroName='3-D Man'
          heroImage='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
          isStarred={false}
        />
      </div>

      <div className='hero-item-wrapper'>
        <HeroItem
          heroName='3-D Man'
          heroImage='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
          isStarred={false}
        />
      </div>

      <div className='hero-item-wrapper'>
        <HeroItem
          heroName='3-D Man'
          heroImage='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
          isStarred={false}
        />
      </div>

      <div className='hero-item-wrapper'>
        <HeroItem
          heroName='3-D Man'
          heroImage='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'
          isStarred={false}
        />
      </div>
    </section>

    <Footer />
  </main>
);

export default Home;
