import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProductCart from "./components/ProductCart";
import Login from "./components/Authenticate/Login";
import Register from "./components/Authenticate/Register";
import { getUser } from "./store/auth/authSlice";
import AuthRouter from "./components/AuthRouter";
import Loader from "./components/UI/Loader";
import PageTopNavigation from "./containers/PageTopNavigation";

const HomeView = lazy(() => import("./containers/Home"));
const ShowMoreView = lazy(() => import("./containers/ShowMore"));

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
      <PageTopNavigation />
      <ProductCart cartActive={false} />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={HomeView} />
          {/* <Route path="/more" exact component={ShowMoreView} /> */}
          <AuthRouter path="/login" component={Login} />
          <AuthRouter path="/signup" component={Register} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
