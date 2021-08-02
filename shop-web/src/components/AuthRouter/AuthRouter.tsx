import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { RootState } from "../../store";

const AuthRouter = ({ component, ...rest }: any) => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Redirect to="/products" />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
};

export default AuthRouter;
