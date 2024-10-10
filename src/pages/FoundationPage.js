// pages/FoundationPage.js

import React, { useState, useEffect, useContext } from 'react';
import './FoundationPage.css';
import SearchBar from '../components/SearchBar';
import Rating from '../components/Rating';
import { WishlistContext } from '../context/WishlistContext';

const FoundationPage = () => {
  const [foundations, setFoundations] = useState([]);
  const [filteredFoundations, setFilteredFoundations] = useState([]);
  const { addToWishlist, wishlist } = useContext(WishlistContext);
  const handleRatingSubmit = (productId, rating) => {
    // Simulating the submission process
    console.log(`Rating submitted for product ${productId}: ${rating}`);
    alert('Rating submitted!');
  };
  

  const foundationProducts = [
    {
      id: 1,
      name: "Foundation 1",
      description: "A lightweight foundation for all-day wear.",
      price: 29.99,
      imageUrl: "/assets/lipstick/dark/lipstick1.png"
    },
    {
      id: 2,
      name: "Foundation 2",
      description: "A full-coverage foundation for a flawless finish.",
      price: 39.99,
      imageUrl: "/assets/lipstick/dark/lipstick1.png"
    },
    // Add more products as needed
  ];
  
  useEffect(() => {
    setFoundations(foundationProducts);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = foundations.filter(foundation =>
      foundation.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoundations(filtered);
  };

  return (
    <div className="foundation-page">
      <h1>Foundations</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="foundation-grid">
        {filteredFoundations.map(foundation => (
          <div className="foundation-card" key={foundation.id}>
            <img src={foundation.imageUrl} alt={foundation.name} className="foundation-image" />
            <div className="foundation-details">
              <h2>{foundation.name}</h2>
              <p>{foundation.description}</p>
              <p>Price: ${foundation.price}</p>
              <Rating onRating={(rate) => handleRatingSubmit(foundation.id, rate)} />
              <button onClick={() => addToWishlist(foundation)}>
              Add to Wishlist
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundationPage;
