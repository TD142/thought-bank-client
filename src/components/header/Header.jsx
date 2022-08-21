import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import "./header.scss";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/images/watercolour-background.png";

const Header = ({ user, userDetails, handleLogoutClick }) => {
  const [isOpen, setIsOpen] = useState();
  const userName = localStorage.getItem("user");
  const { profilePic } = userDetails;

  const handleDisplayNav = (event) => {
    event.preventDefault();
    const ul = document.querySelector("ul");
    const link = document.querySelectorAll(".nav__link");
    if (!isOpen) {
      ul.classList.remove("nav__primary-ul--nodisplay");

      link.forEach((item) => item.classList.remove("nav__link--fadeout"));
      ul.classList.add("nav__primary-ul--display");
    } else {
      ul.classList.add("nav__primary-ul--nodisplay");
      link.forEach((item) => item.classList.add("nav__link--fadeout"));
    }
  };

  const handleNavClose = (event) => {
    const ul = document.querySelector("ul");
    ul.classList.remove("nav__primary-ul--display");
    setIsOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="nav">
          <ul className="nav__primary-ul">
            <Link onClick={handleNavClose} className="nav__link" to="/">
              <li className="nav__primary-list">Home</li>
            </Link>
            {user && (
              <Link
                onClick={handleNavClose}
                className="nav__link"
                to="/new-post"
              >
                <li className="nav__primary-list">New Post</li>
              </Link>
            )}
            {!user ? (
              <>
                <Link
                  onClick={handleNavClose}
                  className="nav__link"
                  to="/register"
                >
                  <li className="nav__primary-list">Register</li>
                </Link>
                <Link
                  onClick={handleNavClose}
                  className="nav__link "
                  to="/login"
                >
                  <li className="nav__primary-list">Login</li>
                </Link>
              </>
            ) : (
              <>
                <Link
                  onClick={handleNavClose}
                  className="nav__link"
                  to="/settings"
                >
                  <li className="nav__primary-list">Settings</li>
                </Link>

                <Link onClick={handleNavClose} className="nav__link" to="/">
                  <li className="nav__primary-list" onClick={handleLogoutClick}>
                    Logout
                  </li>
                </Link>
              </>
            )}
          </ul>
          <ul className="nav__ul">
            <div onClick={handleDisplayNav} className="nav__hamburger">
              <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
            </div>
            <Link className="nav__link nav__link--remove-margin" to="/">
              <li className="nav__list">Home</li>
            </Link>
            {user && (
              <Link className="nav__link" to="/new-post">
                <li className="nav__list">New Post</li>
              </Link>
            )}
            {!user ? (
              <>
                <Link className="nav__link nav__link--flex-end" to="/register">
                  <li className="nav__list">Register</li>
                </Link>
                <Link className="nav__link " to="/login">
                  <li className="nav__list">Login</li>
                </Link>
              </>
            ) : (
              <>
                <Link className="nav__link" to="/settings">
                  <li className="nav__list">Settings</li>
                </Link>
                <img
                  className="nav__img"
                  src={profilePic ? profilePic : defaultImg}
                  alt="User profile picture"
                />
                <li className="nav__link--user">{userName}</li>

                <Link className="nav__link" to="/">
                  <li className="nav__list" onClick={handleLogoutClick}>
                    Logout
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
