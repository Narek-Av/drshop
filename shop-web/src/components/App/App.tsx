import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Products from "../Products";
import ProductCart from "../ProductCart";
import Navigation from "../Navigation/Navigation";
import Login from "../Authenticate/Login";
import Register from "../Authenticate/Register";
import { getUser } from "../../store/auth/authSlice";
import AuthRouter from "../AuthRouter";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUser(token));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation />
      <ProductCart cartActive={false} />

      <Switch>
        <Route path="/products" exact component={Products} />
        <AuthRouter path="/login" component={Login} />
        <AuthRouter path="/signup" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
