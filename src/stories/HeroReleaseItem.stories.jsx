import React from 'react';
import HeroReleaseItem from '../components/HeroReleaseItem';
import '../styles/index.css';

export default {
  title: 'Components/HeroReleaseItem',
  component: HeroReleaseItem,
};

const divStyle = {
  width: '90%',
};

const Template = (props) => (
  <div style={divStyle}>
    <HeroReleaseItem {...props} />
  </div>
);

export const Hero = Template.bind({});
Hero.args = {
  heroName: '3-D Man',
  heroImage: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
};
