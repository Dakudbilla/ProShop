import { cartReducer } from "./cartReducers";
import { productListReducer, singleProductReducer } from "./productReducer";
import { userLoginReducer, userRegisterReducer } from "./userReducer";

const { combineReducers } = require("redux");

export default combineReducers({
  productList: productListReducer,
  product: singleProductReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
