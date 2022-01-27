import { createContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import { IProduct } from "./ProductContext";

// export type CartStateType = {
//   product : IProduct,
//   qty: number
// }[]

export type CartStateType = {
  cartItems: { product: IProduct; qty: number }[];
  cartSum? : number 
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

// const initialState: CartState = {count: 0}
const initialState: CartStateType = {cartItems: []};

export const CartContext = createContext<null | any>(initialState); //TODO: change type

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ CartState: state, CartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
