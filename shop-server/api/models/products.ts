import { IProduct } from "../types";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const productsSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
});

const Products = mongoose.model<IProduct>("Product", productsSchema);

export default Products;
