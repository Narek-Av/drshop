import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { Product } from "../../interfaces";
import store from "../../store";
import Main from "../Main";
import Navigation from "../Navigation/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../Authenticate/Login";
import Register from "../Authenticate/Register";

import "./App.scss";

const App: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState<Product[]>();
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoader(true);
    try {
      const res = await axios.get("http://localhost:5000/products", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(`res.data`, res.data);
      setData(res.data.products);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Main products={data as Product[]} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
