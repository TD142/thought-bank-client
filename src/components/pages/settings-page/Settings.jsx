import { useState, useEffect } from "react";
import "./Settings.scss";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import { toast } from "react-hot-toast";
import waterImg from "../../../assets/images/watercolour-background.png";

const Settings = ({ userDetails, populateUserDetails }) => {
  const [password, setPassword] = useState(null);
  const [file, setFile] = useState(null);

  const userId = localStorage.getItem("id");

  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    const userUpdate = {
      username: userDetails.userName,
      userId: userDetails._id,
    };

    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      userUpdate.profilePic = `${API_URL}/public/${filename}`;

      try {
        await axios.post(`${API_URL}/upload`, data);
      } catch (err) {}

      try {
        await axios.put(`${API_URL}/user/${userId}`, userUpdate);
      } catch (err) {}
      event.target.image.value = null;
      populateUserDetails();
      toast.success("Profile picture updated");
    } else {
      toast.error("No file uploaded");
    }
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();

    if (!password) {
      toast.error("Password cannot be empty");
      return;
    }

    const userUpdate = {
      username: userDetails.userName,
      userId: userDetails._id,
      password: password,
    };
    try {
      await axios.put(`${API_URL}/user/${userId}`, userUpdate);
    } catch (err) {}
    setPassword(null);
    toast.success("Password changed");
  };

  return (
    <div className="settings">
      <div className="settings__container">
        <form className="settings__form" onSubmit={handleImageSubmit}>
          <div className="settings__wrapper">
            <label className="settings__label" htmlFor="Image">
              Profile Picture
            </label>
            <input
              className="settings__file-input"
              name="image"
              type="file"
              onChange={handleImageUpload}
            />
          </div>
          <button className="settings__button">Update</button>
        </form>
        <form className="settings__form" onSubmit={handlePasswordSubmit}>
          <div className="settings__wrapper">
            <label className="settings__label" htmlFor="userName">
              Password
            </label>
            <input
              className="settings__input"
              value={password}
              onChange={handlePasswordChange}
              type="password"
            />
          </div>
          <button className="settings__button">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
