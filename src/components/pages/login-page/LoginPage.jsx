import Login from "../../login/Login";

const LoginPage = ({ setUser }) => {
  return (
    <div>
      <section className="hero">
        <div className="hero__container">
          <h1 className="home-page__title">Thought Bank</h1>
        </div>

        <Login setUser={setUser} />
      </section>
    </div>
  );
};

export default LoginPage;
