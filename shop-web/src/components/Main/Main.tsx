import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductCart from "../ProductCart";
import Products from "../Products";
import Sidebar from "../Sidebar";

import "./Main.scss";

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main-container">
        <ProductCart cartActive={false} />
        <Sidebar />

        <Switch>
          <Route path="/products" component={Products} exact />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
