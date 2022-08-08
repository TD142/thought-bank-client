import Login from "../../login/Login";

const LoginPage = ({ updateUser }) => {
  return (
    <div>
      <section className="hero">
        <div className="hero__container"></div>

        <Login updateUser={updateUser} />
      </section>
    </div>
  );
};

export default LoginPage;
