import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import BlogsPage from '../../pages/BlogsPage/BlogsPage';
import BlogPage from '../../pages/BlogPage/BlogPage';

import './BlogSubLayout.css';

function BlogSubLayout(props) {

  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <BlogPage post={props.post} />
      </Route>
      <Route path={`${match.path}`}>
        <BlogsPage posts={props.posts} />
      </Route>
    </Switch>
  );
}

export default BlogSubLayout;
