import React from "react";
import { IProduct } from "../../../interfaces";
import Product from "./Product/Product";

type ProductsListType = {
  products: IProduct[];
};

const ProductsList: React.FC<ProductsListType> = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
