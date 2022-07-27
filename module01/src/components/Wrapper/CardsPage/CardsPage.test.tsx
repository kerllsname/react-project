import { render, screen } from '@testing-library/react';
import CardsPage from './CardsPage';

describe('Cards Page', () => {
  it('Cards Page renders', () => {
    render(<CardsPage />);

    expect(screen.getByAltText(/mads/i)).toBeInTheDocument();
    expect(screen.getByText(/death/i)).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
