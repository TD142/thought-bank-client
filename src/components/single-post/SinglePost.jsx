import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SinglePost.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import defaultImg from "../../assets/images/pexels-steve-johnson-1269968.jpg";

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
        <img
          className="single-post__image"
          src={post.image ? post.image : defaultImg}
          alt="blog"
        />
        <div className="single-post__inner-container">
          <h3>{post.title}</h3>

          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
