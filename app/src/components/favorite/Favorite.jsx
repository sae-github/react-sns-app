import { useEffect, useState } from 'react';

export const Favorite = ({ article }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteLength, setFavoriteLength] = useState(0);

  useEffect(() => {
    if (article) {
      const result = article.likes.find((id) => {
        return id === '629c9c8ac7b3a2b04e2f8669';
      });
      setIsFavorite(result);
      setFavoriteLength(article.likes.length);
    }
  }, [article]);

  const onClickFavoriteButton = async (event) => {
    setIsFavorite(!isFavorite);
    try {
      await fetch(`http://localhost:3001/api/posts/${article._id}/favorite`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: '629c9c8ac7b3a2b04e2f8669',
        }),
      });
      if (event.target.dataset.favoriteAction === 'registered') {
        setFavoriteLength(favoriteLength + 1);
      } else {
        setFavoriteLength(favoriteLength - 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="article__favorite">
      <button
        className="article__favorite-icon"
        data-favorite-action={isFavorite ? 'registered' : 'unregistered'}
        onClick={onClickFavoriteButton}
      ></button>
      <span className="article__favorite-text">
        {article.likes && favoriteLength}
      </span>
    </div>
  );
};
