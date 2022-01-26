import Image from "next/image";
import styles from "/styles/ItemInCart.module.css";
import Chevron from "./chevron.svg";

import {useContext} from "react";
import CartContext from "../../context/CartContext";

type ItemInCartProps = {
  item: any;
  increaseQty: any;
  decreaseQt: any;
};

const ItemInCart = (props: ItemInCartProps) => {
  const { product, qty } = props.item;

  const {CartDispatch} = useContext(CartContext)
  const handleIncrease = () => {
    CartDispatch({type: "INCREASE_QTY", payload:product})
  }
  const handleDecrease = () => {
    CartDispatch({type: "DECREASE_QTY", payload:product})
  }

  return (
    <li className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.itemImg}
          src={product.imgUrl}
          alt="Food"
          width={100}
          height={100}
        />
        <div className={styles.itemQty}>{qty}</div>
      </div>
      <div className={styles.wrappers}>
        <div className={styles.upperContainer}>
          <div className={styles.itemDetailWrapper}>
            <p className={styles.itemName}>{product.name}</p>
            <p className={styles.itemPrice}>${product.price}</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.quantityWrapper}>
            <button
              onClick={handleDecrease}
              className={styles.quantityModBtn}
              aria-label="decrease"
            >
              <Chevron />
            </button>
            <div className={styles.quantityValue}>1</div>
            <button
              onClick={handleIncrease}
              className={`${styles.quantityModBtn} ${styles.increaseBtn}`}
              aria-label="increase"
            >
              <Chevron />
            </button>
          </div>
          <div className={styles.totalPrice}>${"9.99"}</div>
        </div>
      </div>
    </li>
  );
};

export default ItemInCart;
