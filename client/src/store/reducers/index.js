import { productListReducer } from "./productReducer";

const { combineReducers } = require("redux");

export default combineReducers({
  productList: productListReducer,
});
