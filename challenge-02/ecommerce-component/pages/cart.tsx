import Head from "next/head";
import styles from "../styles/Cart.module.css";
import ItemInCart from "../components/ItemInCart";
import { MobileLayout } from "../components/Layout/MobileLayout";

const Cart = () => {
  let itemsInCart = [
    // {
    //   name: "French Fries with Ketchup",
    //   price: 123,
    //   imgUrl: "/images/plate__bacon-eggs.png",
    // },
    // {
    //   name: "Product 2",
    //   price: 222,
    //   imgUrl: "/images/plate__chicken-salad.png",
    // },
  ];
  return (
    <div>
      <MobileLayout>
        <Head>
          <title>Advent of CSS - eCommerce component - Cart</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Your Cart</h1>
          <div className={styles.cartContent}>
            {itemsInCart.length == 0 ? (
              <p id="empty-message" className={styles.emptyMessage}>
                Your cart is empty
              </p>
            ) : (
              <>
                <ul className={styles.itemList}>
                  {itemsInCart.map((item, index) => (
                    <ItemInCart
                      key={index}
                      name={item.name}
                      price={item.price}
                      imgUrl={item.imgUrl}
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
      </MobileLayout>
    </div>
  );
};

export default Cart;
