import React from 'react';
import PropTypes from 'prop-types';

import './BlogCard.css';

// id: posts[20].id,
// author: authors[2],
// title: posts[20].title,
// body: posts[20].body,
// img: elf,

function BlogCard(props) {
  return (
    <div className="blog-card" onClick={props.onClick}>
      <img className="blog-card__img" src={props.src} alt="random unsplash" />
      <div className="blog-card__info">
        <h2 className="blog-card__title">{props.title}</h2>
        <h3 className="blog-card__category">{props.category}</h3>
        <p className="blog-card__body">{props.body}</p>
        <p className="blog-card__author">{props.author}</p>
      </div>
    </div>    
  );
}

BlogCard.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BlogCard;