import React from 'react';
import './BlogCard.css';

function BlogCard(props) {
  return (
    <div className="blog-card">
      <img className="blog-card__img" src="https://source.unsplash.com/random/800x600" alt="random unsplash" />
      <div className="blog-card__info">
        <h2 className="blog-card__title">Blog Title</h2>
        <h3 className="blog-card__category">Category</h3>
        <p>The first part of the text of the blog...</p>
        <p>Blog Author</p>
      </div>
    </div>    
  );
}

export default BlogCard;