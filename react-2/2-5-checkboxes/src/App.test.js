import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxExercice from './CheckboxExercice';

test('Checkbox exists', () => {
  const { getByText} = render(<CheckboxExercice />);
  const inputElement = getByText(/Check Me!/i);
  expect(inputElement).toBeInTheDocument();
});

test('Checkbox checks', () => {
  const { getByTestId } = render(<CheckboxExercice />);
  expect(getByTestId('checkbox').checked).toBe(false);
  fireEvent.click(getByTestId('checkbox'));
  expect(getByTestId('checkbox').checked).toBe(true);
});
