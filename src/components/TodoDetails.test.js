import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TodoDetails from './TodoDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({id: 1}),
}));

it('renders', () => {
  render(<TodoDetails />, {wrapper: BrowserRouter});
  const element = screen.getByTestId('todo-details');

  expect(element).toBeTruthy();
});

it('renders details', () => {
  const todos = [
    {id:1, text: 'test', done: false, details:['test']},
  ];
  render(<TodoDetails todos={todos} />, {wrapper: BrowserRouter});
  const element = screen.getByTestId('todo-details-item');

  expect(element).toHaveClass('list-item');
});
