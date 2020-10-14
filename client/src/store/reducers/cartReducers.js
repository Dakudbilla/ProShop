const { CART_ADD_ITEM, CART_REMOVE_ITEM } = require("../types");

export const cartReducer = (state = { cartItems: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ADD_ITEM:
      const existItem = state.cartItems.find(
        (cartItem) => cartItem.product === payload.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === existItem.product ? payload : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.product !== payload),
      };
    default:
      return state;
  }
};
