import React, { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import BlogsPage from '../../pages/BlogsPage/BlogsPage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import CreatePostPage from '../../pages/CreatePostPage/CreatePostPage';

import cupcakes from '../../assets/cupcakes.jpeg';
import doctor from '../../assets/doctor.jpeg';
import elf from '../../assets/elf.jpeg';


import './BlogSubLayout.css';

const postsUrl = 'https://ds-jsonplaceholder-api.herokuapp.com/posts';
// eslint-disable-next-line
const imgAPIURL = 'https://source.unsplash.com/random/800x600';

const authors = [
  'Ada Lovelace',
  'Grace Hopper',
  'Leslie Knope',
];

function BlogSubLayout(props) {

  const match = useRouteMatch();
  const [posts, setPosts] = useState([]);

  const setupPosts = posts => {
    setPosts([
      {
        id: posts[0]._id,
        author: authors[0],
        title: posts[0].title.substring(0, 8),
        body: posts[0].body.substring(0, 100) + '...',
        src: doctor,
        category: 'Science',
      },
      {
        id: posts[1]._id,
        author: authors[1],
        title: posts[1].title.substring(0, 12),
        body: posts[1].body.substring(0, 100) + '...',
        src: cupcakes,
        category: 'Literature',
      },
      {
        id: posts[2]._id,
        author: authors[2],
        title: posts[2].title.substring(0, 5),
        body: posts[2].body.substring(0, 100) + '...',
        src: elf,
        category: 'Health',
      },
    ]);
  };

  useEffect(() => {
    fetch(postsUrl)
      .then(response => response.json())
      .then(posts => setupPosts(posts))
      .catch(console.error);
  }, []);

  return (
    <Switch>
      <Redirect from={`${match.path}/all`} to={match.path} />
      <Route path={`${match.path}/new`}>
        <CreatePostPage />
      </Route>
      <Route path={`${match.path}/:id`}>
        <BlogPage />
      </Route>
      <Route path={`${match.path}`}>
        <BlogsPage posts={posts} />
      </Route>
    </Switch>
  );
}

export default BlogSubLayout;
