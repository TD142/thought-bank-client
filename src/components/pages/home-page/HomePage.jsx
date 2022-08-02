import React from "react";
import "./HomePage.scss";
import { useState } from "react";
import Register from "../../register/Register";
import Login from "../../login/Login";

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1 className="home-page__title">Thought Bank</h1>

      <Register />
      <Login />
    </div>
  );
};

export default HomePage;
