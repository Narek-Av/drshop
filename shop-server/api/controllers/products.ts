import { Response, Request } from "express";

import Products from "../models/products";

export const getProducts = async (req: Request, res: Response) => {
  const PAGE_SIZE = +process.env.PAGE_SIZE;
  const page = parseInt(req.query.p.toString() || "0");

  try {
    const total = await Products.countDocuments({});
    const products = await Products.find({})
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * (page - 1))
      .select("id name description price")
      .exec();

    res
      .status(200)
      .json({
        totalPages: Math.ceil(total / PAGE_SIZE),
        pageProductCount: products.length,
        products,
      });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    await Products.findById(req.params.id, (err: any, product: any) => {
      if (!product) {
        return res.status(404).json({ messag: "Product not found." });
      } else {
        res.status(200).json({ product });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  if (!req.body.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  try {
    const { name, description, price } = req.body;
    const newProduct = new Products({ name, description, price });
    try {
      await newProduct.save();
      res.status(200).json({ product: newProduct });
    } catch (error) {
      res.status(300).json("cutom error");
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
