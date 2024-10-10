// components/Rating.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Rating.css';

const Rating = ({ onRating }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    onRating(rate); // Pass rating to parent component
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map(star => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          onClick={() => handleRating(star)}
          className={star <= rating ? 'star filled' : 'star'}
        />
      ))}
    </div>
  );
};

export default Rating;
