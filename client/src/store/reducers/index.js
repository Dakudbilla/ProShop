import { cartReducer } from "./cartReducers";
import { productListReducer, singleProductReducer } from "./productReducer";
import { userLoginReducer } from "./userReducer";

const { combineReducers } = require("redux");

export default combineReducers({
  productList: productListReducer,
  product: singleProductReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});
