import { CartStateType } from "./CartContext";
import { IProduct } from "./ProductContext";

type ActionType =
  | { type: "ADD_TO_CART"; payload: IProduct }
  | { type: "REMOVE_FROM_CART"; payload: IProduct }
  | { type: "INCREASE_QTY"; payload: IProduct }
  | { type: "DECREASE_QTY"; payload: IProduct };

export const cartReducer: React.Reducer<CartStateType, ActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("add to cart", action.payload)
      return [...state, { product: action.payload, qty: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter(
        (productInCart) => productInCart.product.id !== action.payload.id
      );

    case "INCREASE_QTY":
      var targetedProduct = state.find(
        (productInCart) => productInCart.product.id === action.payload.id
      );
      console.log(targetedProduct);
      if (targetedProduct) {
        return [
          ...state.filter((productInCart)=> productInCart.product.id !== action.payload.id),
          { product: targetedProduct?.product, qty: targetedProduct?.qty + 1 },
        ];
      }
    case "DECREASE_QTY":
      var targetedProduct = state.find(
        (productInCart) => productInCart.product.id === action.payload.id
      );
      console.log(targetedProduct);
      if (targetedProduct) {
        if (targetedProduct.qty == 0) return state
        return [
          ...state.filter((productInCart)=> productInCart.product.id !== action.payload.id),
          { product: targetedProduct?.product, qty: targetedProduct?.qty - 1 },
        ];
      }

    default:
      return state;
  }
};
