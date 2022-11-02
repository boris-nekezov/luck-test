import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

test('renders Button', () => {
  const { getAllByRole } = render(<Button label='test-button' />);
  const [buttonElement] = getAllByRole('button');
  expect(buttonElement).toBeDefined();
});