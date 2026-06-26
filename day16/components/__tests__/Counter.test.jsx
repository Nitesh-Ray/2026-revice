import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter component', () => {
  it('renders initial count of 0', () => {
    render(<Counter />);
    // Find element with test id
    const countElement = screen.getByTestId('count-value');
    expect(countElement).toHaveTextContent('0');
  });

  it('increments count when button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    const countElement = screen.getByTestId('count-value');
    expect(countElement).toHaveTextContent('1');
  });

  it('resets count to 0', () => {
    render(<Counter />);
    // First increment twice
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('2');
    // Then reset
    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });
});