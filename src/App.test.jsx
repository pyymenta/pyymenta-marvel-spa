import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home text', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Home/i)[0];
  expect(linkElement).toBeInTheDocument();
});

test('renders hero details text', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Hero Details/i)[0];
  expect(linkElement).toBeInTheDocument();
});
