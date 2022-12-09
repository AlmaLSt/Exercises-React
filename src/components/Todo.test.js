import React from 'react';
import { render, screen } from '@testing-library/react';

import Todo from './Todo';

describe('Todo', () => {
  it('renders', () => {
    render(<Todo index={1} text="test" />);
    const element = screen.getByTestId('todo');

    expect(element).toBeTruthy();
  });
});
