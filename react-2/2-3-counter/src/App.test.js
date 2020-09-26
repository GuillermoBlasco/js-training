import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('App loads with a initial test of 0', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('value')).toHaveTextContent(0)
});

test('Increment button increments by 1', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('increment'));
  expect(getByTestId('value')).toHaveTextContent('1');
  fireEvent.click(getByTestId('increment'));
  expect(getByTestId('value')).toHaveTextContent('2')
});


test('Decrement button increments by 1', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('decrement'));
  expect(getByTestId('value')).toHaveTextContent('-1');
  fireEvent.click(getByTestId('decrement'));
  expect(getByTestId('value')).toHaveTextContent('-2')
});
