import "./RegisterPage.scss";

import Register from "../../register/Register";

const RegisterPage = ({ updateUser, populateUserDetails }) => {
  return (
    <div>
      <section className="register__hero">
        <div className="register-hero__container">
          <Register
            populateUserDetails={populateUserDetails}
            updateUser={updateUser}
          />
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
