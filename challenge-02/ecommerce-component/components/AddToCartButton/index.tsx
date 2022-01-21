import { useState } from "react";
import styles from "./style.module.css";
import CheckIcon from "./check.svg";

const AddToCartButton: React.Component = () => {
  let [isInCart, setIsInCart] = useState(false);
  const handleClick = () => {
    setIsInCart((prevState) => !prevState);
  };
  return (
    <button onClick={handleClick} className={ isInCart ? `${styles.button} ${styles.inCart} `: styles.button}>
      {isInCart ? (
        <>
          <CheckIcon /> In Cart
        </>
      ) : (
        "Add to Cart"
      )}
    </button>
  );
};

export default AddToCartButton;
