import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comment } from '../comment/Comment';
import './Article.css';

export const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const getArticleData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/posts/${id}`);
        const json = await res.json();
        setArticle(json);
      } catch (error) {
        console.error(error);
      }
    };
    getArticleData();
  }, []);

  return (
    <article className="article">
      <div className="article__head">
        <h1 className="article__title">{article.title}</h1>
        <div className="article__favorite">
          <button className="article__favorite-icon"></button>
          <span className="article__favorite-text"></span>
        </div>
      </div>
      {article.thumbnail && (
        <figure className="article__img-wrapper">
          <img src={article.thumbnail} alt="" />
        </figure>
      )}
      <div className="article__text">{article.content}</div>

      <div className="article__comment">
        <p className="article__comment-head">コメント</p>
        <div className="article__comment-field">
          <input
            type="text"
            name=""
            id=""
            className="article__comment-input"
            placeholder="コメントを入力する"
          />
          <div className="article__comment-button-wrapper">
            <button type="submit" className="article__comment-submit" disabled>
              投稿する
            </button>
            <button
              type="button"
              className="article__comment-reset-button"
              disabled
            >
              リセット
            </button>
          </div>
        </div>
        {article.comments && article.comments.length > 0 ? (
          <ul className="article__comment-list">
            {article.comments.map((data) => (
              <Comment key={data.userId} commentData={data} />
            ))}
          </ul>
        ) : (
          <p className="article__not-comment-message">
            現在コメントはありません
          </p>
        )}
      </div>
    </article>
  );
};
