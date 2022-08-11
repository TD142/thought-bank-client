import Post from "../post/Post";
import "./Posts.scss";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <div className="posts__container">
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
