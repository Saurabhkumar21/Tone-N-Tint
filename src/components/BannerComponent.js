// components/Banner.js

import React from 'react';
import './Banner.css'; // Styling for banner

const BannerComponent = () => {
  return (
    <div className="banner">
      <img src="/assets/images/banner1.png" alt="Banner" />
      <div className="banner-text">
        <h2>Discover Your Perfect Shade</h2>
        <p>Explore our foundation collection for all skin types</p>
      </div>
    </div>
  );
};

export default BannerComponent;
