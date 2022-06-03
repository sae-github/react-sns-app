import { Comment } from "../comment/Comment";
import "./Article.css";

export const Article = () => {
  return (
    <article className="article">
      <div className="article__head">
        <h1 className="article__title">タイトル</h1>
        <div className="article__favorite">
          <button className="article__favorite-icon"></button>
          <span className="article__favorite-text"></span>
        </div>
      </div>
      <figure className="article__img-wrapper">
        <img
          src="https://i.postimg.cc/YSrXJmJ6/tech-daily-Hpek-D5ujnb-Q-unsplash.jpg"
          alt=""
        />
      </figure>
      <div className="article__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <Comment />
    </article>
  );
};
