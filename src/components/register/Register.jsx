import { useState } from "react";
import axios from "axios";
import validator from "validator";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const Register = ({ updateUser, populateUserDetails }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);
  const [userFilled, setUserFilled] = useState(true);
  const [emailFilled, setEmailFilled] = useState(true);
  const [passwordFilled, setPasswordFilled] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [userExists, setUserExists] = useState({
    emailError: "",
    userError: "",
  });

  const handleRegisterChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    setUserExists({
      emailError: "",
      userError: "",
    });

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

    const passwordCheck = validator.isStrongPassword(formValues.password);
    if (!passwordCheck && formValues.password) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }

    const emailCheck = validator.isEmail(formValues.email);
    if (!emailCheck && formValues.email) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }

    if (!passwordCheck || !emailCheck || !emailFilled || !passwordFilled) {
      return;
    }

    await axios
      .post("http://localhost:8080/register", formValues)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        setUserExists(error.response.data);
      });

    await axios
      .post("http://localhost:8080/login", formValues)
      .then((result) => {
        const { user } = result.data;
        const { id } = result.data;
        localStorage.setItem("user", user);
        localStorage.setItem("id", id);

        toast.success("Account Created!");

        setTimeout(() => {
          navigate("/");
        }, 1000);
        updateUser(user);

        populateUserDetails();
      });
    setFormValues({
      username: "",
      email: "",
      password: "",
    });
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
          {userExists.userError && (
            <p className="form__validation">Username Taken</p>
          )}
          <label htmlFor="text">Email</label>
          <input
            onChange={handleRegisterChange}
            value={formValues.email}
            className="form__input"
            name="email"
            type="text"
          />
          {!emailFilled && <p className="form__validation">Missing Email</p>}
          {userExists.emailError && (
            <p className="form__validation">Email Already Registered</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            value={formValues.password}
            onChange={handleRegisterChange}
            className="form__input"
            name="password"
            type="password"
          />
          {!passwordFilled && (
            <p className="form__validation">Missing Password</p>
          )}
          <button className="form__submit">Register</button>
        </div>
        {!passwordValid && (
          <p className="form__validation">
            Password must contain one lowercase character, one uppercase, one
            number, and one special character
          </p>
        )}
        {!emailValid && <p className="form__validation">Invalid email</p>}
      </form>
    </div>
  );
};

export default Register;
