import React from 'react';
import Rating from '../components/Rating';
import '../styles/index.css';

export default {
  title: 'Example/Rating',
  component: Rating,
};

const divStyle = {
  width: '90%',
};

const Template = (props) => (
  <div style={divStyle}>
    <Rating {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ratingValue: 4,
};
