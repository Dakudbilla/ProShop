import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel.js";
import mongoose from "mongoose";
const router = express.Router();

/**
 * @description    Fetch all products
 * @route          GET /api/products
 * @access         Public
 *
 * */
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find();

    res.status(200).json(products);
  })
);

/**
 * @description    Fetch single product
 * @route          GET /api/products/:id
 * @access         Public
 *
 * */
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new Error("Product not Found");
    }

    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default router;
