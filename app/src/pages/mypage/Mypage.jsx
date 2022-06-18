import { Header } from '../../components/header/Header';
import { SideMenu } from '../../components/sideMenu/SideMenu';
import './Mypage.css';

export const Mypage = () => {
  return (
    <>
      <Header />
      <div className="my-page">
        <div className="my-page__inner">
          <SideMenu />
        </div>
      </div>
    </>
  );
};
