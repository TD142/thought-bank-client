import img from "../../assets/images/pexels-steve-johnson-1269968.jpg";
import "./NewPost.scss";
const NewPost = () => {
  return (
    <div>
      <img className="new-post__image" src={img} alt="art work" />
      <form className="new-post__form">
        <div className="new-post__container">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="new-post__input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="new-post__inner-container">
          <textarea
            className="new-post__input new-post__input--content"
            placeholder="What's on your mind?"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="new-post__inner-container">
          <button className="new-post__button" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
