import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({ user, userDetails, handleLogoutClick }) => {
  console.log(userDetails);
  const userName = localStorage.getItem("user");
  const { profilePic } = userDetails;

  return (
    <header>
      <nav>
        <div className="nav">
          <Link className="nav__link nav__link--remove-margin" to="/">
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
              <Link className="nav__link " to="/login">
                <h4>Login</h4>
              </Link>
            </>
          ) : (
            <>
              <Link className="nav__link" to="/settings">
                <h4>Settings</h4>
              </Link>
              <img
                className="nav__img"
                src={profilePic}
                alt="User profile picture"
              />
              <h4 className="nav__link nav__link--user">{userName}</h4>

              <Link className="nav__link" to="/">
                <h4 onClick={handleLogoutClick}>Logout</h4>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
