import React from "react";
import { IProduct } from "../../../interfaces";

import Product from "./Product/Product";

import "./ProductsList.scss";

type ProductsListType = {
  products: IProduct[];
};

const ProductsList: React.FC<ProductsListType> = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product, index) => (
        <Product key={product._id} product={product} id={index} />
      ))}
    </div>
  );
};

export default ProductsList;
