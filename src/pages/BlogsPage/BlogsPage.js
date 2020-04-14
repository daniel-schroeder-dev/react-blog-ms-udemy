import React from 'react';
import PropTypes from 'prop-types';

import './BlogsPage.css';

function BlogsPage(props) {
  return (
    <div className="blogs-page">
      { props.posts.length ? props.posts : null }
    </div>
  );
}

BlogsPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogsPage;
