import "./Post.css";

export const Post = ({ post }) => {
  return (
    <article className="post-card">
      <div className="post-card__inner">
        <div className="post-card__head">
          <div className="post-card__icon-wrapper">
            <img src="https://i.postimg.cc/nhrTHpdw/user-icon.png" alt="" />
          </div>
          <p className="post-card__author-name">Name</p>
        </div>
        <div className="post-card__body">
          <div className="post-card__content">
            {/* <div className="post-card__title">{post.title}</div> */}
            <div className="post-card__text">{post.content}</div>
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
