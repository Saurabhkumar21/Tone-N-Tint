// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoundationPage from './pages/FoundationPage';
import LipstickPage from './pages/LipstickPage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BannerComponent from './components/BannerComponent';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <WishlistProvider>
      <div className="App">
        <Router>
          <HeaderComponent />
          <BannerComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/foundation" element={<FoundationPage />} />
            <Route path="/lipstick" element={<LipstickPage />} />
          </Routes>
          <FooterComponent />
        </Router>
      </div>
    </WishlistProvider>
  );
}

export default App;
