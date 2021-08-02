import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import porductsRouter from "./api/routes/products";
import userRouter from "./api/routes/user";

require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.use("/user", userRouter);
app.use("/products", porductsRouter);

app.listen(port, () => {
  console.log(`Server runinig on port: ${port}`);
});
