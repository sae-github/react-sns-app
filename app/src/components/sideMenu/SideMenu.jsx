import './SideMenu.css';

export const SideMenu = () => {
  return (
    <aside className="side-menu">
      <ul className="side-menu__list">
        <li className="side-menu__item">
          <img src="./assets/images/user.png" alt="" />
          Profile
        </li>
        <li className="side-menu__item">
          <img src="./assets/images/heart.png" alt="" />
          Favorite
        </li>
        <li className="side-menu__item">
          <img src="./assets/images/logout.png" alt="" />
          SignOut
        </li>
      </ul>
    </aside>
  );
};
