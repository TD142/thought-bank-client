import Login from "../../login/Login";
import "./LoginPage.scss";

const LoginPage = ({ updateUser }) => {
  return (
    <div>
      <section className="login__hero">
        <div className="login-hero__container"></div>

        <Login updateUser={updateUser} />
      </section>
    </div>
  );
};

export default LoginPage;
