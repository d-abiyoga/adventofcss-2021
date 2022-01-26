import styles from "./style.module.css";
import ItemInCart from "../ItemInCart";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = (props) => {
  const {CartState, CartDispatch} = useContext(CartContext)
  console.log("Cart State:", CartState)

  const increaseQty = (product) => {
    CartDispatch({type: "INCREASE_QTY", payload: product})
  } 

  const decreaseQty = (product) => {
    CartDispatch({type: "INCREASE_QTY", payload: product})
  }
  
  return (
    <div>
        <main className={styles.main}>
          <h1 className={styles.title}>Your Cart</h1>
          <div className={styles.cartContent}>
            {CartState.length == 0 ? (
              <p id="empty-message" className={styles.emptyMessage}>
                Your cart is empty
              </p>
            ) : (
              <>
                <ul className={styles.itemList}>
                  {CartState.map((item, index) => (
                    <ItemInCart
                      key={index}
                      item={item}
                      increaseQty={increaseQty}
                      decreaseQty={decreaseQty}
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
