import React from 'react';
import HeroItem from '../components/HeroItem';
import '../styles/index.css';

export default {
  title: 'Components/HeroItem',
  component: HeroItem,
};

const divStyle = {
  width: '90%',
};

const Template = (props) => (
  <div style={divStyle}>
    <HeroItem {...props} />
  </div>
);

export const Hero = Template.bind({});
Hero.args = {
  heroName: '3-D Man',
  heroImage: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  isFavorite: false,
};
