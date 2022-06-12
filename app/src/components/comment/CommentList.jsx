import { CommentPost } from './CommentPost';

export const CommentList = ({ comments }) => {
  return comments && comments.length > 0 ? (
    <ul key={comments._id} className="article__comment-list">
      {comments.map((comment) => (
        <CommentPost key={comment._id} commentData={comment} />
      ))}
    </ul>
  ) : (
    <p className="article__not-comment-message">現在コメントはありません</p>
  );
};
