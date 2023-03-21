import "./hero.scss";
import { Link } from "react-router-dom";

const Hero = ({ posts }) => {
  return (
    <div className="hero">
      <Link to={"/post/" + posts[3]._id}>
        <div className="wrapper">
          <div className="container">
            <div className="container__wrapper">
              <h1 className="container__wrapper__title">{posts[3].title}</h1>
              <p className="container__wrapper__text">{posts[3].desc}</p>
            </div>
            <img src={posts[3].image} alt="post" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
