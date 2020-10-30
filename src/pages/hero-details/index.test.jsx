import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroDetails from './index';

test('renders home text', () => {
  render(<HeroDetails />);
  const linkElement = screen.getAllByText(/Hero Details/i)[0];
  expect(linkElement).toBeInTheDocument();
});
