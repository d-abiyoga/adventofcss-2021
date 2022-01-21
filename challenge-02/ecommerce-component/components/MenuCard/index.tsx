import Image from "next/image";
import AddToCartButton from "/components/AddToCartButton";
import styles from "./style.module.css";

const MenuCard: React.Component = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper} style={{backgroundColor: `${props.bgColor}`}}>
        <figure className={styles.productImage}>
          <Image src={props.imgUrl} alt="" width={150} height={150} />
        </figure>
        <div className={styles.productDetail}>
          <p className={styles.productName}>{props.name}</p>
          <p className={styles.productPrice}>${props.price}</p>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
