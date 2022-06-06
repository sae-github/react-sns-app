import { useEffect, useState } from 'react';
import './Post.css';

export const Post = ({ post }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/users/${post.userId}`
        );
        const json = await res.json();
        setUser(json);
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, [post.userId]);

  return (
    <article className="post-card">
      <div className="post-card__inner">
        <div className="post-card__head">
          <div className="post-card__icon-wrapper">
            <img src="https://i.postimg.cc/nhrTHpdw/user-icon.png" alt="" />
          </div>
          <p className="post-card__author-name">{user.username}</p>
        </div>
        <div className="post-card__body">
          <p className="post-card__title">{post.title}</p>
          <div className="post-card__content">
            <div className="post-card__text-wrapper">
              <div className="post-card__text">{post.content}</div>
            </div>
            {post.thumbnail && (
              <div className="post-card__img-wrapper">
                <img src={post.thumbnail} alt="" />
              </div>
            )}
          </div>
          <div className="post-card__meta">
            <div className="post-card__favorite">
              <img
                src="https://i.postimg.cc/4NGHbgj2/favorite-icon.png"
                alt=""
                className="post-card__icon"
              />
              <span className="post-card__favorite-text">
                {post.likes.length}
              </span>
            </div>
            <div className="post-card__comment">
              <img
                src="https://i.postimg.cc/g0hGTwZV/comment.png"
                className="post-card__icon"
                alt=""
              />
              <span className="post-card__comment-text">
                {post.comment.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
