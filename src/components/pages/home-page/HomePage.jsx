import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <h1 className="home-page__title">Thought Bank</h1>
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
