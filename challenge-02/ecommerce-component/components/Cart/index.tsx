import styles from "./style.module.css";
import CartItem from "../CartItem";
import { Totals } from "../Totals";
import { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const { CartState, CartDispatch } = useContext(CartContext);
  const { cartItems } = CartState;

  const calcSubTotal = () => {
    const TAX_RATE = 0.0975;
    if (cartItems.length > 0) {
      let subTotal : number = cartItems
        .map((item) => item.product.price * item.qty)
        .reduce((a:number, b:number) => a + b);

      let tax : number = Number((TAX_RATE * subTotal).toFixed(2));
      let total : number = subTotal - tax;
      return { subTotal, tax, total };
    } else {
      return { subTotal: 0, tax: 0, total: 0 };
    }
  };

  useEffect(() => {
    CartDispatch({ type: "UPDATE_TOTALS", payload: calcSubTotal() });
  }, [cartItems]);

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
                {cartItems.map((item, index:number) => (
                  <CartItem key={index} item={item} />
                ))}
              </ul>
              <Totals />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
