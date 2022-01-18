import type { NextComponentType } from 'next'
import { useState } from 'react';


const AddToCartButton: NextComponentType = () => {
  let [isInCart, setIsInCart] = useState(false)
  const handleClick = () => {
    setIsInCart(true)
  }
  return (
    <button onClick={handleClick}>
      {isInCart ? "In Cart" : "Add to Cart"}
    </button>
  )
}

export default AddToCartButton
