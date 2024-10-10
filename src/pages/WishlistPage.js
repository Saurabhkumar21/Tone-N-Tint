// pages/WishlistPage.js

import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import './WishlistPage.css';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map(item => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.imageUrl} alt={item.name} className="wishlist-image" />
              <div className="wishlist-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
