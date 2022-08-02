import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);

  const handleRegisterChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8080/register", formValues)
      .then((result) => {
        setRegister(true);
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
    <div>
      <form onSubmit={handleRegisterSubmit}>
        <div className="form__container">
          <label htmlFor="text">Email</label>
          <input
            onChange={handleRegisterChange}
            value={formValues.email}
            className="form__input"
            name="email"
            type="text"
          />
          <label htmlFor="password">Password</label>
          <input
            value={formValues.password}
            onChange={handleRegisterChange}
            className="form__input"
            name="password"
            type="password"
          />
          <button className="form__submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
