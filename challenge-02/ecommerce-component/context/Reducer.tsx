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
      console.log("add to cart", action.payload);
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
      // state[state.findIndex((item) => item.product.id === action.payload.id)]
      //   .qty++;
      // return [...state];
      return {
        ...state,
        cartItems: state.cartItems.filter((item) =>
          item.product.id === action.payload.id ? item.qty++ : item.qty
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) =>
          item.product.id === action.payload.id ? (item.qty = item.qty - 1) : item.qty
        ),
      };
    case "CHANGE_QTY":
      // state[state.findIndex((item) => item.product.id === action.payload.id)]
      //   .qty--;
      // return [...state];
      return {
        ...state,
        cartItems: state.cartItems.filter((item) =>
          item.product.id === action.payload.product.id
            ? action.payload.qty
            : item.qty
        ),
      };
    // var targetedProduct = state.find(
    //   (productInCart) => productInCart.product.id === action.payload.id
    // );
    // console.log(targetedProduct);
    // if (targetedProduct) {
    //   if (targetedProduct.qty == 0) return state;
    //   return [
    //     ...state.filter(
    //       (productInCart) => productInCart.product.id !== action.payload.id
    //     ),
    //     { product: targetedProduct?.product, qty: targetedProduct?.qty - 1 },
    //   ];
    // }
    //
    default:
      return state;
  }
};
