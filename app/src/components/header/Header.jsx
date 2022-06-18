import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/">
          <h1 className="header__logo">React SNS App</h1>
        </Link>
        <Link to="/mypage">
          <div className="header__icon">
            <img src="/assets/images/user-icon.svg" alt="" />
            <p className="header__icon-text">マイページ</p>
          </div>
        </Link>
      </div>
    </header>
  );
};
