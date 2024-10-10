import React from 'react';
import './HeaderComponent.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">BeautyBlend</Link> {/* Replace with your chosen app name */}
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/foundation">Foundation</Link></li>
          <li><Link to="/lipstick">Lipstick</Link></li>
          <Link to="/wishlist">Wishlist</Link>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <div className="icons">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
