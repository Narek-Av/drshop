import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/shop-logo.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/loupe.svg";
import { ReactComponent as ShoppingCartIcon } from "../../assets/icons/shopping-cart.svg";

import "./Navigation.scss";
import UserInfo from "./UserInfo";
import { IUser } from "../../interfaces";

interface NavigationProps {
  logout: () => {};
  user: IUser | null;
  isAuth: boolean;
  showCartHandle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  logout,
  user,
  isAuth,
  showCartHandle,
}) => {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <div className="navigation-content-left">
          <Link to="/" className="app-logo nav-item">
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
            <UserInfo logout={logout} user={user} />
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
          <button className="btn btn-shopping" onClick={showCartHandle}>
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
