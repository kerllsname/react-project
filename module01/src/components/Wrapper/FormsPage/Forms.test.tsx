import { render, screen } from '@testing-library/react';
import Forms from './Forms';

describe('Forms Page component', () => {
  it('Forms Page renders', () => {
    render(<Forms />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
