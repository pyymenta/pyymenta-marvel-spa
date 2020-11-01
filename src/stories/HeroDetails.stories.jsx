import React from 'react';
import HeroDetails from '../components/HeroDetails';
import '../styles/index.css';

export default {
  title: 'Example/HeroDetails',
  component: HeroDetails,
};

const divStyle = {
  width: '90%',
};

const Template = (props) => (
  <div style={divStyle}>
    <HeroDetails {...props} />
  </div>
);

export const Hero = Template.bind({});
Hero.args = {
  heroName: '3-D Man',
  heroImage: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  isStarred: false,
};
