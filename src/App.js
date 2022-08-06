import HomePage from "./components/pages/home-page/HomePage";
import "../src/styles/global.scss";
import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import LoginPage from "./components/pages/login-page/LoginPage";
import { useState, useEffect } from "react";
import NewPost from "./components/new-post/NewPost";
import SinglePost from "./components/single-post/SinglePost";
import RegisterPage from "./components/pages/register-page/RegisterPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [user]);

  const handleLogoutClick = (event) => {
    setUser(null);
    localStorage.clear();
  };

  const handleLoginClick = (event) => {};

  return (
    <div className="App">
      <Header handleLogoutClick={handleLogoutClick} user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
