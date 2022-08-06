import React from "react";
import Register from "../../register/Register";

const RegisterPage = () => {
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

export default RegisterPage;
