import React from 'react';
import Favorite from '../components/Favorite';
import '../styles/index.css';

export default {
  title: 'Components/Favorite',
  component: Favorite,
};

const divStyle = {
  width: '90%',
};

const Template = (props) => (
  <div style={divStyle}>
    <Favorite {...props} />
  </div>
);

export const FavoriteWrapper = Template.bind({});
FavoriteWrapper.args = {
  isStarred: false,
};
