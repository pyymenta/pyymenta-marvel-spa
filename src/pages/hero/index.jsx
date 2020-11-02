import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchInput from '../../components/SearchInput';
import HeroDetails from '../../components/HeroDetails';
import HeroReleaseItem from '../../components/HeroReleaseItem';
import './index.css';

const Hero = () => (
  <main className='hero-details-page' role='main'>
    <Header classList='hero-details-header' logoImageWidth={200}>
      <SearchInput />
    </Header>
    <HeroDetails heroName='Huck' />
    <div className='last-releases'>
      <span className='last-releases__title'>Últimos lançamentos</span>
      <HeroReleaseItem />
    </div>
    <Footer />
  </main>
);

export default Hero;
