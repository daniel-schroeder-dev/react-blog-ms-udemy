import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import BlogCard from '../../components/BlogCard/BlogCard';

import './BlogsPage.css';

function BlogsPage(props) {

  const match = useRouteMatch();

  const posts = props.posts.map(post => (
    <li key={post.id}>
      <Link className="blogs-page__blog-link" to={`${match.path}/${post.id}`}>
        <BlogCard {...post} />
      </Link>
    </li>
  ));

  return (
    <div className="blogs-page">
      <ul className="blogs-page__blog-list">
      { posts.length ? posts : null }
      </ul>
    </div>
  );
}

BlogsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  // handleLoadPost: PropTypes.func.isRequired,
};

export default BlogsPage;
