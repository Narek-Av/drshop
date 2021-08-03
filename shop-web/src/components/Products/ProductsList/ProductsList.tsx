import React from "react";
import { IProduct } from "../../../interfaces";
import Pagination from "../../UI/Pagination/Pagination";

import Product from "./Product/Product";

import "./ProductsList.scss";

type ProductsListType = {
  products: IProduct[];
  totalPages: number;
};

const ProductsList: React.FC<ProductsListType> = ({ totalPages, products }) => {
  return (
    <div className="products-list">
      <div className="products-list-content">
        {products.map((product, index) => (
          <Product key={product._id} product={product} id={index} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default ProductsList;
