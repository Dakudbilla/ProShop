import { cartReducer } from "./cartReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./OrderReducer";
import {
  productDeleteReducer,
  productListReducer,
  singleProductReducer,
} from "./productReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./userReducer";

const { combineReducers } = require("redux");

export default combineReducers({
  productList: productListReducer,
  product: singleProductReducer,
  deleteProduct: productDeleteReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrders: orderListMyReducer,
  userUpdate: userUpdateReducer,
});
