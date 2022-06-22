import {fireEvent, render, screen} from '@testing-library/react'
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

  it('shows DXII in the output when the number is 512', () => {
    render(<Home />);
    const input = screen.getByLabelText('Your Number');
    const button = screen.getByText('Convert');
    fireEvent.change(input, {target: {value: 512}});
    fireEvent.click(button)
    expect(screen.getByText('DXII')).toBeInTheDocument();
  })

  it('shows DCCCLVII in the output when the number is 857', () => {
    render(<Home />);
    const input = screen.getByLabelText('Your Number');
    const button = screen.getByText('Convert');
    fireEvent.change(input, {target: {value: 857}});
    fireEvent.click(button)
    expect(screen.getByText('DCCCLVII')).toBeInTheDocument();
  })
})
