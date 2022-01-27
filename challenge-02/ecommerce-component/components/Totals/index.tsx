import styles from './style.module.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext"

export const Totals = () => {
  const { CartState } = useContext(CartContext)
  const { cartTotals } = CartState
  const { subTotal, tax, total} = cartTotals
  
  return (
    <table className={styles.totals}>
      <tbody>
        <tr>
          <td className={styles.label}>Subtotal:</td>
          <td className={styles.value}>${subTotal}</td>
        </tr>
        <tr>
          <td className={styles.label}>Tax:</td>
          <td className={styles.value}>${tax}</td>
        </tr>
        <tr>
          <td className={styles.label}>Total:</td>
          <td className={`${styles.value} ${styles.totalValue}`}>${total}</td>
        </tr>
      </tbody>
    </table>
  );
};
