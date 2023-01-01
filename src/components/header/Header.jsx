import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import "./header.scss";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/images/watercolour-background.png";
import { useEffect } from "react";

const Header = ({ user, userDetails, handleLogoutClick }) => {
  const [isOpen, setIsOpen] = useState();
  const userName = localStorage.getItem("user");
  const { profilePic } = userDetails;
  console.log(user);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    const logo = document.querySelector(".nav__logo");
    console.log(nav);
    document.addEventListener("scroll", (event) => {
      if (window.scrollY > 50) {
        logo.classList.remove("nav__logo--fade-in");
        logo.classList.add("nav__logo--fade-out");
        nav.classList.add("nav--thinner");
      } else {
        nav.classList.remove("nav--thinner");
        logo.classList.remove("nav__logo--fade-out");
        logo.classList.add("nav__logo--fade-in");
      }
    });
  });

  const handleDisplayNav = (event) => {
    event.preventDefault();
    const body = document.querySelector("body");
    const ul = document.querySelector("ul");
    const link = document.querySelectorAll(".nav__link");
    if (!isOpen) {
      body.classList.add("body");
      ul.classList.remove("nav__primary-ul--nodisplay");
      link.forEach((item) => item.classList.remove("nav__link--fadeout"));
      ul.classList.add("nav__primary-ul--display");
    } else {
      body.classList.remove("body");
      ul.classList.add("nav__primary-ul--nodisplay");
      link.forEach((item) => item.classList.add("nav__link--fadeout"));
    }
  };

  const handleNavClose = (event) => {
    const ul = document.querySelector("ul");
    const body = document.querySelector("body");
    ul.classList.remove("nav__primary-ul--display");
    body.classList.remove("body");
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
            <h1 className="nav__logo ">THOUGHT BANK</h1>

            <>
              <div className="nav__container">
                <img
                  className="nav__img"
                  src={profilePic ? profilePic : defaultImg}
                  alt="User profile picture"
                />
                {userName && <li className="nav__link--user">{userName}</li>}
              </div>
            </>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
