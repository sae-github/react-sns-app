import { useEffect, useState } from 'react';
import { CommentPost } from './CommentPost';

export const CommentList = ({ commentData }) => {
  const [comment, setComment] = useState(commentData);

  useEffect(() => {
    if (commentData) {
      commentData.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateA < dateB ? 1 : -1;
      });
      setComment(commentData);
    }
  }, [commentData]);

  return comment && comment.length > 0 ? (
    <ul key={comment._id} className="article__comment-list">
      {comment.map((data) => (
        <CommentPost key={data._id} commentData={data} />
      ))}
    </ul>
  ) : (
    <p className="article__not-comment-message">現在コメントはありません</p>
  );
};
