import React from 'react';
import HeroCounter from '../components/HeroCounter';
import '../styles/index.css';

export default {
  title: 'Components/HeroCounter',
  component: HeroCounter,
};

const divStyle = {
  width: '100%',
};

const Template = (props) => (
  <div style={divStyle}>
    <HeroCounter {...props} />
  </div>
);

export const SingularHero = Template.bind({});
SingularHero.args = {
  heroCount: 1,
};

export const PluralHero = Template.bind({});
PluralHero.args = {
  heroCount: 3,
};
export const HeroNotFound = Template.bind({});
HeroNotFound.args = {
  heroCount: 0,
};
