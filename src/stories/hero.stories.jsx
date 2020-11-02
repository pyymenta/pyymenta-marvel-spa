import React from 'react';

import Hero from '../pages/hero';

export default {
  title: 'Pages/Hero',
  component: Hero,
};

const divStyle = {
  width: '90%',
};

const Template = (props) => (
  <div style={divStyle}>
    <Hero {...props} />
  </div>
);

export const Default = Template.bind({});
