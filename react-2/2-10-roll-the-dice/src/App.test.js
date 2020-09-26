import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('Base elements exist', () => {
  const { getByText, getAllByText } = render(<App />);
  const button = getByText(/Roll them/i);
  const dices = getAllByText(/Dice is/i);
  expect(button).toBeInTheDocument();
  expect(dices.length).toBe(2);
  fireEvent.click(button);
});

test('renders "You win!" when a double six', () => {
  const { getByText, getAllByText, queryByText } = render(<App />);
  const button = getByText(/Roll them/i);
  const dices = getAllByText(/Dice is/i);
  expect(button).toBeInTheDocument();
  expect(dices.length).toBe(2);
  let i = 0;
  while (i < 1000) {
    i++;
    fireEvent.click(button);
    if (dices[0].textContent.endsWith(6) && dices[1].textContent.endsWith(6)) {
      const youWin = queryByText(/You win!/i);
      expect(youWin).toBeInTheDocument();
    } else {
      const youWin = queryByText(/You win!/i);
      expect(youWin).not.toBeInTheDocument();
    }
  }
});
