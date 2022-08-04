import React from "react";
import "./HomePage.scss";
import Post from "../../post/Post";
import Register from "../../register/Register";

const HomePage = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__container">
          <h1 className="home-page__title">Thought Bank</h1>
        </div>

        <Register />
      </section>
      <article>
        <Post />
      </article>
    </div>
  );
};

export default HomePage;
