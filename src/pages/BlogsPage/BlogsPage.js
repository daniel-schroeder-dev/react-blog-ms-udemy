import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from '../../components/BlogCard/BlogCard';

import './BlogsPage.css';

function BlogsPage(props) {

  const posts = props.posts.map(post => (
    <BlogCard key={post.id} {...post} onClick={() => props.handleLoadPost(post.id)} />
  ));

  return (
    <div className="blogs-page">
      { posts.length ? posts : null }
    </div>
  );
}

BlogsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  handleLoadPost: PropTypes.func.isRequired,
};

export default BlogsPage;
