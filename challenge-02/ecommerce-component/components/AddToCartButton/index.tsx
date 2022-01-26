import { useState, useContext, MouseEventHandler, SetStateAction } from "react";
import styles from "./style.module.css";
import CheckIcon from "./check.svg";

type AddToCartButtonProps = {
  addToCart: MouseEventHandler;
  removeFromCart: MouseEventHandler;
  isInCart: boolean,
  setIsInCart: React.Dispatch<SetStateAction<boolean>>
};

const AddToCartButton = (props: AddToCartButtonProps) => {
  return (
    <>
      {props.isInCart ? (
        <button
          className={`${styles.button} ${styles.inCart}`}
          onClick={props.removeFromCart}
        >
          <CheckIcon />
          <span>In Cart</span>
        </button>
      ) : (
        <button 
          onClick={props.addToCart}
          className={styles.button}>Add to Cart</button>
      )}
    </>
  );
};

export default AddToCartButton;
