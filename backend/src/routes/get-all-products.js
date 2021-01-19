import express from "express";
import products from "../data/products.js";

const router = express.Router();

router.get("/api/products", (req, res) => {
  res.json(products);
});

export { router as getAllProductsRouter };
