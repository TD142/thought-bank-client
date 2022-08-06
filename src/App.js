import HomePage from "./components/pages/home-page/HomePage";
import "../src/styles/global.scss";
import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import LoginPage from "./components/pages/home-page/login-page/LoginPage";
import { useState } from "react";
import NewPost from "./components/pages/home-page/new-blog/NewPost";

import SinglePost from "./components/pages/home-page/new-blog/single-post/SinglePost";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
