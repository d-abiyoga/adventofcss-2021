import Image from "next/image";
import styles from "/styles/ItemInCart.module.css";
import Chevron from "./chevron.svg";

const ItemInCart = ({ name, price, imgUrl }) => {
  return (
    <li className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.itemImg}
          src={imgUrl}
          alt="Food"
          width={100}
          height={100}
        />
        <div className={styles.itemQty}>5</div>
      </div>
      <div className={styles.wrappers}>
        <div className={styles.upperContainer}>
          <div className={styles.itemDetailWrapper}>
            <p className={styles.itemName}>{name}</p>
            <p className={styles.itemPrice}>${price}</p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.quantityWrapper}>
            <button className={styles.quantityModBtn} aria-label="decrease">
              <Chevron />
            </button>
            <div className={styles.quantityValue}>1</div>
            <button 
              className={`${styles.quantityModBtn} ${styles.increaseBtn}`} 
              aria-label="increase">
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
