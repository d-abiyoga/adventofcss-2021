import { render, screen } from '@testing-library/react'
import Cart from '../components/Cart'

// - When there are no plates within your cart, you should see a message that says, "Your cart is empty."
// - When products are in your cart, you should be able to increase and decrease the quantity.
// - A user should not be able to mark the quantity as a negative number.
//   - If the quantity goes down to 0, the user will have the option to delete or remove the product for their cart entirely.
// - Tax is based on the state of Tennessee sales tax: `0.0975`
// - When a plate is added to your cart, the Subtotal and Totals will automatically update.

describe('Cart', () => {
  render(<Cart />)
  it('renders a heading', () => {

    const heading = screen.getByRole('heading', {
      name: /Your Cart/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a empty message when there is no item', () => {
    render(<Cart />)
    // when tere are no plates within cart
    const emptyMessage = screen.getByText(/your cart is empty/i)

    expect(emptyMessage).toBeInTheDocument()
  })
})
