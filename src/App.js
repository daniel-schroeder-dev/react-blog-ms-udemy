import React from 'react';

import cupcakes from './assets/cupcakes.jpeg';
import doctor from './assets/doctor.jpeg';
import elf from './assets/elf.jpeg';

import BlogCard from './components/BlogCard/BlogCard';

import './App.css';

function App() {
  return (
    <main className="app">
      <div className="app__blog-card-container">
        <BlogCard src={cupcakes} />
        <BlogCard src={doctor} />
        <BlogCard src={elf} />
      </div>
    </main>
  );
}

export default App;
