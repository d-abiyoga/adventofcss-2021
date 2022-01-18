import type { NextComponentType } from 'next'
import Image from 'next/image'
import AddToCartButton from './AddToCartButton'


const MenuCard: NextComponentType = (props) => {
  return (
    <div className="menu-card">
      <p className="menu-name">{props.name}</p>
      <p className="menu-price">${props.price}</p>
      <AddToCartButton />
    </div>
  )
}

export default MenuCard
