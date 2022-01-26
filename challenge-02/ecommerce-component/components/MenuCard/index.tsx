import Image from "next/image";
import AddToCartButton from "../../components/AddToCartButton";
import styles from "./style.module.css";
import { IProduct } from "../../context/ProductContext";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

type MenuCardProps = {
  bgColor: string;
  product: IProduct;
};

const MenuCard = (props: MenuCardProps) => {
  const { CartDispatch } = useContext(CartContext);
  let [isInCart, setIsInCart] = useState(false);

  const addToCart = () => {
    CartDispatch({ type: "ADD_TO_CART", payload: props.product });
    setIsInCart(true)
  };
  const removeFromCart = () => {
    CartDispatch({ type: "REMOVE_FROM_CART", payload: props.product });
    setIsInCart(false)
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
            isInCart={isInCart}
            setIsInCart={setIsInCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
