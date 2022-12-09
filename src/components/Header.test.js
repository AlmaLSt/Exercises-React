import {render, screen} from '@testing-library/react'

import Header from './Header';

describe('Header', () => {
  it('renders without props', () => {
    render(<Header />);
    const element = screen.getByText(/Hay 0 tareas/i);

    expect(element).toBeTruthy();
  });

  it('renders correctly with props', () => {
    render(<Header todos={[]} />);
    const element = screen.getByText(/Hay 0 tareas/i);

    expect(element).toBeTruthy();
  });

  it('renders correctly with props', () => {
    render(<Header todos={Array.from({length: 10})} />);
    const element = screen.getByText(/Hay 10 tareas/i);

    expect(element).toBeTruthy();
  });
});
