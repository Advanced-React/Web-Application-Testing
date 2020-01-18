import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App', () => {
	render(<App />);
});

test('renders strikes and balls on the screen', () => {
  const {getByTestId} = render(<App />)
  getByTestId(/balls/i)
  getByTestId(/strikes/i)
})
