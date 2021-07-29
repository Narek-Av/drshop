import { Provider } from "react-redux";
import store from "../../store";
import Main from "../Main";
import Navigation from "../Navigation/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../Authenticate/Login";
import Register from "../Authenticate/Register";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Main />
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
