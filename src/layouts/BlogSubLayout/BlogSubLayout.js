import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import BlogsPage from '../../pages/BlogsPage/BlogsPage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import CreatePostPage from '../../pages/CreatePostPage/CreatePostPage';

import './BlogSubLayout.css';

function BlogSubLayout(props) {

  const match = useRouteMatch();

  return (
    <Switch>
      <Redirect from={`${match.path}/all`} to={match.path} />
      <Route path={`${match.path}/new`}>
        <CreatePostPage />
      </Route>
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
