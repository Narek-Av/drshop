import React from "react";
import ProductCart from "../ProductCart";
import Products from "../Products";
import Sidebar from "../Sidebar";

import "./Main.scss";

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main-container">
        <Sidebar />
        <Products />
        <ProductCart cartActive={true} />
      </div>
    </div>
  );
};

export default Main;
