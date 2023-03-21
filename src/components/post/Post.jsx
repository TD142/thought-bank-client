import { Link } from "react-router-dom";
import "./Post.scss";
import defaultImg from "../../assets/images/pexels-steve-johnson-1269968.jpg";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__container">
        <img
          className="post__image"
          src={post.image ? post.image : defaultImg}
          alt="blog"
        />
        <div className="post__inner-container">
          <Link to={`/post/${post._id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
