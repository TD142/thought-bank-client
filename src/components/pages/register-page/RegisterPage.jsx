import "./RegisterPage.scss";

import Register from "../../register/Register";

const RegisterPage = () => {
  return (
    <div>
      <section className="register__hero">
        <div className="register-hero__container">
          <Register />
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
