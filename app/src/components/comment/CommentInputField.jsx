import { useState } from 'react';

export const CommentInputField = ({ id }) => {
  const [comment, setComment] = useState('');
  const onClickSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(`http://localhost:3001/api/posts/${id}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: '629c9c8ac7b3a2b04e2f8669',
          comment: comment,
        }),
      });
      setComment('');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="article__comment-field">
      <input
        type="text"
        name=""
        id=""
        className="article__comment-input"
        placeholder="コメントを入力する"
        onChange={(event) => setComment(event.target.value)}
        value={comment}
      />
      <div className="article__comment-button-wrapper">
        <button
          type="submit"
          className="article__comment-submit"
          disabled={!comment}
          onClick={onClickSubmit}
        >
          投稿する
        </button>
        <button
          type="button"
          className="article__comment-reset-button"
          disabled={!comment}
          onClick={() => setComment('')}
        >
          リセット
        </button>
      </div>
    </div>
  );
};
