import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import validator from "validator";
import { toast } from "react-hot-toast";

const Login = ({ updateUser, populateUserDetails }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [emailFilled, setEmailFilled] = useState(true);
  const [passwordFilled, setPasswordFilled] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const handleLoginChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    if (!formValues.email) {
      setEmailFilled(false);
    } else {
      setEmailFilled(true);
    }

    if (!formValues.password) {
      setPasswordFilled(false);
    } else {
      setPasswordFilled(true);
    }

    if (!setEmailFilled && !setPasswordFilled) {
      return;
    }

    await axios
      .post("http://localhost:8080/login", formValues)
      .then((result) => {
        const { user } = result.data;
        const { id } = result.data;
        localStorage.setItem("user", user);
        localStorage.setItem("id", id);

        updateUser(user);
        navigate("/");
        populateUserDetails();
      })
      .catch((error) => {
        error = new Error("Login unsucessful!");
      });
  };
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div className="form__container">
          <h1 className="form__title">Login</h1>
          <label htmlFor="text">Email</label>
          <input
            onChange={handleLoginChange}
            value={formValues.email}
            className="form__input"
            name="email"
            type="text"
          />
          {!emailFilled && <p className="form__validation">Missing Email</p>}
          <label htmlFor="password">Password</label>
          <input
            value={formValues.password}
            onChange={handleLoginChange}
            className="form__input"
            name="password"
            type="password"
          />
          {!passwordFilled && (
            <p className="form__validation">Missing Password</p>
          )}
          <button className="form__submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
