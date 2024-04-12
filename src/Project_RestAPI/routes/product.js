const express = require("express");
const router = express.Router();
const cors = require("cors");
const ProductController = require("../module/Products/ProductController");
const ProductModel = require("../module/Products/ProductModel");
router.use(cors());

router.post("/add", async function (req, res, next) {
  try {
    const { name, origin, price, image, status, size, categoryID } = req.body;

    const productData = {
      name,
      origin,
      price,
      image,
      status,
      size,
      categoryID,
    };

    const product = await ProductController.insert(productData);
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ERROR" });
  }
});
router.get("/all", async function (req, res, next) {
  try {
    const products = await ProductController.getAll();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ERROR" });
  }
});
router.get("/all/:id", async function (req, res, next) {
  try {
    const productId = req.params.id;
    const products = await ProductController.getAll();
    const product = products.find((product) => product.id === productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ERROR" });
  }
});
router.get("/search/:name", async function (req, res, next) {
  try {
    const name = req.params.name;
    const products = await ProductController.searchByName(name);
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ERROR" });
  }
});
router.delete("/delete/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const removedProduct = await ProductModel.findByIdAndDelete(productId);
    if (!removedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error removing product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
