import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('Error Page component', () => {
  it('Error Page renders', () => {
    render(<ErrorPage />);

    expect(screen.getByAltText(/error/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
