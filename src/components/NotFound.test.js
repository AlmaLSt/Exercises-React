import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';

it('NotFound', () => {
  render(<NotFound />, {wrapper: BrowserRouter});
  const element = screen.getByTestId('not-found');

  expect(element).toBeTruthy();
});
