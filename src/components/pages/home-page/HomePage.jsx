import "./HomePage.scss";
import Posts from "../../posts/Posts";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import { useEffect } from "react";
import Carousel from "../../carousel/carousel";

const HomePage = ({ user }) => {
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
      <section className="section">
        <Carousel />
        <Posts posts={posts} />
      </section>
    </div>
  );
};

export default HomePage;
