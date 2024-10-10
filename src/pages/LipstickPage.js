// pages/LipstickPage.js

import React, { useState, useEffect, useContext } from 'react';
import './LipstickPage.css';
import { WishlistContext } from '../context/WishlistContext';
import Rating from '../components/Rating';

const LipstickPage = () => {
  const [lipsticks, setLipsticks] = useState([]);
  const { addToWishlist } = useContext(WishlistContext);

  const handleRatingSubmit = (productId, rating) => {
    // Simulating the submission process
    console.log(`Rating submitted for product ${productId}: ${rating}`);
    alert('Rating submitted!');
  };
  

  const lipstickProducts = [
    {
      id: 1,
      name: "lipstick 1",
      description: "A lightweight lipstick for all-day wear.",
      price: 29.99,
      imageUrl: "/assets/lipstick/dark/lipstick1.png"
    },
    {
      id: 2,
      name: "lipstick 2",
      description: "A full-coverage lipstick for a flawless finish.",
      price: 39.99,
      imageUrl: "/assets/lipstick/dark/lipstick1.png"
    },
    // Add more products as needed
  ];

  useEffect(() => {
    setLipsticks(lipstickProducts);
  }, []);

  return (
    <div className="lipstick-page">
      <h1>Lipsticks</h1>
      <div className="lipstick-grid">
        {lipsticks.map(lipstick => (
          <div className="lipstick-card" key={lipstick.id}>
            <img src={lipstick.imageUrl} alt={lipstick.name} className="lipstick-image" />
            <div className="lipstick-details">
              <h2>{lipstick.name}</h2>
              <p>{lipstick.description}</p>
              <p>Price: ${lipstick.price}</p>
              <button onClick={() => addToWishlist(lipstick)}>Add to Wishlist</button>
              <Rating onRating={(rate) => handleRatingSubmit(lipstick.id, rate)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LipstickPage;
