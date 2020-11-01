import React from 'react';
import SearchInput from '../components/SearchInput';
import '../styles/index.css';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
};

const divStyle = {
  width: '90%',
};

const Template = (props) => (
  <div style={divStyle}>
    <SearchInput {...props} />
  </div>
);

export const Default = Template;

export const Brand = Template.bind({});
Brand.args = {
  searchType: 'brand',
};
