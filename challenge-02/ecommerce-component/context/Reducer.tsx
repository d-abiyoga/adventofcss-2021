import { CartStateType } from "./CartContext";
import { IProduct } from "./ProductContext";

type ActionType =
  | { type: "ADD_TO_CART"; payload: IProduct }
  | { type: "REMOVE_FROM_CART"; payload: IProduct }
  | { type: "INCREASE_QTY"; payload: IProduct }
  | { type: "DECREASE_QTY"; payload: IProduct }
  | { type: "UPDATE_TOTALS"; payload: TotalsType }

type TotalsType = {
  subTotal: number, tax: number, total:number
}

export const cartReducer: React.Reducer<CartStateType, ActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, { product: action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (productInCart) => productInCart.product.id !== action.payload.id
        ),
      };

    case "INCREASE_QTY":
      console.log("increase trigerred")
      let increasedCartItems = state.cartItems.map((prevItem) =>
        prevItem.product.id === action.payload.id
          ? { ...prevItem, qty: prevItem.qty++ }
          : prevItem
      );
      console.log("state:",state.cartItems)
      console.log("increasestate",increasedCartItems)
      return {
        ...state,
        cartItems: increasedCartItems};

    case "DECREASE_QTY":
      let decreasedCartItems = state.cartItems.map((prevItem) =>
        prevItem.product.id === action.payload.id
          ? { ...prevItem, qty: prevItem.qty-- }
          : prevItem
      );
      return {
        ...state,
        cartItems: decreasedCartItems,
      };

    case "UPDATE_TOTALS":
      return {
        ...state,
        cartTotals: action.payload
      } 
    default:
      return state;
  }
};
