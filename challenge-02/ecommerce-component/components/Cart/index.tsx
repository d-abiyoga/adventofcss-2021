import styles from "./style.module.css";
import CartItem from "../CartItem";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const {CartState} = useContext(CartContext)
  const {cartItems} = CartState;
  // console.log("Cart State:", CartState)
  
  return (
    <div>
        <main className={styles.main}>
          <h1 className={styles.title}>Your Cart</h1>
          <div className={styles.cartContent}>
            {cartItems.length == 0 ? (
              <p id="empty-message" className={styles.emptyMessage}>
                Your cart is empty
              </p>
            ) : (
              <>
                <ul className={styles.itemList}>
                  {cartItems.map((item, index) => (
                    <CartItem
                      key={index}
                      item={item}
                    />
                  ))}
                </ul>
                <table className={styles.totals}>
                  <tbody>
                    <tr>
                      <td className={styles.label}>Subtotal:</td>
                      <td className={styles.value}>$20.10</td>
                    </tr>
                    <tr>
                      <td className={styles.label}>Tax:</td>
                      <td className={styles.value}>$1.96</td>
                    </tr>
                    <tr>
                      <td className={styles.label}>Total:</td>
                      <td className={`${styles.value} ${styles.totalValue}`}>
                        $30.12
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </main>
    </div>
  );
};

export default Cart;
