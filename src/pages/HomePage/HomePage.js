import React from 'react';
import './HomePage.css';

function HomePage(props) {
  return (
    <div className="home-page">
      <h1>Welcome to Dev Blog</h1>
      <p className="home-page__description">This app is a demonstration of the React Router. Click through the navigation links and relish the awesome-ness that is a React SPA!</p>
    </div>
  );
}

export default HomePage;
