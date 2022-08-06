import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SinglePost.scss";
import axios from "axios";
import { API_URL } from "../../../../../utils/api";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const param = useParams().postId;

  const populateSinglePost = async () => {
    const { data } = await axios.get(`${API_URL}/posts/${param}`);

    setPost(data);
  };

  useEffect(() => {
    populateSinglePost();
  }, [param]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="single-post__container">
        <div className="single-post__inner-container">
          <img src="" alt="blog" />

          <h3>{post.title}</h3>

          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
