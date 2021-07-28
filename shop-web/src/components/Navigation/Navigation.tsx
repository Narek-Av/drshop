import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/shop-logo.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/loupe.svg";

import "./Navigation.scss";

const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <div className="navigation-content-left">
          <div className="app-logo nav-item">
            <img src={logo} alt="logo" />
          </div>
          <div className="app-search">
            <label htmlFor="search">
              <SearchIcon />
            </label>
            <input type="text" id="search" placeholder="Search for products" />
          </div>
        </div>
        <div className="navigation-content-right">
          <Link to="/login" className="btn btn-outline nav-item">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
