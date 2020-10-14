import express from "express";

import {
  getProducts,
  getProductsBydId,
} from "../controllers/productController.js";
const router = express.Router();

/**
 * @description    Fetch all products
 * @route          GET /api/products
 * @access         Public
 *
 * */
router.route("/").get(getProducts);

/**
 * @description    Fetch single product
 * @route          GET /api/products/:id
 * @access         Public
 *
 * */
router.route("/:id").get(getProductsBydId);

export default router;
