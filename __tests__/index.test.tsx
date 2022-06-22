import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a number input', () => {
    render(<Home />);
    expect(screen.getByLabelText('Your Number')).toBeInTheDocument();
  })
})
