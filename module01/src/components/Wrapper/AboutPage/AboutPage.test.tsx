import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('About Page', () => {
  it('About Page renders', () => {
    render(<AboutPage />);

    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/lorem/i)).toBeInTheDocument();
  });
});
