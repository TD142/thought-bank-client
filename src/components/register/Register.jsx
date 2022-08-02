import React from "react";
import { useState } from "react";

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

  return (
    <div>
      <form action="post">
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
