import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comment } from '../comment/Comment';

import { CommentInputField } from '../commentInputField/CommentInputField';
import { CommentList } from '../commentList/CommentList';
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
  }, [id]);

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
        <CommentInputField id={id} />
        <CommentList comments={article.comments} />
      </div>
    </article>
  );
};
