import { Provider } from "react-redux";
import store from "../../store";
import Main from "../Main";
import Navigation from "../Navigation/Navigation";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "../Authenticate/Login";
import Register from "../Authenticate/Register";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/products" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Redirect to="/products" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
