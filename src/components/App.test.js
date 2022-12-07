import React from 'react';
import * as todos from '../todos';
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

jest.mock('../todos');

describe('App', () => {
  beforeEach(cleanup);
  beforeEach(() => {
    todos.get.mockResolvedValue([]);
  });

  it('renders', () => {
    render(<App />, {wrapper: BrowserRouter});
    const title = screen.getByText(/Hay 0 tareas/i);

    waitFor(() => { expect(title).toBeTruthy() })
  });

  it('set state', () => {
    jest.spyOn(React, 'useState').mockImplementation(initState => [initState, jest.fn()]);
    render(<App />, {wrapper: BrowserRouter});

    expect(React.useState).toHaveBeenCalledWith([]);
    expect(React.useState).toHaveBeenCalledWith('');
  })

  it('set state', () => {
    jest.spyOn(React, 'useState').mockImplementation(initState => [initState, jest.fn()]);
    render(<App />, {wrapper: BrowserRouter});

    expect(React.useState).toHaveBeenCalledWith([]);
    expect(React.useState).toHaveBeenCalledWith('');
  })
});
