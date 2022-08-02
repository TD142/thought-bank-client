import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [login, setlogin] = useState(false);

  const handleLoginChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8080/login", formValues)
      .then((result) => {
        console.log(result);
        setlogin(true);
      })
      .catch((error) => {
        error = new Error("Login unsucessful!");
      });
    setFormValues({
      email: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="form__container">
        <label htmlFor="text">Email</label>
        <input
          onChange={handleLoginChange}
          value={formValues.email}
          className="form__input"
          name="email"
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          value={formValues.password}
          onChange={handleLoginChange}
          className="form__input"
          name="password"
          type="password"
        />
        <button className="form__submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
