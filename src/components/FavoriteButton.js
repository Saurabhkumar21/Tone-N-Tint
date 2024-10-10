import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';

const FavoriteButton = ({ productId }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    // Optionally, send a request to the server to mark the product as favorited/unfavorited
    // axios.post(`/api/favorite/${productId}`, { isFavorited: !isFavorited });
  };

  return (
    <button className="favorite-button" onClick={toggleFavorite}>
      <FontAwesomeIcon icon={isFavorited ? solidHeart : regularHeart} color={isFavorited ? 'red' : 'gray'} />
      {isFavorited ? 'Favorited' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
