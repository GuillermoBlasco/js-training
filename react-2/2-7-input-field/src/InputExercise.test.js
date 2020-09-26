import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputExercise from './InputExercise';

test('renders the component', () => {
  const { getByTestId } = render(<InputExercise />);
  const spanElement = getByTestId("span-test");
  expect(spanElement).toBeInTheDocument();
});

test('it has the input with the test id "input-test"', () => {
  const { getByTestId } = render(<InputExercise />);
  const inputElement = getByTestId("input-test");
  expect(inputElement).toBeInTheDocument();
});

test('it has the span with the test id "span-test"', () => {
  const { getByTestId } = render(<InputExercise />);
  const spanElement = getByTestId("span-test");
  expect(spanElement).toBeInTheDocument();
});

test('you can type at the input', () => {
  const { getByTestId } = render(<InputExercise />);
  const inputElement = getByTestId("input-test");
  fireEvent.change(inputElement, { target: { value: 'Hello world' } })
  expect(inputElement.value).toBe("Hello world");
})

test('when you type "Hello world" at the input the text appears at the Typed text <span>', () => {
  const { getByTestId } = render(<InputExercise />);
  const inputElement = getByTestId("input-test");
  const spanElement = getByTestId("span-test");

  fireEvent.change(inputElement, { target: { value: 'Hello world' } })

  expect(spanElement).toHaveTextContent("Typed text: Hello world");
})

