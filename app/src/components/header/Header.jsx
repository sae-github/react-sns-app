import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/">
          <h1 className="header__logo">React SNS App</h1>
        </Link>
        <div className="header__icon">
          <img src="" alt="" />
        </div>
      </div>
    </header>
  );
};
