import { createContext, useState } from "react";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

type ProductState = {
  products: IProduct[]
};

type ProductContextProviderProps = {
  children: React.ReactNode;
};

const productsData = [
  {
    id: 1,
    name: "French Fries with Ketchup",
    price: 4.5,
    imgUrl: "/images/plate__french-fries.png",
  },
  {
    id: 2,
    name: "Salmon and Vegetables",
    price: 4.5,
    imgUrl: "/images/plate__salmon-vegetables.png",
  },
  {
    id: 3,
    name: "Spaghetti with Meat Sauce",
    price: 4.5,
    imgUrl: "/images/plate__spaghetti-meat-sauce.png",
  },
  {
    id: 4,
    name: "Bacon Eggs",
    price: 4.5,
    imgUrl: "/images/plate__bacon-eggs.png",
  },
  {
    id: 5,
    name: "Ravioli",
    price: 4.5,
    imgUrl: "/images/plate__ravioli.png",
  },
  {
    id: 6,
    name: "Tortellini",
    price: 4.5,
    imgUrl: "/images/plate__tortellini.png",
  },
];

export const ProductsContext = createContext({} as ProductState);

const ProductsContextProvider = ({ children }: ProductContextProviderProps) => {
  const [products, setProducts] = useState(productsData);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
