import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({ user, handleLogoutClick }) => {
  return (
    <header>
      <div className="nav">
        <Link className="nav__link" to="/">
          <h4>Home</h4>
        </Link>
        {user && (
          <Link className="nav__link" to="/new-post">
            <h4>New Post</h4>
          </Link>
        )}
        {!user ? (
          <>
            <Link className="nav__link nav__link--flex-end" to="/register">
              <h4>Register</h4>
            </Link>
            <Link className="nav__link" to="/login">
              <h4>Login</h4>
            </Link>
          </>
        ) : (
          <Link className="nav__link nav__link--flex-end" to="/">
            <h4 onClick={handleLogoutClick}>Logout</h4>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
