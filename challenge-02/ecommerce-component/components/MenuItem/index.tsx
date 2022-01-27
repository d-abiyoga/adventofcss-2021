import Image from "next/image";
import AddToCartButton from "../../components/AddToCartButton";
import styles from "./style.module.css";
import { IProduct } from "../../context/ProductContext";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

type MenuItemProps = {
  bgColor: string;
  product: IProduct;
  isInCartProps: boolean;
};

const MenuItem = (props: MenuItemProps) => {
  const { CartState, CartDispatch } = useContext(CartContext);
  const addToCart = () => {
    CartDispatch({ type: "ADD_TO_CART", payload: props.product });
  };
  const removeFromCart = () => {
    CartDispatch({ type: "REMOVE_FROM_CART", payload: props.product });
  };

  const checkIsInCart = () => {
    let isInCart = CartState.cartItems.some(
      (item) => item.product.id === props.product.id
    );
    return isInCart
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.cardWrapper}
        style={{ backgroundColor: `${props.bgColor}` }}
      >
        <figure className={styles.productImage}>
          <Image src={props.product.imgUrl} alt="" width={150} height={150} />
        </figure>
        <div className={styles.productDetail}>
          <p className={styles.productName}>{props.product.name}</p>
          <p className={styles.productPrice}>${props.product.price}</p>
          <AddToCartButton
            isInCart={checkIsInCart()}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
