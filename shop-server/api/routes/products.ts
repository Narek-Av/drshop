import express from "express";

import {
  getProducts,
  getProduct,
  createProduct,
} from "../controllers/products";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/", auth, createProduct);
router.get("/", auth, getProducts);
router.get("/:id", auth, getProduct);

export default router;
