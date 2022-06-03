import { Article } from "../../components/article/Article";
import { Header } from "../../components/header/Header";
import "./Single.css";

export const Single = () => {
  return (
    <>
      <Header />
      <div className="single">
        <div className="single__inner">
          <div className="single__box">
            <Article />
          </div>
        </div>
      </div>
    </>
  );
};
