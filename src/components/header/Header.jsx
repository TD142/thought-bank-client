import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav">
        <Link to="/">
          <h4>Register</h4>
        </Link>
        <Link to="/login">
          <h4>Login</h4>
        </Link>
      </div>
    </header>
  );
};
export default Header;
