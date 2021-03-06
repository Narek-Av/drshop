import express from "express";

import {
  getProducts,
  getProduct,
  createProduct,
} from "../controllers/products";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);

export default router;
