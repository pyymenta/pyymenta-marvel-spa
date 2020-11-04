import React from 'react';
import { shallow } from 'enzyme';
import Favorite from './index';

describe('Favorite component', () => {
  const container = shallow(
    <Favorite isFavorite={false} handleFavoritePersistence={() => true} itemId={1} />
  );

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should change isFavorite state when component is clicked', () => {
    container.find('.favorite');
    container.find('.favorite').first().simulate('click');

    expect(container.find('.favorite').prop('src')).toContain('full-heart');
  });
});
