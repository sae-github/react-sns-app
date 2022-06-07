import { useState, useEffect } from 'react';
import './Comment.css';

export const Comment = ({ commentData }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/users/${commentData.userId}`
        );
        const json = await res.json();
        setUser(json);
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, []);

  return (
    <li className="comment-item">
      <div className="comment-item__wrapper">
        <div className="comment-item__icon">
          <img src="https://i.postimg.cc/nhrTHpdw/user-icon.png" alt="" />
        </div>
        <div className="comment-item__content">
          <p className="comment-item__name">{user.username}</p>
          <p className="comment-item__text">{commentData.comment}</p>
        </div>
      </div>
    </li>
  );
};
