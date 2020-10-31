import React from 'react';
import OrderAction from '../components/OrderAction';
import '../styles/index.css';

export default {
  title: 'Example/OrderAction',
  component: OrderAction,
};

const divStyle = {
  width: '100%',
};

const Template = (props) => (
  <div style={divStyle}>
    <OrderAction {...props} />
  </div>
);

export const HeroAction = Template;
HeroAction.args = {
  type: 'hero',
  text: 'Ordenar por nome - A/Z',
};

export const HeartAction = Template.bind({});
HeartAction.args = {
  type: 'heart',
  text: 'Somente favoritos',
};
