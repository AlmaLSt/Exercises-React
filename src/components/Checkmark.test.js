import React from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Checkmark from './Checkmark';

describe('Checkmark', () => {
  it('prop done: true', () => {
    render(<Checkmark done index={1} />);
    const element = screen.getByTestId('checkmark');

    expect(element).toHaveClass('checkmark dimmed', {exact: true});
  });

  it('prop done: false', () => {
    render(<Checkmark index={1} />);
    const element = screen.getByTestId('checkmark');

    expect(element).toHaveClass('checkmark', {exact: true});
  });

  it('context', () => {
    const handleToggleDone = jest.fn();
    jest.spyOn(React, 'useContext').mockImplementation(() => ({ handleToggleDone }));
    render(<Checkmark done index={1} />);
    const element = screen.getByTestId('checkmark');
    userEvent.click(element);

    expect(handleToggleDone).toHaveBeenCalledWith(1, { done: false });
  });
});
