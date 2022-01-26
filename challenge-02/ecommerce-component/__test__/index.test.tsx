import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

// **Users should be able to:**
// - View the plates on the left side of the screen and add them to your cart on the right side.

describe('Menu', () => {
  render(<Home />)
  it('renders a heading', () => {

    const heading = screen.getByRole('heading', {
      name: /To Go Menu/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('can view the plates on the left side of the screen', () => {

  })

  it('can add item to cart', () => {

  })
})


