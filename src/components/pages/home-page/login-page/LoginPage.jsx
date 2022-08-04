import Login from "../../../login/Login";

const LoginPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__container">
          <h1 className="home-page__title">Thought Bank</h1>
        </div>

        <Login />
      </section>
    </div>
  );
};

export default LoginPage;
