import "../styles/globals.css";
import type { AppProps } from "next/app";
import ProductsContextProvider from "../context/ProductContext";
import { CartContextProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default MyApp;
