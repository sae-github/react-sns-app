import { Header } from '../../components/header/Header';
import './NotFound.css';

export const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <p className="not-found__title">Not Found</p>
        <p className="not-found__text">このページは存在しません</p>
      </div>
    </>
  );
};
