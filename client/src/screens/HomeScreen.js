import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";
const HomeScreen = () => (
  <>
    <h1>Latest Products</h1>
    <hr />

    <Row>
      {products.map((product) => (
        <Col sm={12} md={6} lg={4}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  </>
);
export default HomeScreen;
