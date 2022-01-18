import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart: NextPage = () => {
  let ItemsInCart = []
  return (
    <div className={styles.container}>
      <Head>
        <title>Advent of CSS - eCommerce component - Cart</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Your Cart
        </h1>
        <div className="cart-content">
          {ItemsInCart.length == 0 ?
            <p id="empty-message" className="message">Your cart is empty</p> :
            <p>ITEMS....:</p>
          }
        </div>
      </main>
    </div>
  )
}

export default Cart
