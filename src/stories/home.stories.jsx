import React from 'react';

import Home from '../pages/home';

export default {
  title: 'Pages/Home',
  component: Home,
};

const divStyle = {
  width: '90%',
};

const Template = (props) => (
  <div style={divStyle}>
    <Home {...props} />
  </div>
);

export const Default = Template.bind({});
