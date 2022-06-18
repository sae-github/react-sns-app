import './Login.css';

export const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__field-wrapper">
          <p className="login__title">Sign Up</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="login__field"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="login__field"
          />
          <button className="login__button">Login</button>
          <p className="login__link">Create Account</p>
        </div>
        <div className="login__img-wrapper">
          <img src="./assets/images/login.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
