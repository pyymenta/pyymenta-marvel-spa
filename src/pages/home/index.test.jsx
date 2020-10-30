import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

test('renders home text', () => {
  render(<Home />);
  const linkElement = screen.getAllByText(/Home/i)[0];
  expect(linkElement).toBeInTheDocument();
});
