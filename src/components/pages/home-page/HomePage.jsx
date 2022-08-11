import "./HomePage.scss";
import Posts from "../../posts/Posts";
import Register from "../../register/Register";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import { useEffect } from "react";
import tateImg from "../../../assets/images/tate.png";

const HomePage = () => {
  const [posts, setPosts] = useState(null);

  const populatePosts = async () => {
    const { data } = await axios.get(`${API_URL}/posts`);

    setPosts(data);
  };

  useEffect(() => {
    populatePosts();
  }, []);

  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className="hero">
        <div className="hero__container">
          <h2>
            Talk <span> A</span>rt
          </h2>
          <h2>
            Think A <span> r</span>t
          </h2>
          <h2>
            Dream Ar<span>t</span>
          </h2>
        </div>
      </section>
      <section className="section">
        <Posts posts={posts} />
        <aside className="aside">
          <h1 className="aside__title">Events on in London</h1>
          <div className="aside__container">
            <img className="aside__img" src={tateImg} alt="Tate hall" />
            <div>
              <h4>Tate Lates</h4>
              <p>Every last friday of the month</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
