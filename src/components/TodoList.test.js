import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

it('renders', () => {
  render(<TodoList />);
  const element = screen.getByTestId('todo-list');

  expect(element).toBeTruthy();
});
