import { Link } from 'react-router-dom';
import './Register.css';

export const Register = () => {
  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__field-wrapper">
          <p className="register__title">Register</p>
          <input
            type="text"
            className="register__field"
            placeholder="User Name"
          />
          <input type="email" className="register__field" placeholder="Email" />
          <input
            type="password"
            className="register__field"
            name=""
            id=""
            placeholder="Password"
          />
          <button className="register__button">Register</button>
          <p className="register__link">
            Already a user? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="register__img-wrapper">
          <img src="./assets/images/register.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
