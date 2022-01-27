import { CartStateType } from "./CartContext";
import { IProduct } from "./ProductContext";

type ChangeQtyPayload = {
  product: IProduct;
  qty: number;
};

type ActionType =
  | { type: "ADD_TO_CART"; payload: IProduct }
  | { type: "REMOVE_FROM_CART"; payload: IProduct }
  | { type: "INCREASE_QTY"; payload: IProduct }
  | { type: "DECREASE_QTY"; payload: IProduct }
  | { type: "CHANGE_QTY"; payload: ChangeQtyPayload };

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
      let increasedCartItems = state.cartItems.map((prevItem) =>
        prevItem.product.id === action.payload.id
          ? { ...prevItem, qty: prevItem.qty++ }
          : prevItem
      );
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
    default:
      return state;
  }
};
