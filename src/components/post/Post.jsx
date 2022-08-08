import { Link } from "react-router-dom";
import "./Post.scss";
import { useLocation } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div>
      <div className="post__container">
        <div className="post__inner-container">
          <img src="" alt="blog" />
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
