import React from 'react';

import BlogCard from './components/BlogCard/BlogCard';

import './App.css';

function App() {
  return (
    <main className="app">
      <div className="app__blog-card-container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}

export default App;
