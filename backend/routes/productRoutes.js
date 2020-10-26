import express from "express";
import { protect, admin } from "../middleware/authMiddleWare.js";

import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsBydId,
  updateProduct,
} from "../controllers/productController.js";
const router = express.Router();

/**
 * @description    Fetch all products
 * @route          GET /api/products
 * @access         Public
 *
 * */
router.route("/").get(getProducts).post(protect, admin, createProduct);

/**
 * @description    Fetch single product
 * @route          GET /api/products/:id
 * @access         Public
 *
 * */
router
  .route("/:id")
  .get(getProductsBydId)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
