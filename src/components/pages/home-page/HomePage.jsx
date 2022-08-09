import "./HomePage.scss";
import Posts from "../../posts/Posts";
import Register from "../../register/Register";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import { useEffect } from "react";

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
      <article>
        <Posts posts={posts} />
      </article>
    </div>
  );
};

export default HomePage;
