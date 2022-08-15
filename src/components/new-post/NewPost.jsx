import { useState } from "react";
import img from "../../assets/images/pexels-steve-johnson-1269968.jpg";
import "./NewPost.scss";
import { API_URL } from "../../utils/api";
import axios from "axios";

const NewPost = ({ user }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    desc: "",
    image: null,
    username: localStorage.getItem("user"),
  });

  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      formValues.image = `${API_URL}/public/${filename}`;

      try {
        await axios.post(`${API_URL}/upload`, data);
      } catch (err) {}
    }
    try {
      await axios.post(`${API_URL}/posts`, formValues);
    } catch (err) {}
  };

  return (
    <div className="new-post">
      <form onSubmit={handlePostSubmit} className="new-post__form">
        <img className="new-post__image" src={img} alt="art work" />
        <div className="new-post__container">
          {/* <label className="new-post__label" for="file">
            Upload Image
          </label> */}
          <input
            className="new-post__file-input"
            onChange={handleImageUpload}
            name="image"
            id="fileInput"
            type="file"
          />
          <input
            className="new-post__input"
            placeholder="Title"
            type="text"
            name="title"
            autoFocus={true}
            onChange={handleInputChange}
            value={formValues.title}
          />
        </div>
        <div className="new-post__inner-container">
          <textarea
            className="new-post__input new-post__input--content"
            placeholder="What's on your mind?"
            type="text"
            name="desc"
            autoFocus={true}
            onChange={handleInputChange}
            value={formValues.desc}
          />
        </div>
        <div className="new-post__bottom-container">
          <button className="new-post__button" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
