import { useState, useEffect } from "react";
import "./Settings.scss";
import axios from "axios";
import { API_URL } from "../../../utils/api";

const Settings = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [file, setFile] = useState(null);

  const userId = localStorage.getItem("id");

  const populateUserDetails = async () => {
    console.log(`${API_URL}/user/${userId}`);
    const { data } = await axios.get(`${API_URL}/user/${userId}`);
    setUserDetails(data);
  };

  useEffect(() => {
    populateUserDetails();
  }, []);

  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);

      try {
        await axios.post(`${API_URL}/upload`, data);
      } catch (err) {}
    }
  };

  console.log(file);

  return (
    <div>
      <div className="settings__container">
        <div className="settings__inner-container">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="Image">Update Profile Picture</label>
            <img src={file} />
            <input
              name="image"
              type="file"
              onChange={handleImageUpload}
            ></input>
            <label htmlFor="userName">Update Password</label>
            <input type="text" value="" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
