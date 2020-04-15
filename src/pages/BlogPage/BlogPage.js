import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import doctor from '../../assets/doctor.jpeg';
import cupcakes from '../../assets/cupcakes.jpeg';
import elf from '../../assets/elf.jpeg';

import BlogPost from '../../components/BlogPost/BlogPost';

import './BlogPage.css';

const images = [
  doctor,
  cupcakes,
  elf,
];

const authors = [
  'Ada Lovelace',
  'Grace Hopper',
  'Leslie Knope',
];

function BlogPage(props) {

  const { id }= useParams('id');
  const [post, setPost] = useState({});

  const formatPost = post => {
    return {
      title: post.title.substring(0, Math.floor(Math.random() * 10 + 10)),
      author: authors[post.id - 1],
      category: 'Fitness',
      date: 'October 27, 2012',
      authorImg: `https://randomuser.me/api/portraits/women/4${post.id}.jpg`,
      postImg: images[post.id - 1],
    };
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => setPost(formatPost(post)))
      .catch(console.error);
  }, [id]);

  return (
    <div className="blog-page">
      { post.title ? <BlogPost {...post} /> : null }
    </div>
  );
}

BlogPage.propTypes = {
  post: PropTypes.object,
};

export default BlogPage;
