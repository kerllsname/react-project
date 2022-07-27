import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from './HomePage';

describe('Home Page component', () => {
  it('Home Page renders', () => {
    render(<HomePage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('api call', async () => {
    const { queryByPlaceholderText, findByText } = render(<HomePage />);
    const searchInput = queryByPlaceholderText('search');
    if (searchInput) {
      userEvent.type(searchInput, 'London');
      expect(await findByText('talv_ss')).toBeInTheDocument();
    }
  });
});
