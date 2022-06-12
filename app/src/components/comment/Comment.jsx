import { CommentInputField } from './CommentInputField';
import { CommentList } from './CommentList';
import './Comment.css';

export const Comment = ({ commentData, id }) => {
  return (
    <div className="article__comment">
      <p className="article__comment-head">コメント</p>
      <CommentInputField id={id} />
      <CommentList comments={commentData} />
    </div>
  );
};
