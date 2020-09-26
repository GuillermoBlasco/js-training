import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('Correct html', () => {
  const { container } = render(<App />);
  const result = container.querySelector('h2');
  expect(result.textContent).toBe('Not selected')

  const radio = container.querySelectorAll('input');
  expect(radio.length).toEqual(4);

  radio.forEach(r => {
    expect(r.type).toBe('radio');
  })
});

it('Default value', () => {
  const { container } = render(<App />);
  const result = container.querySelector('h2');
  expect(result.textContent).toBe('Not selected')
});


it('Change value', () => {
  const { container } = render(<App />);

  const radio = container.querySelectorAll('input');
  radio[0].click();

  const result = container.querySelector('h2');
  expect(result.textContent).toContain('Your OS is:');

  const prevSelect = result.textContent;
  radio[1].click();

  expect(result.textContent).not.toBe(prevSelect);

});