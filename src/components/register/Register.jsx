import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);

  const [userFilled, setUserFilled] = useState(true);
  const [emailFilled, setEmailFilled] = useState(true);
  const [passwordFilled, setPasswordFilled] = useState(true);

  const handleRegisterChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegisterSubmit = async (event) => {
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

    if (!formValues.username) {
      setUserFilled(false);
    } else {
      setUserFilled(true);
    }

    if (formValues.email && formValues.password && formValues.username) {
      await axios
        .post("http://localhost:8080/register", formValues)
        .then((result) => {
          setRegister(true);
        })
        .catch((error) => {
          error = new Error("Login unsucessful!");
        });
      setFormValues({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleRegisterSubmit}>
        <div className="form__container">
          <h1 className="form__title">Register</h1>
          <label htmlFor="text">User Name</label>
          <input
            onChange={handleRegisterChange}
            value={formValues.username}
            className="form__input"
            name="username"
            type="text"
          />
          {!userFilled && <p className="form__validation">Missing User Name</p>}
          <label htmlFor="text">Email</label>
          <input
            onChange={handleRegisterChange}
            value={formValues.email}
            className="form__input"
            name="email"
            type="text"
          />
          {!emailFilled && <p className="form__validation">Missing Email</p>}
          <label htmlFor="password">Password</label>
          <input
            value={formValues.password}
            onChange={handleRegisterChange}
            className="form__input"
            name="password"
            type="password"
          />
          {!passwordFilled && <p className="form__validation">Missing Email</p>}
          <button className="form__submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
