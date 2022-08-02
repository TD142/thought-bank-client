import React from "react";
import "./HomePage.scss";
import { useState } from "react";
import Register from "../../register/Register";

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  return (
    <div>
      <h1 className="home-page__title">Thought Bank</h1>

      <Register />
      <form action="post">
        <div className="form__container">
          <label htmlFor="text">Email</label>
          <input className="form__input" name="text" type="text" />
          <label htmlFor="password">Password</label>
          <input className="form__input" name="password" type="password" />
          <button className="form__submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
