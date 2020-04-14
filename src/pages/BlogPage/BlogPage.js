import React from 'react';
import PropTypes from 'prop-types';

import BlogPost from '../../components/BlogPost/BlogPost';

import './BlogPage.css';

function BlogPage(props) {
  return (
    <div className="blog-page">
      { props.post ? <BlogPost {...props.post} /> : null }
    </div>
  );
}

BlogPage.propTypes = {
  post: PropTypes.object,
};

export default BlogPage;
