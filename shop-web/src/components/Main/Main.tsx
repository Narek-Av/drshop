import React from "react";
import { Product } from "../../interfaces";
// import { Product } from "../../interfaces";

import "./Main.scss";

interface ProductProps {
  products: Product[];
}

const Main: React.FC<ProductProps> = ({ products }) => {
  console.log(`products`, products);

  return (
    <div className="main">
      <h1>Main</h1>
    </div>
  );
};

export default Main;
