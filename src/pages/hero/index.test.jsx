import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './index';

test('renders home text', () => {
  render(<Hero />);
  const linkElement = screen.getAllByText(/Hero Details/i)[0];
  expect(linkElement).toBeInTheDocument();
});
