import "./HomePage.scss";
import Posts from "../../posts/Posts";
import Register from "../../register/Register";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import { useEffect } from "react";
import tateImg from "../../../assets/images/tate.png";
import hearImg from "../../../assets/images/hear.png";
import charterImg from "../../../assets/images/charterhouse.png";
import whitecubeImg from "../../../assets/images/white-cube.png";
import { Link } from "react-router-dom";

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
      <section className="hero">
        <div className="hero__container">
          <div className="hero__inner-container">
            <img className="hero__image" src={hearImg} alt="hear" />
            <p>All things considered remain irrospective</p>
          </div>
        </div>
      </section>

      <section className="section">
        <Posts posts={posts} />
        {/* <div className="section__wrapper">
          <h1 className="section__title">Events on in London</h1>
          <div className="section__container">
            <a
              href="https://www.tate.org.uk/whats-on/tate-modern/tate-modern-lates"
              target="_blank"
            >
              <img className="section__img" src={tateImg} alt="Tate hall" />
            </a>
            <div className="section__inner-container">
              <h4>Tate Lates</h4>
              <p>Every last friday of the month.</p>
            </div>
          </div>
          <div className="section__container ">
            <a
              href="https://www.southbankcentre.co.uk/whats-on/art-exhibitions/hassun-el-zafar-hear?eventId=912681"
              target="_blank"
            >
              <img
                className="section__img"
                src={hearImg}
                alt="audio installation artwork"
              />
            </a>
            <div className="section__inner-container">
              <h4>Hear</h4>
              <p>
                Audio visual installation at the South Bank until end of
                September.
              </p>
            </div>
          </div>

          <div>
            <div className="section__container">
              <a
                href="https://www.barbican.org.uk/whats-on/2022/event/members-barbican-to-historic-charterhouse-photo-walk"
                target="_blank"
              >
                <img
                  className="section__img"
                  src={charterImg}
                  alt="archecture artwork"
                />
              </a>
              <div className="section__inner-container">
                <h4>Charterhouse</h4>
                <p>
                  Discovering old London archectures at the Barbican. Ends Sept
                  10.
                </p>
              </div>
            </div>
            <div className="section__container">
              <a
                href="https://whitecube.com/exhibitions/exhibition/louise_giovanelli_white_cube_bermondsey"
                target="_blank"
              >
                <img
                  className="section__img"
                  src={whitecubeImg}
                  alt="archecture artwork"
                />
              </a>
              <div className="section__inner-container">
                <h4>As if, Almost</h4>
                <p>Explores possibility and multiple view points.</p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default HomePage;
