import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../types";

///Get all products
export const productListReducer = (state = { products: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

//Action to get a single product details using its id
export const singleProductReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_REQUEST:
      return { loading: true };
    case PRODUCT_SUCCESS:
      return { loading: false, product: payload };
    case PRODUCT_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

//Reducer to handle delete delete action
export const productDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
