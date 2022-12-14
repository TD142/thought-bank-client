import HomePage from "./components/pages/home-page/HomePage";
import "../src/styles/global.scss";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router";
import Header from "./components/header/Header";
import LoginPage from "./components/pages/login-page/LoginPage";
import { useState, useEffect } from "react";
import NewPost from "./components/new-post/NewPost";
import SinglePost from "./components/single-post/SinglePost";
import RegisterPage from "./components/pages/register-page/RegisterPage";
import Settings from "./components/pages/settings-page/Settings";
import axios from "axios";
import { API_URL } from "./utils/api";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({});

  const populateUserDetails = async () => {
    const userId = localStorage.getItem("id");
    const { data } = await axios.get(`${API_URL}/user/${userId}`);
    setUserDetails(data);
  };

  useEffect(() => {
    populateUserDetails();
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [user]);

  const handleLogoutClick = (event) => {
    event.preventDefault();
    setUser(null);
    setUserDetails({});
    localStorage.clear();
  };

  const updateUser = (userName) => {
    setUser(userName);
  };

  return (
    <div className="App">
      <Toaster />
      <Header
        handleLogoutClick={handleLogoutClick}
        userDetails={userDetails}
        user={user}
      />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />

        <Route
          path="/new-post"
          element={user ? <NewPost user={user} /> : <HomePage />}
        />
        <Route
          path="/login"
          element={
            user ? (
              <HomePage />
            ) : (
              <LoginPage
                populateUserDetails={populateUserDetails}
                updateUser={updateUser}
              />
            )
          }
        />
        <Route
          path="/register"
          element={
            user ? (
              <HomePage />
            ) : (
              <RegisterPage
                populateUserDetails={populateUserDetails}
                updateUser={updateUser}
              />
            )
          }
        />

        <Route
          path="/settings"
          element={
            user ? (
              <Settings
                populateUserDetails={populateUserDetails}
                userDetails={userDetails}
              />
            ) : (
              <HomePage />
            )
          }
        />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
