import React from 'react';
import { Comment } from '../comment/Comment';

export const CommentList = ({ comments }) => {
  return comments && comments.length > 0 ? (
    <ul key={comments._id} className="article__comment-list">
      {comments.map((comment) => (
        <Comment key={comment._id} commentData={comment} />
      ))}
    </ul>
  ) : (
    <p className="article__not-comment-message">現在コメントはありません</p>
  );
};
