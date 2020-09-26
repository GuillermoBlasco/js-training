import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import ModalComponent from './Modal';

test('All is ok!', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Open Modal/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Modal is ok!', async() => {
  const { getByTestId } = render(<ModalComponent open />)
  expect(getByTestId('modal')).toBeInTheDocument();
});

test('Open Modal', () => {
  const { getByText, getByTestId } = render(<App />);
  const buttonElement = getByText(/Open Modal/i);

  fireEvent.click(buttonElement);

  expect(getByTestId('modal')).toBeInTheDocument()
});
