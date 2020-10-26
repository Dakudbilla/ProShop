import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel.js";
import mongoose from "mongoose";

/**
 * @description    Fetch all products
 * @route          GET /api/products
 * @access         Public
 *
 * */
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
});

/**
 * @description    Fetch single product
 * @route          GET /api/products/:id
 * @access         Public
 *
 * */
export const getProductsBydId = asyncHandler(async (req, res) => {
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
});

/**
 * @description    DELETE single product
 * @route          DELETE /api/products/:id
 * @access         PRIVATE/ADMIN
 *
 * */
export const deleteProduct = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error("Product not Found");
  }

  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Delete Succesful" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

/**
 * @description    CREATE single product
 * @route          POST /api/products
 * @access         PRIVATE/ADMIN
 *
 * */
export const createProduct = asyncHandler(async (req, res) => {
  const product = await new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.png",
    brand: "Sample Brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  }).save();

  res.status(201).json(product);
});

/**
 * @description    Update single product
 * @route          PUT /api/products/:id
 * @access         PRIVATE/ADMIN
 *
 * */
export const updateProduct = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error("Product not Found");
  }

  const product = await Product.findById(req.params.id);
  if (product) {
    const {
      name,
      price,
      image,
      brand,
      category,
      countInStock,

      description,
    } = req.body;
    (product.name = name || product.name),
      (product.price = price || product.price),
      (product.image = image || product.image),
      (product.brand = brand || product.brand),
      (product.category = category || product.category),
      (product.countInStock = countInStock || product.countInStock),
      (product.description = description || product.description);

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }

  res.status(201).json(product);
});
