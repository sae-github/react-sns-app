import { CommentInputField } from './CommentInputField';
import { CommentList } from './CommentList';
import './Comment.css';

export const Comment = ({ commentData, articleId }) => {
  return (
    <div className="article__comment">
      <p className="article__comment-head">コメント</p>
      <CommentInputField id={articleId} />
      <CommentList comments={commentData} />
    </div>
  );
};
