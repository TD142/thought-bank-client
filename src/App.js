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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [user]);

  const handleLogoutClick = (event) => {
    event.preventDefault();
    setUser(null);
    localStorage.clear();
    navigate("/");
  };

  const handleLoginClick = (event) => {};

  return (
    <div className="App">
      <Header handleLogoutClick={handleLogoutClick} user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/new-post" element={user ? <NewPost /> : <HomePage />} />
        <Route
          path="/login"
          element={user ? <HomePage /> : <LoginPage setUser={setUser} />}
        />
        <Route
          path="/register"
          element={user ? <HomePage /> : <RegisterPage />}
        />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
