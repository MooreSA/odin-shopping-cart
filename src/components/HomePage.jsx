import React from 'react';
import NavBar from './NavBar';
import HomeContent from './HomeContent';
import Footer from './Footer';

const HomePage = () => (
  <div className="page">
    <NavBar activePage={null} />
    <HomeContent />
    <Footer />
  </div>
);

export default HomePage;
