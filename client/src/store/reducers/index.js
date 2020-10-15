import { cartReducer } from "./cartReducers";
import { productListReducer, singleProductReducer } from "./productReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./userReducer";

const { combineReducers } = require("redux");

export default combineReducers({
  productList: productListReducer,
  product: singleProductReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});
