import { useContext } from "react";
import styles from "./style.module.css";
import MenuCard from "../MenuCard";
import { ProductsContext } from "../../context/ProductContext";

const Menu = () => {
  const { products } = useContext(ProductsContext)

  const alternateBgColor = function (index: number) {
    const colors = ["#7AB3F333", "#E979B233", "#D7D7F933", "#78F7BB33"];
    return colors[index % colors.length]
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>To Go Menu</h1>
      <ul className={styles.productList}>
        {products.map((product, index: number) => (
          <li key={index}>
            <MenuCard 
              product={product}
              bgColor={alternateBgColor(index)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Menu;
