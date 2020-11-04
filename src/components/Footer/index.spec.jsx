import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Footer component', () => {
  const container = shallow(<Footer />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have footer className', () => {
    expect(container.find('.footer').length).toEqual(1);
  });
});
