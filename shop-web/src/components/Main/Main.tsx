import React from "react";
import { Product } from "../../interfaces";
import Products from "../Products";
import Sidebar from "../Sidebar";

import "./Main.scss";

interface ProductProps {
  products: Product[];
}

const Main: React.FC<ProductProps> = ({ products }) => {
  return (
    <div className="main">
      <div className="main-container">
        <Sidebar />
        <Products products={products} />
      </div>
    </div>
  );
};

export default Main;
