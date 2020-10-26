import React, { useEffect } from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { delel, listUsers } from "../store/actions/userAction.js";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  listProducts,
  deleteProductAction,
} from "../store/actions/productActions.js";

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  //Get products from state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  //Get login user Details
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //Get login user Details
  const deleteProduct = useSelector((state) => state.deleteProduct);
  const {
    success: deleteSuccess,
    loading: deleteLoading,
    error: deleteError,
  } = deleteProduct;
  useEffect(() => {
    //Check if the logged in user is an Admin
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }

    //If the product list is empty add products to list
    if (!productList) {
      dispatch(listProducts());
    }
  }, [dispatch, userInfo, deleteSuccess]);

  //Handle admin deleting a product
  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure You want to Delete this product ?")) {
      dispatch(deleteProductAction(id));
    }
  };

  //Handle admin adding a product

  const createProductHandler = (product) => {
    //create product
  };

  return (
    <>
      <Row className="align-items-center  justify-content-lg-between">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col>
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {deleteLoading ? <Loader /> : deleteError ? deleteError : null}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>

                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>

                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
