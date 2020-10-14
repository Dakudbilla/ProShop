import { cartReducer } from "./cartReducers";
import { productListReducer, singleProductReducer } from "./productReducer";

const { combineReducers } = require("redux");

export default combineReducers({
  productList: productListReducer,
  product: singleProductReducer,
  cart: cartReducer,
});
