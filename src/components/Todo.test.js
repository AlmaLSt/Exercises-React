import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './Todo';

describe('Todo', () => {
  it('renders', () => {
    render(<Todo index={1} text="test" />, {wrapper: BrowserRouter});
    const element = screen.getByTestId('todo');

    expect(element).toBeTruthy();
  });

  it('correct class names', () => {
    render(<Todo index={1} text="test" />, {wrapper: BrowserRouter});
    const element = screen.getByTestId('todo');

    expect(element).toHaveClass('list-item', {exact: true});
  });

  it('correct class names', () => {
    render(<Todo done index={1} text="test" />, {wrapper: BrowserRouter});
    const element = screen.getByTestId('todo');

    expect(element).toHaveClass('done list-item', {exact: true});
  });
});
