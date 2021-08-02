import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/shop-logo.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/loupe.svg";
import { ReactComponent as ShoppingCartIcon } from "../../assets/icons/shopping-cart.svg";

import "./Navigation.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../store/auth/authSlice";
import UserInfo from "./UserInfo";
import { onShowCart } from "../../store/app/appSlice";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="navigation">
      <div className="navigation-content">
        <div className="navigation-content-left">
          <Link to="/products" className="app-logo nav-item">
            <img src={logo} alt="logo" />
          </Link>
          <div className="app-search">
            <label htmlFor="search">
              <SearchIcon />
            </label>
            <input type="text" id="search" placeholder="Search for products" />
          </div>
        </div>
        <div className="navigation-content-right">
          {isAuth ? (
            <UserInfo logout={() => dispatch(logout())} user={user} />
          ) : (
            <>
              <Link to="/login" className="btn btn-outline nav-item">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign up
              </Link>
            </>
          )}
          <button
            className="btn btn-shopping"
            onClick={() => dispatch(onShowCart())}
          >
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
