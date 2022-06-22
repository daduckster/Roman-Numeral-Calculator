import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a number input', () => {
    render(<Home />);
    expect(screen.getByLabelText('Your Number')).toBeInTheDocument();
  })

  it('renders a Convert button', () => {
    render(<Home />);
    expect(screen.getByText('Convert')).toBeInTheDocument();
  })

  it('renders the output heading', () => {
    render(<Home />);
    expect(screen.getByText('Your Roman Numeral')).toBeInTheDocument();
  })
})
