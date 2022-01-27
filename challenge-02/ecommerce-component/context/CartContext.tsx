import { createContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import { IProduct } from "./ProductContext";

export type CartStateType = {
  cartItems: { product: IProduct; qty: number }[];
  cartTotals: { subTotal: number; tax: number; total: number };
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

const initialState: CartStateType = {
  cartItems: [],
  cartTotals: { subTotal: 0, tax: 0, total: 0 },
};

export const CartContext = createContext(initialState); 

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ CartState: state, CartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
