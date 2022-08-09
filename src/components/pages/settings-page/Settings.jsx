import { useState, useEffect } from "react";
import "./Settings.scss";
import axios from "axios";
import { API_URL } from "../../../utils/api";

const Settings = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [file, setFile] = useState(null);

  const userId = localStorage.getItem("id");

  const populateUserDetails = async () => {
    const { data } = await axios.get(`${API_URL}/user/${userId}`);
    setUserDetails(data);
  };

  useEffect(() => {
    populateUserDetails();
  }, []);

  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
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
    }
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="settings__container">
        <div className="settings__inner-container">
          <form onSubmit={handleImageSubmit}>
            <label htmlFor="Image">Update Profile Picture</label>
            <img src={file} />
            <input
              name="image"
              type="file"
              onChange={handleImageUpload}
            ></input>
            <button>Update</button>
          </form>
          <form onChange={handlePasswordChange}>
            <label htmlFor="userName">Update Password</label>
            <input type="text" value="" />
            <button>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
