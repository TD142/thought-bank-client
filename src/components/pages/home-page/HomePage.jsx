import React from "react";
import "./HomePage.scss";
import { useState } from "react";
import Register from "../../register/Register";
import Login from "../../login/Login";

const HomePage = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__container">
          <h1 className="home-page__title">Thought Bank</h1>
        </div>

        <Register />
      </section>
    </div>
  );
};

export default HomePage;
